FROM node:18
WORKDIR /app
COPY server/package.json ./
RUN npm install
COPY server/ ./
CMD ["node", "index.js"]
EXPOSE 3000
