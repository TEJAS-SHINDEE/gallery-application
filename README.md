# Next Essential

Next Essential - An Essential Template to get started with Next.js application with all the essentials included...

## Features

- ✨ **Framework**: [Next.js](https://nextjs.org/) - React-based framework for building web applications
- 🚀 **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- 💻 **Language**: [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- 🧹 **Linting and Formatting**: [Biome.js](https://biomejs.dev/) - Fast and customizable linter and formatter
- 🎨 **Themes**: [Next Themes](https://github.com/pacocoursey/next-themes) - Easy theme management for Next.js
- 💄 **Icons**: [Lucide-React](https://lucide.dev/) - Beautiful open-source icons
- ⚙️ **Build**: GitHub Actions - Automated workflows for CI/CD
- 🛠 **Commit**: [Husky](https://typicode.github.io/husky/) - Git hooks made easy
- 📦 **Package**: [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

## Project Structure

The folder structure of the project is organized as follows:

```bash
/project-root
    /src
        /app                  # Contains all routes and pages
        /components           # Contains reusable components
        /primitives           # Contains primitive components or base UI elements
        /hooks                # Custom hooks for the app
        /interfaces           # TypeScript interfaces for the app
        /lib                  # Helper functions, utilities, and configuration files
        /providers            # Context and providers for app-wide state management
    /public                   # Static assets and images
    /styles                   # Global styles, TailwindCSS theme configuration
    /tests                    # Unit and integration tests
    /config                   # Project configuration files (e.g., Next.js config, environment settings)
    next.config.ts             # Next.js settings
    .gitignore                 # Specifies files to ignore in Git
    README.md                  # Project documentation
    LICENSE                    # License information
    package.json               # Project metadata and dependencies
```

### Folders Overview

- **`/app`**: Contains all routes and pages of the Next.js application. Each file corresponds to a specific page or route.
- **`/components`**: Contains reusable, presentational components that can be shared across different parts of the application.
- **`/primitives`**: Contains basic UI elements or primitive components such as buttons, inputs, etc., that are used in building more complex components.
- **`/hooks`**: Contains custom React hooks for specific logic or functionality that can be reused across the app.
- **`/interfaces`**: Contains TypeScript interfaces that define types for the app's data models or API responses.
- **`/lib`**: Includes helper functions, utilities, and configuration files like API clients, authentication methods, etc.
- **`/providers`**: Contains context providers for managing global state across the application.

## Getting Started

To get started with the Next Essential project, follow these steps:

1. Clone the repository
2. Install dependencies: `npm install` or `pnpm install` or `yarn install`
3. Run the development server: `npm run dev` or `pnpm run dev` or `yarn run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Guidelines

- Keep reusable components in the `components/` folder
- Place primitive components like buttons, inputs, etc., in the `primitives/` folder
- Store hooks in the `hooks/` folder to make them easily reusable
- Define all interfaces in the `interfaces/` folder
- Store helpers, utilities, and configurations in the `lib/` folder
- Use context and global state management with the `providers/` folder
- Follow the TypeScript and Biome.js linting rules
- Use Husky pre-commit hooks to ensure code quality

## Customization

- Modify the theme in `styles/root-layout.css`
- Configure Next.js settings in `next.config.ts`

## Contributing

Contributions are always welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
