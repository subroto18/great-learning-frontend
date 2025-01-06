# Fetching the latest node image on alpine linux
FROM node:21-alpine


# Declaring env
ENV NODE_ENV development

# Setting up the work directory

WORKDIR /

# Installing dependencies
COPY ./package*.json . 
COPY ./tailwind.config.js .
COPY ./postcss.config.js .
COPY ./vite.config.js .
RUN npm install

# Copying all the files in our project
COPY . .

EXPOSE 5173

# Starting our application
CMD ["npm","run","dev"]