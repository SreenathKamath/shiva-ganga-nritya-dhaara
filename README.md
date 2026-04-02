# Shiva Ganga Nritya Dhaara

A modern landing page for **Shiva Ganga Nritya Dhaara**, a classical dance academy focused on Bharatanatyam, Mohiniyattam, and performance-oriented dance education.

This project is built as a React-based frontend with a polished promotional landing page, academy information sections, instructor profile, class details, gallery, testimonials, contact form, and deployment support for Vercel.

## Highlights

- Futuristic premium UI for a dance school landing page
- Instructor profile with local image asset support
- Class schedule, online and offline learning details
- Location section with embeddable Google Maps support
- Gallery and testimonials sections
- Contact form with toast notifications
- Vercel-ready deployment setup for the frontend app inside a nested project structure

## Tech Stack

- React 18
- CRACO
- Tailwind CSS
- PostCSS
- Sonner

## Project Structure

```text
.
├── app
│   ├── backend
│   │   ├── requirements.txt
│   │   └── server.py
│   └── frontend
│       ├── public
│       │   └── assets
│       │       └── images
│       │           └── instructors
│       ├── src
│       │   ├── components
│       │   ├── data
│       │   └── hooks
│       ├── craco.config.js
│       ├── package.json
│       └── tailwind.config.js
├── vercel.json
└── README.md
```

## Local Development

### 1. Install dependencies

```bash
cd app/frontend
npm install
```

### 2. Start the development server

```bash
npm start
```

### 3. Create a production build

```bash
npm run build
```

## Instructor Images

Instructor images are served from the public assets folder:

```text
app/frontend/public/assets/images/instructors
```

To update the instructor photo:

1. Add the image to the folder above
2. Update the `image` path in:

[`app/frontend/src/data/mock.js`](app/frontend/src/data/mock.js)

Example:

```js
image: "/assets/images/instructors/instructor.jpeg";
```

Supported formats include:

- `.jpg`
- `.jpeg`
- `.png`

## Map Configuration

The academy location is configured in:

[`app/frontend/src/data/mock.js`](app/frontend/src/data/mock.js)

Two map-related fields are supported:

- `mapUrl`: external Google Maps or share link
- `mapEmbedUrl`: embeddable URL used inside the landing page iframe

This allows the website to both:

- display an embedded map on the page
- open the exact shared Google Maps location in a new tab

## Deployment

This repository is configured for **Vercel** using the root-level:

[`vercel.json`](vercel.json)

The frontend application is deployed from:

```text
app/frontend
```

## Notes

- The backend folder currently contains placeholder files and is not required for the landing page deployment.
- The main content, academy details, contact information, map links, and image paths are centralized in:

[`app/frontend/src/data/mock.js`](app/frontend/src/data/mock.js)

## Repository

GitHub repository:

[`https://github.com/SreenathKamath/shiva-ganga-nritya-dhaara`](https://github.com/SreenathKamath/shiva-ganga-nritya-dhaara)
