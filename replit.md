# MetaPhotoLog Landing Page Project

## Overview
This is a modern web application showcasing MetaPhotoLog, a mobile app for professional field documentation. The project features a marketing landing page built with React, TypeScript, and Tailwind CSS, designed to demonstrate the app's offline-first photo documentation capabilities for engineers, inspectors, and field teams.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture
The application follows a full-stack architecture with clear separation between frontend and backend components:

- **Frontend**: React-based single-page application with TypeScript
- **Backend**: Express.js server with potential for API expansion
- **Database**: PostgreSQL with Drizzle ORM (configured but not actively used)
- **Build System**: Vite for frontend bundling and development
- **Styling**: Tailwind CSS with Shadcn/ui component library

## Key Components

### Frontend Architecture
- **React Router**: Uses Wouter for client-side routing
- **Component Library**: Extensive Shadcn/ui component collection with custom MetaPhotoLog branding
- **State Management**: React Query for server state management
- **Styling System**: Tailwind CSS with custom CSS variables for brand colors
- **TypeScript**: Full TypeScript implementation for type safety

### Backend Architecture
- **Express Server**: Lightweight Express.js server with middleware support
- **Development Integration**: Vite middleware integration for development
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Structure**: Organized route registration system (currently minimal)

### Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Definition**: Basic user schema defined in shared directory
- **Migration Support**: Drizzle-kit configured for database migrations
- **Connection**: Neon Database serverless connection configured

## Data Flow
1. **Client Requests**: Frontend makes requests through React Query
2. **API Layer**: Express server handles API routes (prefixed with /api)
3. **Storage Layer**: Abstracted storage interface for data operations
4. **Database**: PostgreSQL database through Drizzle ORM (when needed)
5. **Static Assets**: Vite serves static assets and handles HMR in development

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18 with hooks and modern patterns
- **UI Components**: Comprehensive Radix UI primitive collection
- **Styling**: Tailwind CSS with PostCSS processing
- **Development**: Vite with React plugin and TypeScript support
- **Query Management**: TanStack React Query for API interactions

### Backend Dependencies
- **Server**: Express.js with standard middleware
- **Database**: Drizzle ORM with PostgreSQL support
- **Development**: tsx for TypeScript execution
- **Build**: esbuild for production bundling

### Development Tools
- **Replit Integration**: Specialized Vite plugins for Replit environment
- **TypeScript**: Strict TypeScript configuration
- **Hot Reload**: Vite HMR with Replit error overlay

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` runs both frontend and backend
- **Hot Reloading**: Vite provides instant updates during development
- **TypeScript Checking**: `npm run check` for type validation
- **Database Management**: `npm run db:push` for schema updates

### Production Build
- **Frontend Build**: Vite bundles React app to `dist/public`
- **Backend Build**: esbuild bundles Express server to `dist/index.js`
- **Asset Optimization**: Vite handles asset optimization and minification
- **Environment Variables**: DATABASE_URL required for production

### Architectural Decisions

#### Problem: Marketing Landing Page with Potential for Full Application
**Solution**: Modular architecture with clear separation between marketing frontend and API backend
**Rationale**: Allows landing page to exist independently while providing foundation for future app development

#### Problem: Component Reusability and Consistent Design
**Solution**: Shadcn/ui component library with custom theming
**Rationale**: Provides professional UI components with full customization capability for brand consistency

#### Problem: Type Safety Across Full Stack
**Solution**: TypeScript throughout with shared schema definitions
**Rationale**: Prevents runtime errors and improves developer experience with autocomplete and validation

#### Problem: Flexible Data Layer
**Solution**: Abstract storage interface with multiple implementation options
**Rationale**: Allows switching between in-memory, database, or external API storage without changing business logic

#### Problem: Development and Production Parity
**Solution**: Vite development server with Express production server
**Rationale**: Maintains consistency between environments while optimizing for each use case