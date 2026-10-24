# Blu Capital — Website Redesign

Independent redesign concept with responsive layouts, a financing selector, service details, FAQs, and an interactive contact composer.

## Run locally

```sh
python3 -m http.server 5173
```

Open http://localhost:5173. No build step or dependencies required.

## Contact behavior

- Visitors select an office and financing service and prepare a message.
- Email drafts route to the chosen office; WhatsApp opens Blu's published Plano sales number.
- Visitors review and send in their email app or WhatsApp.
- The website does not store messages, send email directly, or process financing applications.
- Phone links initiate calls on supported devices.

Direct website email delivery would require a server-side mail provider and authorized sender configuration.

## Files

- `index.html`: layout, styling, and interactions
- `factory.jpg`: industrial photograph

## Attribution

Company details are based on https://www.blucapital.com/ and should be confirmed before production use. This is an independent concept, not the company's official website.

Photography: Ant Rozetsky / Unsplash — https://unsplash.com/photos/yNa7zPNioJM
Fonts: DM Sans and Manrope via Google Fonts, with system fallbacks.
