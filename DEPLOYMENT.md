# Deployment Guide

## Prerequisites

Before deploying, ensure you have:
- A GitHub account
- A Vercel account (linked to GitHub)
- Access to a Kibana instance for live data

## GitHub Setup

1. **Create a new repository** on GitHub
2. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Cyber Threat Intelligence Dashboard"
   git branch -M main
   git remote add origin https://github.com/yourusername/cyber-threat-dashboard.git
   git push -u origin main
   ```

## Vercel Deployment

### Method 1: Automatic Deployment (Recommended)

1. Visit [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Configure the following settings:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Method 2: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Environment Variables

Add these environment variables in Vercel dashboard:

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment | `production` |
| `KIBANA_BASE_URL` | Your Kibana instance URL | `https://your-kibana.company.com` |
| `SESSION_SECRET` | Session encryption key | `your-super-secret-key` |

## Configuration for Live Data

To connect to your live Kibana instance:

1. Update the base URL in `client/src/components/dashboard-section.tsx`
2. Ensure your Kibana instance allows iframe embedding
3. Configure CORS settings if needed

## Build Configuration

The project includes:
- **Vercel configuration** (`vercel.json`)
- **Docker support** (`Dockerfile`, `.dockerignore`)
- **Environment template** (`.env.example`)

## Post-Deployment

After successful deployment:
1. Test all dashboard functionalities
2. Verify live Kibana integration
3. Test mobile responsiveness
4. Validate PDF export feature

## Troubleshooting

**Common Issues:**

1. **Kibana iframe not loading**: Check CORS and X-Frame-Options
2. **Build failures**: Verify all dependencies are installed
3. **Environment variables**: Ensure all required variables are set

**Performance Tips:**
- Enable gzip compression
- Configure CDN for static assets
- Optimize images and fonts