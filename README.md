# Backend TenTwenty

A Node.js Express backend API for a timesheet management application.

## Overview

This backend service provides RESTful APIs for managing timesheet data and user information. It serves as the backend for a timesheet application, providing endpoints to fetch user data and timesheet information.

## Features

- **User Management**: API endpoints for user data
- **Timesheet Management**: API endpoints for timesheet data with different statuses (completed, missing, incomplete)
- **CORS Support**: Configured for cross-origin requests
- **Error Handling**: Comprehensive error handling middleware
- **Health Check**: Basic health check endpoint

## Tech Stack

- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **CORS**: Cross-Origin Resource Sharing middleware
- **Nodemon**: Development dependency for auto-restart

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Backend-tentwenty
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development Mode
```bash
npm run dev
```
This will start the server with nodemon for auto-restart on file changes.

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:4000` by default (or the port specified in the `PORT` environment variable).

## API Endpoints

### Health Check
- **GET** `/` - Returns server status
  - Response: `{ "status": "ok" }`

### User Data
- **GET** `/userdata` - Returns user information
  - Response: `{ "data": [userData] }`

### Timesheet Data
- **GET** `/timesheetdata` - Returns timesheet information
  - Response: `{ "data": [timesheetData] }`

## Data Structure

### Timesheet Data
```javascript
{
  id: number,
  week: number,
  Date: string,
  status: "completed" | "missing" | "incomplete",
  action: "view" | "update" | "create"
}
```

### User Data
```javascript
{
  id: number,
  Email: string,
  Password: string
}
```

## Project Structure

```
Backend-tentwenty/
├── src/
│   ├── data/
│   │   └── mockData.js      # Mock data for timesheet and user information
│   ├── middleware/          # Custom middleware (if any)
│   └── index.js            # Main application entry point
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Dependency lock file
└── README.md              # This file
```



## Error Handling

The application includes:
- 404 handler for undefined routes
- Global error handler for unhandled errors
- Proper HTTP status codes

## Development

The project uses ES6 modules (`"type": "module"` in package.json) and includes:
- CORS middleware for cross-origin requests
- JSON parsing middleware
- Development server with auto-restart


