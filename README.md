# Shiva Ganga Nritya Dhaara

A polished, production-ready landing page for **Shiva Ganga Nritya Dhaara**, a classical dance academy offering Bharatanatyam, Mohiniyattam, semi-classical, and cinematic dance training.

The site is built as a premium single-page React experience with strong visual identity, local academy imagery, Google Maps integration, WhatsApp enquiry flow, responsive layout, and Vercel deployment support.

## Live Product Scope

This landing page is designed to help prospective students and parents quickly understand the academy, explore dance styles, view class details, find the location, and enquire through WhatsApp.

Key sections include:

- Hero section with academy branding and rotating visual background
- About and instructor profile sections
- Dance styles with interactive flip-card descriptions
- Class details with days, batch timings, duration, online/offline modes, and benefits
- Embedded Google Maps location with direct Google Maps link
- Local gallery images from the academy assets
- Testimonials and call-to-action sections
- Contact section with phone, email, location, WhatsApp quick link, and WhatsApp-powered enquiry form
- Footer with logo and contact information

## Recent Enhancements

The project has been upgraded with several production-facing improvements:

- Added academy logo support in navbar and footer
- Added local gallery images from `public/assets/images/gallery`
- Added favicon, Apple touch icon, shortcut icons, Android icons, and web manifest support
- Updated Google Maps location to the latest academy Maps link
- Converted the contact form into a WhatsApp enquiry flow
- Added interactive horizontal flip cards for dance style descriptions
- Added a subtle animated floating-logo background layer
- Updated class timing display with morning and evening batches
- Verified all changes with production builds before Git pushes

## Current Class Timing

Classes currently show:

- Class days: Friday and Saturday
- Morning batch: 10:30 AM
- Evening batch: 6:30 PM
- Duration: 2 hours per session

These values are configured in:

```text
app/frontend/src/data/mock.js
```

## Tech Stack

- React 18
- CRACO
- Tailwind CSS
- PostCSS
- Sonner for toast notifications
- Create React App build pipeline
- Vercel deployment

## Project Structure

```text
.
|-- README.md
|-- vercel.json
|-- app
|   |-- backend
|   |   |-- server.py
|   |   `-- requirements.txt
|   `-- frontend
|       |-- public
|       |   |-- index.html
|       |   |-- site.webmanifest
|       |   |-- favicon.ico
|       |   |-- favicon-16x16.png
|       |   |-- favicon-32x32.png
|       |   |-- apple-touch-icon.png
|       |   |-- android-chrome-192x192.png
|       |   |-- android-chrome-512x512.png
|       |   `-- assets
|       |       `-- images
|       |           |-- gallery
|       |           |-- instructors
|       |           `-- logo
|       |-- src
|       |   |-- components
|       |   |-- data
|       |   |-- hooks
|       |   |-- App.js
|       |   |-- App.css
|       |   |-- index.js
|       |   `-- index.css
|       |-- craco.config.js
|       |-- package.json
|       |-- tailwind.config.js
|       `-- postcss.config.js
```

## Important Frontend Files

```text
app/frontend/src/data/mock.js
```

Central data file for academy details, contact information, location, instructor, dance styles, class schedule, gallery images, hero images, testimonials, and enquiry helper data.

```text
app/frontend/src/components/Contact.jsx
```

Handles the contact form and opens WhatsApp with a pre-filled enquiry message.

```text
app/frontend/src/components/Classes.jsx
```

Renders class days, batch timing, session duration, learning modes, benefits, and Google Maps location.

```text
app/frontend/src/components/DanceStyles.jsx
```

Renders the interactive dance style cards with hover/focus flip animation.

```text
app/frontend/src/components/FloatingLogoElements.jsx
```

Renders the animated floating logo background layer.

```text
app/frontend/public/index.html
```

Contains Google Analytics script, metadata, favicon links, Apple icon support, theme color, and manifest link.

## Local Development

Install dependencies:

```bash
cd app/frontend
npm install
```

Start the local development server:

```bash
npm start
```

Default local URL:

```text
http://localhost:3000
```

Create a production build:

```bash
npm run build
```

The production build is generated at:

```text
app/frontend/build
```

## Content Updates

Most website content can be changed from:

```text
app/frontend/src/data/mock.js
```

Common updates:

- Academy name, tagline, subtitle, and logo
- Phone number, WhatsApp number, email, and address
- Google Maps URL and embedded map URL
- Instructor bio, qualifications, and image path
- Dance style descriptions and flip-card text
- Class days, batch timings, and duration
- Gallery image list
- Hero image list
- Testimonials

## Asset Management

Public assets are served from:

```text
app/frontend/public/assets
```

Current asset folders:

```text
app/frontend/public/assets/images/gallery
app/frontend/public/assets/images/instructors
app/frontend/public/assets/images/logo
```

Logo path:

```text
/assets/images/logo/logo.png
```

Gallery paths:

```text
/assets/images/gallery/background.webp
/assets/images/gallery/background_main.webp
```

Instructor image path:

```text
/assets/images/instructors/instructor.jpeg
```

## Favicon And App Icons

The project includes a full browser and shortcut icon set generated from the academy logo:

```text
app/frontend/public/favicon.ico
app/frontend/public/favicon-16x16.png
app/frontend/public/favicon-32x32.png
app/frontend/public/apple-touch-icon.png
app/frontend/public/android-chrome-192x192.png
app/frontend/public/android-chrome-512x512.png
app/frontend/public/site.webmanifest
```

These are linked from:

```text
app/frontend/public/index.html
```

Google Search favicon updates depend on Google recrawling the deployed website.

## Google Analytics

Google Analytics is configured in:

```text
app/frontend/public/index.html
```

Current measurement ID:

```text
G-6NX8WMT55S
```

## WhatsApp Enquiry Flow

The contact form does not submit to a backend. Instead, it creates a structured WhatsApp message and opens WhatsApp using the configured academy number.

Configured WhatsApp number:

```text
919037786943
```

Message includes:

- Name
- Phone
- Email
- User message

Implementation:

```text
app/frontend/src/components/Contact.jsx
```

## Google Maps

The location section supports both an embedded map and an external Google Maps link.

Configured in:

```text
app/frontend/src/data/mock.js
```

Current Maps link:

```text
https://maps.app.goo.gl/2UNmHE2ve3Kdo5TG6
```

## Deployment

Deployment is configured for Vercel from the root-level:

```text
vercel.json
```

Current Vercel settings:

```json
{
  "version": 2,
  "framework": "create-react-app",
  "installCommand": "cd app/frontend && npm install",
  "buildCommand": "cd app/frontend && npm run build",
  "outputDirectory": "app/frontend/build"
}
```

The usual release flow is:

```bash
git status
cd app/frontend
npm run build
cd ../..
git add .
git commit -m "Your commit message"
git push origin main
```

When Vercel is connected to the `main` branch, pushing to GitHub triggers a new deployment.

## Quality Checklist Before Deploying

Before pushing a production change:

- Run `npm run build` from `app/frontend`
- Confirm the changed section locally at `http://localhost:3000`
- Check `git diff --stat`
- Commit only intended files
- Push to `origin/main`
- Verify the Vercel deployment completes

## Backend Note

The repository includes an `app/backend` folder, but the current landing page deployment is frontend-only. The WhatsApp enquiry flow does not require backend infrastructure.

## Repository

GitHub:

```text
https://github.com/SreenathKamath/shiva-ganga-nritya-dhaara
```
