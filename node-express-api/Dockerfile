# Stage 1: Install dependencies
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install

# Stage 2: Copy the rest to work directory and run the project
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]
