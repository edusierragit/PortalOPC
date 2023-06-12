@echo off

REM Abrir la consola para 'npm run dev' en el directorio 'frontend'
start cmd.exe /k "cd frontend && npm run dev"

REM Esperar un momento para que la consola de 'npm run dev' se abra antes de continuar
timeout /t 5 >nul

REM Abrir la consola para 'npm run develop' en el directorio 'backend'
start cmd.exe /k "cd backend && npm run develop"
