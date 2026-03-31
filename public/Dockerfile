FROM node  

ENV MONGO_DB_USERNAME=mongoadmin \
    MONGO_DB_PWD=secret

RUN npm install
RUN mkdir -p testapp
 
COPY . /testapp

CMD ["node", "/testapp/server.js"]

# To build the image, run the following command in the terminal:
#docker build -t testappp:1.0 .