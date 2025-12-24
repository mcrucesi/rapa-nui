# Etapa 1: Construcción
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servidor de producción
FROM nginx:alpine
# Copiamos el build de la etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html
# Copiamos una configuración de nginx para que React Router funcione
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]