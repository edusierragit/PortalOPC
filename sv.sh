#!/bin/bash

# Abrir la terminal para 'npm run dev' en el directorio 'frontend'
cd frontend && npm run dev &

# Esperar un momento para que la terminal de 'npm run dev' se abra antes de continuar
sleep 5

# Abrir la terminal para 'npm run develop' en el directorio 'backend'
cd ../backend && npm run develop

# si no te funciona agregale permisos ejecutando "chmod +x start-servers.sh"