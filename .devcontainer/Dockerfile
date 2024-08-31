# Use the base image provided by GitHub Codespaces
FROM mcr.microsoft.com/vscode/devcontainers/base:ubuntu

# Install dependencies for Docker
RUN apt-get update && \
    apt-get install -y \
    curl \
    apt-transport-https \
    ca-certificates

# Add Docker’s official GPG key
RUN curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -

# Set up the Docker repository
RUN add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# Install Docker
RUN apt-get update && \
    apt-get install -y docker-ce docker-ce-cli containerd.io

# Verify Docker installation
RUN docker --version
