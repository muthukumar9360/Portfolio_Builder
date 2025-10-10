# Step 1: Build the app
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Build the production-ready static files
RUN npm run build


# Step 2: Serve the app using a lightweight web server (nginx)
FROM nginx:alpine

# Copy build output to Nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for web access
EXPOSE 80

# Start Nginx when container runs
CMD ["nginx", "-g", "daemon off;"]
