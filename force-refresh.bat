@echo off
echo ========================================
echo FORCE REFRESH - Aggressive Cache Clear
echo ========================================

echo.
echo 1. Killing ALL Node processes...
taskkill /F /IM node.exe 2>NUL
wmic process where "name='node.exe'" delete 2>NUL
timeout /t 3 /nobreak >NUL

echo.
echo 2. Removing ALL cache folders...
if exist ".next" (
    rmdir /s /q ".next"
    echo    - Deleted .next
)
if exist "node_modules\.cache" (
    rmdir /s /q "node_modules\.cache"
    echo    - Deleted node_modules\.cache
)
if exist ".vercel" (
    rmdir /s /q ".vercel"
    echo    - Deleted .vercel
)

echo.
echo 3. Clearing npm cache...
npm cache clean --force
npm cache verify

echo.
echo 4. Clearing package lock cache...
if exist "package-lock.json" (
    echo    - Found package-lock.json
    echo    - Consider running: npm install
)

echo.
echo 5. Creating development environment file...
echo NODE_TLS_REJECT_UNAUTHORIZED=0 > .env.local
echo NEXT_PUBLIC_DEV_MODE=true >> .env.local

echo.
echo 6. Restarting development server...
echo    - Starting with SSL fix...
set NODE_TLS_REJECT_UNAUTHORIZED=0
set NEXT_PUBLIC_DEV_MODE=true

echo.
echo ========================================
echo Starting fresh development server...
echo ========================================
echo.
echo Press Ctrl+C to stop the server
echo.

npm run dev
