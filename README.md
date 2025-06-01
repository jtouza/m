# Technical Test Application

## Technologies

- **Language:** TypeScript, modern ECMAScript
- **Framework:** Vue 3 (Composition API)
- **Build tool:** Vite
- **State management:** Pinia
- **Validation:** Zod
- **Styling:** SCSS
- **Responsive design:** Mobile-first, breakpoint at `1024px`
- **Internationalization:** vue-i18n + Luxon

## Project Structure

```
src/
├── api/               # RESTful API client
├── assets/            # Images, fonts, etc.
├── components/        # Atomic and compound components
├── composables/       # Reusable composables
├── constants          # Constants
├── config             # Configuration files (i18n, API, etc.)
├── i18n               # vue-i18n and locale files
├── layouts            # Vue layouts
├── models             # Data models
├── pages/             # Main views
├── router/            # Vue Router configuration
├── schemas/           # Zod validation schemas
├── store/             # Pinia stores
├── types/             # Global type definitions
```

## Estimated development time
- 6 hours

--- 

# Development Guidelines

This document provides project-specific guidelines for development, configuration, and testing.

## Build/Configuration Instructions

### Prerequisites
- Node.js (version specified in `.nvmrc`)
- npm

### Environment Setup
1. The project uses environment variables defined in `.env` files:
    - `VITE_APP_CONFIG`: Specifies the configuration environment (local, production)
    - `VITE_DEFAULT_LOCALE`: Sets the default locale (e.g., es-ES)
    - `VITE_API_BASE_URL`: Defines the API base URL

### Development Workflow
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Configuration System
The project uses a configuration system with environment-specific settings:
- Configuration files are mapped in `src/config/config-files-map.ts`
- Environment-specific configurations (local, production) implement the `ConfigInterface`
- Access configuration values through the config map using the environment key

## Testing Information

### Test Configuration
- Tests are configured in `vitest.config.ts`
- The project uses Vitest with JSDOM for browser-like testing
- Tests are located in the `tests` directory, organized by type (unit, etc.)

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode (for development)
npm run test-watch

# Generate test coverage report
npm run test-coverage
```

### Writing Tests
Tests follow the standard Vitest/Jest pattern:

```typescript
import { describe, it, expect } from 'vitest'

describe('Feature or component name', () => {
  it('should behave in a specific way', () => {
    // Arrange
    const input = 'some input'
    
    // Act
    const result = someFunction(input)
    
    // Assert
    expect(result).toBe('expected output')
  })
})
```

### Testing Vue Components
For Vue component testing, use the `@testing-library/vue` package:

```typescript
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import YourComponent from '@/components/YourComponent.vue'

describe('YourComponent', () => {
  it('should render correctly', async () => {
    // Render the component
    render(YourComponent, {
      props: {
        // Component props
      }
    })
    
    // Assert rendered content
    expect(screen.getByText('Expected text')).toBeInTheDocument()
    
    // Interact with the component
    await userEvent.click(screen.getByRole('button'))
    
    // Assert after interaction
    expect(screen.getByText('New text')).toBeInTheDocument()
  })
})
```

## Additional Development Information

### Code Organization
- The project follows a feature-based organization within the `src` directory
- Components are organized by functionality and reusability
- Use the `@` alias to import from the `src` directory

### State Management
- Pinia is used for state management
- Stores are located in `src/store`
- The project uses `pinia-plugin-persistedstate` for persistent state

### Styling
- SCSS is used for styling
- Global SCSS variables and mixins are in `src/assets/scss/abstracts`
- The project follows a mobile-first approach with a breakpoint at 1024px

### Internationalization
- Vue-i18n is used for internationalization
- Locale files are in `src/i18n/locales`
- Luxon is used for date/time formatting and manipulation

### API Integration
- Axios is used for HTTP requests
- API clients are in `src/api`
- Use the base API client for common request configuration