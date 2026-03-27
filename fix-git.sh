#!/bin/bash

echo "Fixing Git issues..."

# Remove problematic files
echo "Removing problematic files..."
rm -f nul
rm -f .git/index.lock

# Check current branch
echo "Current branch:"
git branch --show-current

# Show status
echo
echo "Git status after cleanup:"
git status --porcelain

echo
echo "Now you can run: ./git-push.sh"
