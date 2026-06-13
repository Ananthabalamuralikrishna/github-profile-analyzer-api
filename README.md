# GitHub Profile Analyzer API

## Overview

A Node.js and Express.js REST API that analyzes GitHub user profiles using the GitHub Public API and stores profile insights in a MySQL database.

## Tech Stack

* Node.js
* Express.js
* MySQL
* GitHub Public API
* Axios

## Features

* Fetch GitHub profile data using username
* Store profile insights in MySQL
* Analyze followers, following, repositories, and gists
* REST API endpoints

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd github-profile-analyzer-api
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=github
```

### Start Server

```bash
npm start
```

Server runs at:

```text
http://localhost:3000
```

## API Endpoints

### Analyze GitHub Profile

```http
GET /api/github/ana/:username
```

Example:

```http
GET /api/github/ana/octocat
```

### Response

```json
{
  "success": true,
  "message": "Profile saved successfully"
}
```

## Database Schema

Table Name:

```sql
github_profile
```

Columns:

* id
* user_name
* name
* followers
* following
* reposistory
* gists
* acc_created
* profile_url

## Author

Bala Murali Krishna
