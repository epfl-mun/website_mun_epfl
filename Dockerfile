# Use the official Node.js image as the base image
FROM node:14-alpine AS build-stage

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use the official Nginx image as the base image for the production stage
FROM nginx:stable-alpine AS production-stage

# Copy the built files from the build stage to the Nginx html directory
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]