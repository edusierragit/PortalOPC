#!/bin/bash

# Abrir la terminal para 'npm run dev' en el directorio 'frontend'
gnome-terminal --working-directory=frontend -e "npm run dev" &

# Esperar un momento para que la terminal de 'npm run dev' se abra antes de continuar
sleep 5

# Abrir la terminal para 'npm run develop' en el directorio 'backend'
gnome-terminal --working-directory=backend -e "npm run develop"
