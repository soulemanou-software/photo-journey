#!/bin/bash

echo "========================================"
echo "Git Push with Proper Commit Messages"
echo "========================================"

echo
echo "1. Removing problematic files..."
rm -f nul
rm -f .git/index.lock 2>/dev/null

echo
echo "2. Checking Git status..."
git status

echo
echo "3. Adding all changes..."
git add .

echo
echo "4. Creating commit with detailed message..."
git commit -m "feat: enhance responsive design and fix image loading issues

- Make all sections fully responsive for mobile/tablet/desktop
- Add GradientBanner with rounded-full design and better text styling
- Update BehindTheLens with YouTube integration and improved layout
- Implement FallbackImage component for graceful error handling
- Add SSL certificate fixes for development environment
- Update OptimizedImage to use FallbackImage for better reliability
- Create cache clearing scripts for development workflow
- Fix text sizing and spacing across all responsive breakpoints
- Add proper error handling for external image loading

Changes include:
- Responsive breakpoints for all components
- Improved typography and spacing
- Better image loading with fallbacks
- Development environment improvements
- Cache management utilities"

echo
echo "5. Pushing to GitHub (dev branch)..."
git push origin dev

echo
echo "========================================"
echo "Git push completed!"
echo "========================================"
echo
