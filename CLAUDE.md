# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `yarn dev` - Start development server with Vite and hot reload
- `yarn build` - Build for production (runs TypeScript compiler then Vite build)
- `yarn lint` - Run ESLint to check code quality
- `yarn preview` - Preview production build locally

## Architecture Overview

This is a React + TypeScript frontend application using Vite as the build tool. The project structure follows a component-based architecture:

### Technology Stack
- **React 19** with TypeScript for the UI framework
- **Material-UI (MUI)** for the component library and theming
- **React Router** for client-side routing
- **Vite** for fast development and building
- **ESLint** with TypeScript rules for code quality

### Key Architecture Patterns

**Routing Structure**: Centralized router configuration in `src/components/Routes.tsx` using React Router's `createBrowserRouter`. Currently defines `/login` and `/signup` routes.

**Theme Management**: Global dark theme applied via MUI's ThemeProvider in `src/App.tsx`, with CssBaseline for consistent styling across browsers.

**Authentication Flow**: Reusable `Auth` component (`src/components/auth/Auth.tsx`) provides the base form UI, with specialized `Login` and `Signup` components that wrap it with specific behavior and navigation links.

**Component Organization**: Components are organized by feature area under `src/components/`, with authentication-related components grouped in the `auth/` subdirectory.

### Development Setup Notes

- Uses SWC for fast refresh via `@vitejs/plugin-react-swc`
- TypeScript configuration split between app (`tsconfig.app.json`) and node (`tsconfig.node.json`) contexts
- ESLint configured with React hooks and TypeScript rules
- Package manager: Yarn (yarn.lock present)

### Current State
The application appears to be in early development with basic authentication UI components but placeholder `onSubmit` handlers that don't yet implement actual authentication logic.