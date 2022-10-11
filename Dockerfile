# pull the base image
FROM node:alpine

# set the working direction
WORKDIR /linkedin-clone-yt

# add `/app/node_modules/.bin` to $PATH
ENV PATH /linkedin-clone-yt/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY package-lock.json ./

RUN npm install

# add app
COPY . ./

# start app
CMD ["yarn", "start"]