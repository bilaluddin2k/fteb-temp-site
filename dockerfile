#FROM ubuntu:latest
#RUN "mkdir /app"
#WORKDIR /app
#COPY . /app/
#RUN "cd app/ && yarn install"
 
# Stage 1: Build the React application
FROM node:20 AS builder
WORKDIR /app
# Copy package.json and yarn.lock first for caching
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Stage 2: Serve the app
FROM node:20-slim
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/build ./build
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
