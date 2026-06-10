# DataDesignX (DDX)

Here at DDX, we specialize in providing innovative software solutions for businesses in Logistics, Health, Finance, and Analytics.

## Run & Operate

# Start the Frontend Web App (DDX Web Page) on Windows PowerShell

Navigate to artifacts/consultancy-web and execute the environment bypass line:
``$env:PORT="5173"; $env:BASE_PATH="/"; pnpm --config.ignore-scripts=true run dev``
Local URL: `http://localhost:5173`

# Workspaces & Services

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- Package Engine: pnpm Workspaces, Node.js 24, TypeScript 5.9
- Frontend Core: React 19, Vite 7, Tailwind CSS v4 (@tailwindcss/oxide)
- API Architecture: Express 5
- DB Layer: PostgreSQL + Drizzle ORM
- Data Validation: Zod (`zod/v4`), `drizzle-zod`
- Contract Code-Gen: Orval (compiling from OpenAPI specs)
- Compilers: esbuild (CJS bundle) + lightningcss

## Where things live

├── .agents/                     # Specialized Replit autonomous development instructions
├── artifacts/
│   ├── consultancy-web/         # NexaBuild dark-themed marketing & engineering showcase 
│   │   ├── src/components/      # Interactive layout blocks (Hero, Portfolio, Stack, Contact)
│   │   ├── vite.config.ts       # Main compilation setup (requires PORT & BASE_PATH)
│   │   └── index.html           # SPA entry point
│   └── mockup-sandbox/          # Isolated sandbox for rendering multi-industry UI tracks
└── scripts/                     # Repository orchestration utilities

## Architecture decisions

Tailwind v4 Oxide Compiler Execution: We use compilation overrides explicitly matching system platforms 
(`lightningcss-win32-x64-msvc` and `@tailwindcss/oxide-win32-x64-msvc`) to maintain lightning-fast CSS 
parsing across cross-platform development (Cloud-to-Local).

Environment Isolation: Frontend entry paths explicitly assert variable boundaries (`PORT` / `BASE_PATH`) 
to guarantee predictability when routing between Replit sandbox paths and standard production load balancers.

Monorepo Separation: Marketing consultancy blocks (`consultancy-web`) are modularly isolated from internal 
service prototypes (`mockup-sandbox`) to prevent visual component bleed.

## Product

- **Elite UI Presentation**: High-performance dark-theme presentation canvas styled for modern technical compliance.
- **Multi-Vertical Case Mapping**: Direct visual routing portfolios tailored directly for Logistics routing tracking, High-Frequency trading execution, HIPAA-compliant medical dashboards, and Big-Data infrastructure systems.
- **Interactive Intake Capture**: Dynamic client engineering validation interface handling incoming scoping details and resource budget evaluations ($50k to $500k+).

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

⚡ The Windows Binary Rule: If you pull down recent modifications from the cloud and encounter `Cannot find module` 
or `Binary version mismatch` exceptions from `esbuild`, `rollup`, or `lightningcss`, do not clear the lockfile. 
Instead, force-inject your host platform binaries into the node workspace root directly by appending:
`--config.ignore-scripts=true`

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
