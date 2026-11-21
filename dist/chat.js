const knowledge = [
 {test:/reverse|supplier/,answer:'Reverse factoring helps suppliers receive payment earlier while your business pays Blu under agreed terms. Discuss fees and your usual payment cycle with sales@blucapital.us.'},
 {test:/purchase|\bpo\b|materials/,answer:'Purchase order advances support materials and supplies for confirmed orders. We consider the purchasing customer’s credit and can pay suppliers directly. Ask sales about eligibility and timing.'},
 {test:/factoring|invoice|freight|trucking/,answer:'Invoice factoring provides working capital against customer invoices. We evaluate your customers and business model; you can discuss which invoices to finance. Transportation and trucking businesses are among the industries Blu serves.'},
 {test:/equipment|vehicle|truck|machine|loan amount/,answer:'Equipment financing supports business equipment, vehicles, inventory, and expansion. We offer financing from $20,000 to $10 million, subject to financial review, with terms up to 36 months. Ask sales for a proposal for your situation.'},
 {test:/short.term|restructur|mca/,answer:'Short-term lending supports established cash flow and debt restructuring. We offer $20,000 to $1 million, subject to review, with fixed weekly or monthly payments and terms up to 36 months. Final rates and conditions come from the sales team.'},
 {test:/line|revolving|payroll|inventory/,answer:'A small business line can cover payroll, inventory, and other operating needs. It is revolving financing, with interest based on funds used and access or repayment timing agreed around your business plan.'},
 {test:/rate|fee|cost|interest|price|collateral/,answer:'Pricing, fees, collateral requirements, and payment terms depend on the product and your business. I cannot provide a personalized quote. Email sales@blucapital.us or use the contact form to ask for written terms.'},
 {test:/qualif|eligib|require|credit|document/,answer:'We generally seek established businesses with about two years of operations and sound credit history, but reviews individual circumstances. Factoring also considers customer credit. Ask the team for the document checklist for your selected product.'},
 {test:/time|fast|long|24|approval|pre.approv/,answer:'We review complete applications for pre-approval within 24 hours after receiving all requested information. Actual review and funding times depend on the application and product; approval is not guaranteed.'},
 {test:/apply|application|start/,answer:'Use the financing application on the Apply page, or prepare a message using the contact form. Our online application takes about five minutes. A team member can explain the next steps and required documents.'},
 {test:/el paso/,answer:'El Paso: 2150 Trawood Dr Ste B200, El Paso, TX 79935. Office: (915) 219 7708. Sales: (915) 727 7883. Email: sales@blucapital.us.'},
 {test:/plano/,answer:'Plano: 5700 Tennyson Parkway, Suite 300, Office #3, Plano, TX 75024. Office: (214) 971 0135. Sales and WhatsApp: (214) 876 0504. Email: hi@blucapital.com.'},
 {test:/mexico|border|country|countries/,answer:'We serve businesses in the United States, Mexico, or both. Visit blucapital.mx for the Mexico division, or contact the Plano or El Paso team about your cross-border operation.'},
 {test:/career|job|hiring|resume/,answer:'We have no current openings. You can email your résumé to manuel@blucapital.com for future opportunities.'},
 {test:/about|history|mission|founded/,answer:'We started as a family business in Mexico in 2013. Our mission focuses on invoice factoring and financial services for small businesses across the U.S. and Mexico.'},
 {test:/contact|email|human|person|sales|phone|office|location/,answer:'Email sales@blucapital.us. El Paso sales: (915) 727 7883. Plano sales and WhatsApp: (214) 876 0504. Use “Contact sales” below to prepare a message for the team.'},
 {test:/hello|^hi\b|hey|help|service|offer|option/,answer:'I can help with invoice factoring, business lines, equipment financing, short-term lending, purchase order advances, reverse factoring, applications, and office contacts. What would you like to know?'}
];
function answerQuestion(question){const q=question.toLowerCase().trim();return (knowledge.find(k=>k.test.test(q))||{answer:'I can answer common questions about Blu’s financing and contact details, but I do not have that information. Please email sales@blucapital.us or choose Contact sales below so the team can help.'}).answer;}
if(typeof module!=='undefined')module.exports={answerQuestion};
if(typeof document!=='undefined'){
const launch=document.querySelector('#chatLaunch'),panel=document.querySelector('#chatPanel'),input=document.querySelector('#chatInput'),log=document.querySelector('#chatLog');
function toggle(open){panel.hidden=!open;launch.setAttribute('aria-expanded',String(open));if(open)input.focus();else launch.focus();}
launch.addEventListener('click',()=>toggle(panel.hidden));document.querySelector('#chatClose').addEventListener('click',()=>toggle(false));
panel.addEventListener('keydown',e=>{if(e.key==='Escape')toggle(false)});
function message(text,who){const p=document.createElement('p');p.className='chat-message '+who;p.textContent=text;log.append(p);log.scrollTop=log.scrollHeight;}
function ask(q){if(!q.trim())return;message(q,'visitor');message(answerQuestion(q),'assistant');input.value='';}
document.querySelector('#chatForm').addEventListener('submit',e=>{e.preventDefault();if(input.reportValidity())ask(input.value)});
document.querySelectorAll('[data-question]').forEach(b=>b.addEventListener('click',()=>ask(b.dataset.question)));
document.querySelector('#chatContact').addEventListener('click',()=>{toggle(false);});
}
