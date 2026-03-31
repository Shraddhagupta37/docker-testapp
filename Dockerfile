FROM node

ENV MONGO_DB_USERNAME=mongoadmin \
    MONGO_DB_PWD=secret

# Set working directory inside the container
WORKDIR /testapp

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install
 
COPY . /testapp

CMD ["node", "/testapp/server.js"]

# To build the image, run the following command in the terminal:
#docker build -t testappp:1.0 .