import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App.tsx";
import "./index.css";

// Unified SSG + client entry: at build time vite-react-ssg pre-renders every
// route to static HTML (with per-page <title>/meta/canonical/JSON-LD and full
// article content) so search engines and AI crawlers that don't run JS get a
// complete page; in the browser the same app hydrates.
export const createRoot = ViteReactSSG({ routes });
