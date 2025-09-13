# Jenkins CI/CD Pipeline Demo

A comprehensive DevOps demonstration project showcasing a complete CI/CD pipeline implementation using modern tools and practices. This React application serves as a practical example for containerization, Kubernetes deployment, Jenkins automation, and monitoring.

## Tech Stack

- **Frontend**: React 19 + Vite
- **Testing**: Vitest + Testing Library
- **Code Quality**: ESLint + Prettier
- **DevOps**: Docker, Kubernetes, Jenkins (to be implemented)
- **Monitoring**: Logging and health checks (to be implemented)

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Git** (for version control)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Jenkins-CI-CD-pipeline
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

| Script                  | Description                                  |
| ----------------------- | -------------------------------------------- |
| `npm run dev`           | Start the development server with hot reload |
| `npm run build`         | Build the app for production                 |
| `npm run preview`       | Preview the production build locally         |
| `npm run lint`          | Run ESLint to check for code issues          |
| `npm run lint:fix`      | Run ESLint and automatically fix issues      |
| `npm run format`        | Format code using Prettier                   |
| `npm run format:check`  | Check if code is properly formatted          |
| `npm run test`          | Run tests in watch mode                      |
| `npm run test:run`      | Run tests once                               |
| `npm run test:coverage` | Run tests with coverage report               |

##  Testing

This project uses Vitest for testing with React Testing Library. Tests are located alongside their respective components and utilities.

### Running Tests

```bash
# Run tests in watch mode (development)
npm run test

# Run tests once (CI/CD)
npm run test:run

# Run tests with coverage
npm run test:coverage
```

### Test Structure

- **Component Tests**: Located in `src/components/*.test.jsx`
- **Utility Tests**: Located in `src/utils/*.test.js`
- **Test Setup**: Configuration in `src/test/setup.js`

## Code Style

This project enforces consistent code style using:

- **ESLint**: For code quality and best practices
- **Prettier**: For code formatting

### Formatting Code

```bash
# Check if code is properly formatted
npm run format:check

# Format all files
npm run format

# Lint and fix issues
npm run lint:fix
```


## 🐳 DevOps Exercises (To Be Implemented)

### 1. Containerization

- [ ] Write a multi-stage Dockerfile for this React app
- [ ] Optimize build times by using Docker caching and Jenkins strategies
- [ ] Add a docker-compose.yml for local development

### 2. Kubernetes Deployment

- [ ] Create Kubernetes manifests (deployment, service, config maps)
- [ ] Implement a blue-green deployment strategy using two replica sets and a service
- [ ] Add readiness & liveness probes
- [ ] Test deployment locally with kind or minikube

### 3. CI/CD with Jenkins

- [ ] Write a Jenkinsfile that:
  - [ ] Runs ESLint and Prettier checks
  - [ ] Runs Vitest tests
  - [ ] Builds and pushes Docker images (to Docker Hub or another registry)
  - [ ] Applies Kubernetes manifests for deployment
- [ ] Use Jenkins credentials for Docker & Kubernetes

### 4. Logging & Monitoring

- [ ] Add comprehensive logging to the React app
- [ ] Configure Kubernetes logs collection (kubectl logs, sidecar, or external logging system)

### 5. Cloud Option (Bonus)

- [ ] Deploy the same app to an AWS EC2 instance running Docker & Kubernetes
- [ ] Push Docker images to Docker Hub or a cloud container registry

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is created for educational and demonstration purposes.

## Troubleshooting

### Common Issues

**Node.js version issues:**

```bash
# Check your Node.js version
node --version

# Should be 18 or higher
```

**Port already in use:**

```bash
# Kill process using port 5173
npx kill-port 5173

# Or use a different port
npm run dev -- --port 3000
```

**Module not found errors:**

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Need Help?

If you encounter any issues:

1. Check the console for error messages
2. Ensure all prerequisites are installed
3. Try clearing the cache: `rm -rf node_modules package-lock.json && npm install`
4. Check if the port is available: `lsof -ti:5173`

---

**Happy coding!**
