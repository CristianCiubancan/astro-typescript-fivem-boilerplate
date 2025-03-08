# FiveM Resource Boilerplate

This boilerplate is a structured foundation for creating modern FiveM resources using TypeScript for both client and server scripts, combined with Astro for statically generating your resource's UI.

## Features

- **TypeScript Support:** Write client and server scripts in TypeScript, compiled down to optimized JavaScript.
- **Astro Integration:** Static generation of UI components for high-performance UIs.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI styling.
- **Organized Project Structure:** Clearly defined directories for easy maintainability and scalability.

## Project Structure

```
.
├── dist
│   ├── client           # Compiled client scripts
│   ├── server           # Compiled server scripts
│   └── web              # Static Astro-generated files
│       └── index.html
├── src
│   ├── astro            # Astro UI source code
│   │   ├── pages
│   │   ├── styles
│   │   └── tsconfig.json
│   └── fivem            # TypeScript client and server scripts
│       ├── client
│       ├── server
│       └── tsconfig.json
├── astro.config.mjs     # Astro build configuration
├── fxmanifest.lua       # FiveM resource manifest
└── package.json         # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v18 or higher)
- [FiveM](https://fivem.net/) environment

### Installation

```sh
git clone <this-repository-url>
cd <repository-directory>
npm install
```

### Development

Start Astro in development mode:

```sh
npm run dev
```

This will serve Astro UI on a local development server (default: `http://localhost:3000`).

### Building the Resource

Build Astro and TypeScript scripts for production deployment:

```sh
npm run build
```

The compiled output will be generated in the `dist` directory.

### Deploying to FiveM

Ensure your `fxmanifest.lua` correctly references the compiled scripts and UI:

```lua
fx_version 'cerulean'
game 'gta5'

ui_page 'dist/web/index.html'

files {
  'dist/web/index.html',
  'dist/web/**/*.css'
}

client_scripts {
  'dist/client/*.js'
}

server_scripts {
  'dist/server/*.js'
}
```

Place the entire resource folder in your FiveM `resources` directory, and add the resource name to your `server.cfg`:

```lua
ensure your_resource_name
```

## Scripts

- `npm run dev`: Run Astro development server
- `npm run build`: Build Astro and FiveM scripts for production
- `npm run build:fivem`: Compile TypeScript for client and server
- `npm run build:astro`: Build Astro static files

## License

MIT © Your Name

---

Enjoy building your FiveM resources!