# Project Guidelines

## Code Style
- Use TypeScript + React function components (no classes). Entry is [src/main.tsx](src/main.tsx), root is [src/App.tsx](src/App.tsx).
- Prefer small, focused components under `src/components/` (example: [src/components/ThermoSyncLanding.tsx](src/components/ThermoSyncLanding.tsx)).
- Keep imports relative (no path aliases configured).

## Architecture
- Single-page Vite + React app; `App` is rendered via `createRoot` in [src/main.tsx](src/main.tsx).
- HTML shell is [index.html](index.html) with `#root`. It also loads fonts/icons used by the UI.
- Styling is Tailwind-first; `App.css` is intentionally unused/empty.

## Build and Test
- Install: `npm install`
- Dev: `npm run dev` (optionally `npm run dev -- --host` for LAN)
- Lint: `npm run lint`
- Production build (typecheck + bundle): `npm run build`
- Preview build: `npm run preview`

## Project Conventions
- Tailwind v4 is configured via `@tailwindcss/vite` in [vite.config.ts](vite.config.ts) and `@import "tailwindcss";` in [src/index.css](src/index.css).
- Theme tokens live in [src/index.css](src/index.css) under `@theme { ... }` (colors/fonts like `bg-surface`, `text-primary-container`, `font-headline`). Prefer using these tokens instead of hard-coded hex values.
- Custom visual effects are defined as Tailwind utilities in [src/index.css](src/index.css) via `@utility ...` (e.g. `neon-glow`, `ghost-border-top`, `sync-glow`). Reuse them rather than inventing new CSS.
- Deployment base path is set to `base: '/aijam1/'` in [vite.config.ts](vite.config.ts) (important for GitHub Pages). Don’t change unless you also update deployment/docs.

## Integration Points
- Stitch MCP is configured for VS Code in [.vscode/mcp.json](.vscode/mcp.json) (HTTP transport). Setup docs: [docs/guides/stitch.md](docs/guides/stitch.md).
- Example Stitch prompts are in `docs/projects/` (e.g. ThermoSync product page).

## Security
- Treat API keys as secrets. [.vscode/mcp.json](.vscode/mcp.json) may contain a real `X-Goog-Api-Key`; do not copy it into source code or commit it.
