# Project Title

My Dockerized App

## Project Description

My Dockerized App is a web application built with Node.js (Express) and Docker. It provides a simple API that displays a JSON message when running.

## Table of Contents

- [Installation](#installation)
<!-- - [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)
- [Support](#support) -->

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/robenend/docker-starter.git

2. Navigate to the project directory:

   ```shell
   cd docker-starter

3. Build the Docker image:

   ```shell
   docker build -t user/docker-starter .

4. Run a Docker container from the image:

    ```shell
    docker run -p 80:<your-port> <username>/docker-starter
    ```

    This command maps port 80 from the container to preffered port on the host machine. You can change the host port if necessary.

5. Access the application in your browser:

    ```shell
    http://localhost:5000
