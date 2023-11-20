# Installation Guide

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have a Windows/Linux/Mac machine running a recent version of OS.
- You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/).
- You have [Git](https://git-scm.com/downloads) installed on your machine and set your global username and email address.

## Seting up git

Set your username
```bash
git config --global user.name "Mona Lisa"
```

Set your email address
```bash
git config --global user.email "MY_NAME@example.com"
```

## Installing Yarn

Yarn is a package manager for your code, similar to npm. To install Yarn, you can use npm:

```bash
npm install --global yarn
```

## Running the Project

To run this project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/ivoderuever/bonn.git
```

2. Open the terminal in the project folder and install the dependencies:

```bash
yarn install --frozen-lockfile
```

3. Run the project
  
```bash
yarn dev
```

The application should now be running on your local machine. You can access it at [http://localhost:3000](http://localhost:3000).