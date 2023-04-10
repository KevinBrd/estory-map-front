# Run
FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --include=dev
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start" ]
