# Stage 1: Build the React app
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the app using nginx
FROM nginx:alpine

# Copy the build output to the nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the port on which nginx will run
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
