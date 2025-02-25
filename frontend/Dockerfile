FROM node:18
WORKDIR /app
COPY package.json package-lock.json ./
RUN RUN npm cache clean --force npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]