# Deployment Guide for Islamic AI Guidance Website

This guide provides instructions for deploying the Islamic AI Guidance website to a production environment.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A hosting service that supports Node.js applications (Vercel, Netlify, Render, etc.)

## Option 1: Deploying to Vercel (Recommended)

Vercel is the recommended hosting platform for Remix.js applications, as it provides seamless integration and optimal performance.

### Steps:

1. **Create a Vercel Account**:
   - Sign up at [vercel.com](https://vercel.com) if you don't have an account.

2. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

3. **Deploy from the Command Line**:
   ```bash
   # Navigate to your project directory
   cd islamic-ai-guidance
   
   # Login to Vercel
   vercel login
   
   # Deploy
   vercel
   ```

4. **Alternatively, Deploy via GitHub**:
   - Push your project to a GitHub repository
   - Import the repository in the Vercel dashboard
   - Follow the setup instructions

5. **Configure Environment Variables** (if needed):
   - Add any required environment variables in the Vercel dashboard under Project Settings > Environment Variables

## Option 2: Deploying to Netlify

Netlify is another excellent option for hosting Remix.js applications.

### Steps:

1. **Create a Netlify Account**:
   - Sign up at [netlify.com](https://netlify.com) if you don't have an account.

2. **Install Netlify CLI** (optional):
   ```bash
   npm install -g netlify-cli
   ```

3. **Create a `netlify.toml` File**:
   Create a file named `netlify.toml` in the root of your project with the following content:
   ```toml
   [build]
     command = "npm run build"
     publish = "build/client"
     functions = "build/server"
   
   [dev]
     command = "npm run dev"
     port = 3000
   
   [[redirects]]
     from = "/*"
     to = "/.netlify/functions/server"
     status = 200
   
   [[headers]]
     for = "/build/*"
     [headers.values]
       "Cache-Control" = "public, max-age=31536000, s-maxage=31536000"
   ```

4. **Deploy from the Command Line**:
   ```bash
   # Navigate to your project directory
   cd islamic-ai-guidance
   
   # Login to Netlify
   netlify login
   
   # Deploy
   netlify deploy --prod
   ```

5. **Alternatively, Deploy via GitHub**:
   - Push your project to a GitHub repository
   - Import the repository in the Netlify dashboard
   - Follow the setup instructions

## Option 3: Deploying to a Traditional Node.js Server

You can also deploy the application to any server that supports Node.js.

### Steps:

1. **Build the Application**:
   ```bash
   npm run build
   ```

2. **Start the Server**:
   ```bash
   npm start
   ```

3. **Using PM2 for Production** (recommended):
   ```bash
   # Install PM2
   npm install -g pm2
   
   # Start the application with PM2
   pm2 start npm --name "islamic-ai-guidance" -- start
   
   # Ensure PM2 restarts on server reboot
   pm2 startup
   pm2 save
   ```

4. **Set Up Reverse Proxy** (recommended):
   Configure Nginx or Apache as a reverse proxy to your Node.js application:

   **Nginx Example**:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Environment Variables

If your application requires environment variables, create a `.env` file in the root directory with the following content:

```
# Example environment variables
DATABASE_URL=your_database_url
API_KEY=your_api_key
```

## Custom Domain Setup

After deploying to any of the platforms above, you can configure a custom domain:

1. Purchase a domain from a domain registrar (e.g., Namecheap, GoDaddy)
2. Add the domain in your hosting platform's dashboard
3. Configure DNS settings as instructed by your hosting platform
4. Wait for DNS propagation (can take up to 48 hours)

## SSL Certificate

Most modern hosting platforms (Vercel, Netlify) provide automatic SSL certificates. If you're using a traditional server:

1. Install Certbot: `sudo apt-get install certbot`
2. Obtain a certificate: `sudo certbot --nginx -d yourdomain.com`
3. Set up auto-renewal: `sudo certbot renew --dry-run`

## Monitoring and Maintenance

- Set up monitoring using services like UptimeRobot or Pingdom
- Regularly update dependencies with `npm update`
- Monitor server logs for errors and issues

## Troubleshooting

If you encounter issues during deployment:

1. Check the build logs for errors
2. Ensure all environment variables are correctly set
3. Verify that your hosting platform supports Remix.js applications
4. Check for any network or firewall restrictions

For additional help, refer to the [Remix.js deployment documentation](https://remix.run/docs/en/main/guides/deployment).

