# React + TypeScript + Vite

This library build with Vite and React.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## How to Use

🔧 Set up repository in package.json

```js
"shared-pages": "git+https://github.com/MHCAviation/shared-page.git#main"
```

📦 Installation:

```js
npm install notfound
# or
yarn add notfound
```

🚀 Usage:
*The component accepts a message prop to display a custom message

```js
import { NotFound } from "notfound";

export default function NotFoundPage() {
  return <NotFound message="The page you're looking for doesn't exist" />;
}
```

🐛 Troubleshooting:
*Make sure your package.json includes the correct module paths

```js
{
  "main": "dist/index.cjs.js",
  "module": "dist/index.es.js",
  "types": "dist/types/index.d.ts",
  "exports": {
    "import": "./dist/index.es.js",
    "require": "./dist/index.cjs.js"
  }
}
```

## Usage with Next.js App Router (SSR/SSG)

This library is designed to work seamlessly with Next.js App Router and server components. It provides pure React components and async data-fetching helpers. You are responsible for fetching data in your own server components and passing it as props.

### Example: FAQ Page

```tsx
// app/faqs/page.tsx
import { FAQ, getFaqs } from 'shared-pages';

export default async function FAQPage() {
  const faqs = await getFaqs(); // Runs on the server
  return <FAQ faqs={faqs} />;
}
```

### Example: Doc Page

```tsx
// app/docs/[slug]/page.tsx
import { DocPage, getPageData } from 'shared-pages';

export default async function DocPageRoute({ params }) {
  const pageData = await getPageData(params.slug);
  return <DocPage pageData={pageData} />;
}
```

### Why this pattern?
- **Best for SSR/SSG:** Data is fetched on the server, so your pages are fast and SEO-friendly.
- **No client-side loading flashes:** Data is ready before the component renders.
- **Maximum flexibility:** You control how and when data is fetched.

### Local Development
For local dev (Vite, CRA, etc.), you can create a wrapper component that fetches data on the client and passes it as a prop.

---

**Questions?** Open an issue or check the examples above!