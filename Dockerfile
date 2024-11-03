# Use official Node.js image as base image
FROM node:18

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose port 8080 (or the port configured in your Vite config)
EXPOSE 8080

# Command to start the application in preview mode
CMD ["npm", "run", "serve"]