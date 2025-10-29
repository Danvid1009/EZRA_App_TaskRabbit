# How to Deploy to GitHub Pages

## Option 1: Automatic Deployment (Recommended)

1. **Enable GitHub Pages in your repository:**
   - Go to: `https://github.com/Danvid1009/EZRA_App_TaskRabbit/settings/pages`
   - Under "Source", select: **"GitHub Actions"**
   - Save

2. **Push the code:**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push
   ```

3. **Check deployment:**
   - Go to: `https://github.com/Danvid1009/EZRA_App_TaskRabbit/actions`
   - Wait for the workflow to complete
   - Your site will be at: `https://danvid1009.github.io/EZRA_App_TaskRabbit/`

## Option 2: Manual Deployment

```bash
cd frontend
npm run deploy
```

This builds and pushes to the `gh-pages` branch.

## View Your Site

After deployment, visit:
**https://danvid1009.github.io/EZRA_App_TaskRabbit/**

---

**Note:** The base path is set to `/EZRA_App_TaskRabbit/` in `vite.config.js`. If you want to deploy to a custom domain later, change this to `/`.

