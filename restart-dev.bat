@echo off
echo Restarting development server with SSL fix...

REM Kill any existing Next.js processes
taskkill /F /IM node.exe 2>NUL

REM Wait a moment
timeout /t 2 /nobreak >NUL

REM Start development server with environment variables
set NODE_TLS_REJECT_UNAUTHORIZED=0
set NEXT_PUBLIC_DEV_MODE=true
npm run dev

pause
