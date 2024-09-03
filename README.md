# Personal Portfolio

Welcome to my personal portfolio repository. This project showcases my skills and experience through a web application built with modern technologies.

## 🚀 Getting Started

To get started with this project, follow these steps:

### Prerequisites

Ensure you have the following installed:
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Installation

1. Clone the project repository:
   ```bash
   git clone <repository-url>

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   
3. Download the secrets folder from [this link](<environment-file-link>) and place it in the root directory where `docker-compose` is present.

5. Download the environment file from [this link](<environment-file-link>) and place it in the root directory where `docker-compose` is present.


### Running the application

You can run the application in either development or production mode.

1. For Development:
   ```bash
   docker-compose -f docker-compose-dev.yaml up

2. For Production:
   ```bash
   docker-compose -f docker-compose-prod.yaml up

3. Visit http://localhost in your browser to view the application.


## 🛠 Technologies

- **Frontend:**
  - Tailwind CSS
  - React.js
  - Next.js
  - TypeScript
  - CSS
  - Redux Toolkit

- **Backend:**
  - Node.js
  - Express.js
  - Microservices Architecture

- **Proxy:**
  - Nginx
  - API Gateway

- **Containerization:**
  - Docker
  - Docker Compose


### 📂 Folder Structure

    .
.
├── backend/                  # Backend microservices
├── frontend/                 # Frontend application
├── docker-compose-dev.yaml   # Docker Compose configuration for development
├── docker-compose-prod.yaml  # Docker Compose configuration for production
├── secrets/                  # Secrets and configuration files
├── .env                      # Environment variables
└── README.md                 # This file


###📝 Notes

- Ensure all environment variables and secrets are correctly set up for both development and production environments.

- For any issues or contributions, please refer to the contributing guidelines or open an issue.

   
