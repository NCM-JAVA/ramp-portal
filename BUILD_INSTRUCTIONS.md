# Build Instructions for Different Environments

This project supports multiple environments: **Development**, **UAT**, and **Production**.

## 📋 Prerequisites

Make sure you have updated the API URLs in the respective environment files:
- `.env.development` - Local development URLs
- `.env.uat` - UAT/Staging URLs
- `.env.production` - Production URLs

## 🚀 Running the Application

### Development Environment (Local)
```bash
npm start
# or
npm run start:dev
```
This uses `.env.development` with local API URLs (`http://127.0.0.1:8000`)

### UAT Environment
```bash
npm run start:uat
```
This uses `.env.uat` with UAT API URLs

### Production Environment
```bash
npm run start:prod
```
This uses `.env.production` with production API URLs

## 🏗️ Building for Deployment

### Build for Development
```bash
npm run build:dev
```
Creates an optimized build using development environment variables.
Output: `build/` folder

### Build for UAT
```bash
npm run build:uat
```
Creates an optimized build using UAT environment variables.
Output: `build/` folder

### Build for Production
```bash
npm run build:prod
```
Creates an optimized build using production environment variables.
Output: `build/` folder

## 📦 Default Build Command

```bash
npm run build
```
This uses `.env.production` by default (React's standard behavior).

## 🔍 Verifying Environment

After building, you can verify which environment was used by checking the network requests in the browser's DevTools. The API calls should point to the correct base URL based on the environment you built for.

## 📝 Environment Variables

Each environment file contains:
- `REACT_APP_API_BASE_URL` - Base URL for client API
- `REACT_APP_ADMIN_API_BASE_URL` - Base URL for admin API

**Note:** All environment variables must start with `REACT_APP_` to be accessible in React.

## 🚨 Important Notes

1. **Restart Required**: After changing environment files, restart the development server
2. **Build Output**: Each build overwrites the `build/` folder
3. **Git Ignore**: Never commit `.env.*.local` files (they're for local overrides)
4. **Production Builds**: Always use `build:prod` for production deployments

## 📂 Deployment

After building for the target environment:

1. The `build/` folder contains all static files
2. Deploy this folder to your web server (Nginx, Apache, etc.)
3. Configure your server to serve `index.html` for all routes (for React Router)

### Example Nginx Configuration
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 🔄 CI/CD Pipeline Example

```yaml
# Example for GitHub Actions
- name: Build for UAT
  run: npm run build:uat
  
- name: Build for Production
  run: npm run build:prod
```
