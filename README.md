# Docker TestApp (DevOps Project)

## 📌 Overview
This project is a containerized full-stack application built using Docker and Docker Compose.  
It demonstrates how to package an application along with its database and supporting services into isolated containers.

The system consists of:
- 🖥️ Backend Application (Node.js)
- 🗄️ Database (MongoDB)
- 📊 Database UI (Mongo Express)

---

## 🏗️ Architecture
This project uses a **multi-container setup** managed via Docker Compose.

Services:
- **testapp** → Main application
- **mongo** → Database service
- **mongo-express** → Web UI to manage MongoDB

---

## 🐳 Docker Hub Image
The application image is available on Docker Hub:

👉 https://hub.docker.com/repository/docker/shraddha246850/docker-testapp/

Pull using:
```
docker pull shraddha246850/docker-testapp:latest
```
---

## ⚙️ Prerequisites

Make sure Docker is installed and running.

---

## ▶️ How to Run the Project

### 🔹 Option 1: Run Without Docker Compose (Easy - Recommended for Evaluation)

#### Step 1: Run MongoDB
```
docker run -d -p 27017:27017 --name mongo \
-e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
-e MONGO_INITDB_ROOT_PASSWORD=secret \
mongo
```

#### Step 2: Run Mongo Express
```
docker run -d -p 8081:8081 --name mongo-express \
--link mongo \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=mongoadmin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=secret \
-e ME_CONFIG_MONGODB_SERVER=mongo \
mongo-express
```

#### Step 3: Run Application
```
docker run -d -p 5050:5050 --name testapp \
--link mongo \
shraddha246850/docker-testapp:latest
```

### 🔹 Option 2: Run Using Docker Compose (Full Setup)

Clone/form this repository and open it in terminal and run the following command:
```
docker compose up -d
```

This will:
- Start all services (app + database + UI)
- Automatically create network between containers

---

## 🌐 Access the Application

| Service       | URL                                            |
| ------------- | ---------------------------------------------- |
| Application   | [http://localhost:5050](http://localhost:5050) |
| Mongo Express | [http://localhost:8081](http://localhost:8081) |
| MongoDB       | Port 27017                                     |

---

## 🎯 Learning Outcomes

- Understanding Docker images and containers
- Working with Docker Compose
- Multi-container application setup
- Container networking

---

## 👩‍💻 Author
Shraddha Gupta
