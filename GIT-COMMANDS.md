# Git Push Commands for Photo Journey Project

## Option 1: Use the Automated Script
```bash
# Run this in your project root
./git-push.bat
```

## Option 2: Use the Force Push Script
```bash
# Run this in your project root  
./git-force-push.bat
```

## Option 3: Manual Git Commands

### Step 1: Check Status
```bash
git status
```

### Step 2: Add All Changes
```bash
git add .
# OR for more specific:
git add -A
```

### Step 3: Commit with Message
```bash
git commit -m "feat: enhance responsive design and fix image loading

- Make all sections fully responsive for mobile/tablet/desktop
- Add GradientBanner with rounded-full design and better text styling  
- Update BehindTheLens with YouTube integration and improved layout
- Implement FallbackImage component for graceful error handling
- Add SSL certificate fixes for development environment
- Update OptimizedImage to use FallbackImage for better reliability
- Create cache clearing scripts for development workflow
- Fix text sizing and spacing across all responsive breakpoints
- Add proper error handling for external image loading"
```

### Step 4: Push to GitHub
```bash
git push origin main
# OR if there are conflicts:
git push -u origin main --force-with-lease
```

## If You Encounter Issues

### Merge Conflicts:
```bash
git pull origin main --rebase
# Resolve conflicts, then:
git add .
git commit -m "resolve merge conflicts"
git push origin main
```

### Permission Issues:
```bash
# Check if you're authenticated
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Remote Issues:
```bash
# Check remote URL
git remote -v

# If needed, re-add remote:
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

## Commit Message Guidelines

This project follows conventional commits:
- `feat:` for new features
- `fix:` for bug fixes  
- `docs:` for documentation
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

## Current Changes Summary

Your recent changes include:
- ✅ Fully responsive design implementation
- ✅ Enhanced GradientBanner component
- ✅ Redesigned BehindTheLens with YouTube
- ✅ Image loading improvements with fallbacks
- ✅ SSL certificate fixes for development
- ✅ Cache clearing utilities
- ✅ Typography and spacing improvements

All these changes are ready to be committed and pushed to GitHub!
