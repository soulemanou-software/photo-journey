@echo off
echo ========================================
echo Clearing All Caches for Photo Journey
echo ========================================

echo.
echo 1. Stopping any running Next.js processes...
taskkill /F /IM node.exe 2>NUL
timeout /t 2 /nobreak >NUL

echo.
echo 2. Clearing Next.js cache...
if exist ".next" (
    rmdir /s /q ".next"
    echo    - Removed .next folder
) else (
    echo    - .next folder not found
)

echo.
echo 3. Clearing Node.js modules cache...
npm cache clean --force

echo.
echo 4. Clearing browser cache location...
if exist "%LOCALAPPDATA%\Microsoft\Edge\User Data\Default\Cache" (
    echo    - Edge cache found at %LOCALAPPDATA%\Microsoft\Edge\User Data\Default\Cache
    echo    - Please clear browser cache manually or use Ctrl+Shift+Delete in browser
)

echo.
echo 5. Reinstalling dependencies (optional)...
echo    - If you want to reinstall, run: npm install
echo    - For now, just clearing cache...

echo.
echo 6. Creating fresh .next folder structure...
mkdir ".next" 2>NUL

echo.
echo ========================================
echo Cache clearing complete!
echo ========================================
echo.
echo Next steps:
echo 1. Close all browser windows completely
echo 2. Run: npm run dev
echo 3. Open browser in private/incognito mode
echo 4. Or use Ctrl+Shift+R for hard refresh
echo.
pause
