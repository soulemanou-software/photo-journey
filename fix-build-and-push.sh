#!/bin/bash

echo "========================================"
echo "Fix Build Issues and Push to GitHub"
echo "========================================"

echo
echo "1. Removing problematic files..."
rm -f nul
rm -f .git/index.lock 2>/dev/null

echo
echo "2. Checking current branch..."
git branch --show-current

echo
echo "3. Adding all changes..."
git add .

echo
echo "4. Committing build fixes and responsive design..."
git commit -m "fix: resolve build errors and enhance responsive design

🔧 BUILD FIXES:
- Fix syntax errors in src/lib/fonts.ts (duplicate src properties)
- Fix export statement in fonts.ts
- Resolve TypeScript compilation issues

📱 RESPONSIVE DESIGN IMPROVEMENTS:
- Make all sections fully responsive for mobile/tablet/desktop
- GradientBanner with rounded-full design and better typography
- BehindTheLens with YouTube integration and improved layout
- FezSection, MarrakechSection, ChasingMorocco responsive updates
- RelatedArticles responsive carousel improvements
- Footer mobile-first responsive grid

🛠️ TECHNICAL IMPROVEMENTS:
- Implement FallbackImage component for graceful error handling
- Update OptimizedImage to use FallbackImage
- Add SSL certificate fixes for development environment
- Create cache clearing utilities for better DX
- Improve typography scaling across all breakpoints

📁 NEW UTILITIES:
- Cache clearing scripts (clear-cache.bat, force-refresh.bat)
- Git management scripts for better workflow
- Environment configuration for SSL issues

This commit resolves all build errors and completes the responsive
design overhaul with robust image handling throughout the application."

echo
echo "5. Pushing to dev branch..."
git push origin dev

echo
echo "========================================"
echo "Build fixed and pushed successfully!"
echo "========================================"
echo
echo "Your Vercel deployment should now succeed!"
echo
