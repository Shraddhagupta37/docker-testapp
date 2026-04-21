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
docker pull shraddha246850/docker-testapp:1.0
```
---

## ⚙️ Prerequisites

Make sure you have installed:
- Docker
- Docker Compose


## ▶️ How to Run the Project

🔹 Option 1: Run Full System (Recommended)
```
docker compose up -d
```

This will:
Start all services (app + database + UI)
Automatically create network between containers


🔹 Option 2: Run Only Application Image
```
docker run -d -p 5050:5050 shraddha246850/testapp:1.0
```

---

## 🌐 Access the Application

Service	URL
Application	http://localhost:5050

Mongo Express	http://localhost:8081

MongoDB	Port 27017

---

## 🎯 Learning Outcomes

- Understanding Docker images and containers
- Working with Docker Compose
- Multi-container application setup
- Container networking

