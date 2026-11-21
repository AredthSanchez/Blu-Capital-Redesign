from pathlib import Path
from urllib.parse import urlsplit,unquote
from bs4 import BeautifulSoup
r=Path(__file__).resolve().parent.parent/'dist'
errors=[];pages=list(r.glob('*.html'));links=0
for p in pages:
 s=BeautifulSoup(p.read_text(),'html.parser')
 if len(s.select('h1'))!=1:errors.append(f'{p.name}: expected one h1')
 ids=[e['id'] for e in s.select('[id]')]
 if len(ids)!=len(set(ids)):errors.append(f'{p.name}: duplicate IDs')
 for e in s.select('a[href],script[src],link[href],img[src]'):
  target=e.get('href',e.get('src',''));u=urlsplit(target)
  if u.scheme or u.netloc:continue
  if not u.path and not u.fragment:continue
  path=(p.parent/unquote(u.path)) if u.path else p
  if not path.is_file():errors.append(f'{p.name}: missing {target}');continue
  if u.fragment and path.suffix=='.html':
   linked=BeautifulSoup(path.read_text(),'html.parser')
   if not linked.find(id=u.fragment):errors.append(f'{p.name}: missing anchor {target}')
  links+=1
 if p.name!='es.html':
  for i in ['rateForm','callbackForm','conversationForm']:
   if s.find(id=i):
    for e in s.select(f'#{i} input,#{i} select,#{i} textarea'):
     if e.get('type')=='hidden':continue
     if not s.select(f'label[for="{e.get("id","")}"]'):errors.append(f'{p.name}: missing field label')
 assert not s.select('a[href^="https://blucapital.com"],a[href^="https://www.blucapital.com"]')
print(f'Checked {len(pages)} pages and {links} local links/assets.')
if errors:raise SystemExit('\n'.join(errors))
print('All navigation, assets, anchors, headings, IDs, and form labels passed.')
