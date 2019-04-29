# base image
FROM node:11.0.0

# set working directory
RUN mkdir /app
WORKDIR /app
COPY package.json /app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
RUN npm install

COPY . /app

# run build
RUN npm run build

# start app
CMD ["serve", "-s", "build", "-l", "3000"]
