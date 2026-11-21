# Blu Capital Website

Multi-page business financing website with product information, customer testimonials and reviews, video success stories, contact tools, and a financing inquiry flow.

Live site: https://blu-capital-reimagined.aredth7.chatgpt.site/

## Preview

```sh
python3 -m http.server 5186 --directory dist
```

Open http://localhost:5186/. The deployed website is static HTML, CSS, and JavaScript with no build dependencies. The root `index.html` forwards to `dist/index.html` for a repository-root static host.

## Features

- Dedicated pages for six financing products, requirements, About, success stories, careers, contact, rates, and applications.
- Responsive photo headers, current Blu branding, accessible menus, and contact icons.
- Exact customer-provided testimonials and reviews; review dates and platform labels are hidden.
- Three customer-story YouTube players and channel links.
- Rule-based chatbot; no paid AI calls or API key required.
- Message and callback tabs, email/WhatsApp composers, and copy actions.
- Three-step inquiry with business/contact details and a review step.
- Optional secure application using Blu's existing Typeform.
- Local Terms of Use and Privacy Policy PDFs.
- El Paso address: 2150 Trawood Dr Ste B200, El Paso, TX 79935.

## Contact and application behavior

Email inquiry, rate, and callback forms prepare drafts; visitors must send them in their email app. WhatsApp messages require the visitor to confirm Send. A callback request is not a booked appointment. The website does not independently send email, store submissions, approve financing, or move money. Direct online applications are submitted through Blu's existing Typeform. The chatbot provides predefined answers and routes visitors to the team for personalized terms.

## Editing and checks

Shared page generation uses Python 3 and Beautiful Soup:

```sh
python3 -m pip install beautifulsoup4
python3 scripts/generate-site.py
python3 scripts/check-site.py
node --check dist/site.js
node --check dist/chat.js
```

- `scripts/generate-site.py`: shared headers, navigation, footers, product content, and page generation.
- `content.json`: product data and reusable form/section markup.
- `reviews.json`, `testimonials.json`: customer content and retained provenance.
- `templates/`: application, About, and video-story markup.
- `dist/site.css`, `dist/site.js`, `dist/chat.js`: styling and interaction logic.
- `dist/`: ready-to-serve pages, photos, branding, and legal documents.
- `.openai/hosting.json`: existing Sites deployment configuration; publishing requires authorized Sites access.

The Spanish-language switch is disabled. `dist/es.html` remains an unlinked historical page. Blu Mexico remains linked separately.

## Media

Photography includes Ant Rozetsky, Bhargav Panchal, and Josh Withers / Unsplash, with attribution links in the footer. Blu's existing site supplied its logo and testimonial industry images. Videos are hosted on the BluCapital YouTube channel. Typeform and YouTube remain third-party services.
