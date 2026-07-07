# Full Project Documentation

## 1. What This Project Does
This is a real-time chat application where users can:
- enter a name
- choose a room
- join the room
- send messages instantly
- see other users in the same room

The app uses:
- React for the user interface
- Node.js and Express for the backend server
- Socket.IO for real-time communication

---

## 2. How the Whole Project Works

### Frontend flow
1. The user opens the app.
2. The Join page asks for a name and room.
3. When the user clicks Sign In, the app navigates to the chat page.
4. The chat page connects to the backend using Socket.IO.
5. The user joins a room and can send messages.

### Backend flow
1. The server starts and listens on port 5000.
2. When a client connects, the server creates a socket connection.
3. When a user joins a room, the server stores the user and broadcasts a welcome message.
4. When a user sends a message, the server sends it to every user in that room.
5. When a user leaves, the server removes them and updates the room list.

---

## 3. Folder Structure

```text
project_chat_application/
├── client/                  # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Chat/
│       │   ├── Join/
│       │   ├── Input/
│       │   ├── Messages/
│       │   └── TextContainer/
│       ├── App.js
│       └── index.js
├── server/                  # Node.js backend
│   ├── index.js
│   ├── router.js
│   ├── users.js
│   └── package.json
└── PROJECT_DOCUMENTATION.md
```

---

## 4. Frontend Explanation

### Main React files
- App.js
  - Sets up routing between the Join page and the Chat page.
- components/Join/Join.js
  - Collects the user name and room name.
- components/Chat/Chat.js
  - Connects to the server using Socket.IO.
  - Emits join and sendMessage events.
  - Receives messages and room user data.
- components/Input/Input.js
  - Lets the user type and send messages.
- components/Messages/Messages.js
  - Displays all chat messages.

### Important idea
The frontend does not store chat data by itself. It sends events to the backend and listens for events coming back.

---

## 5. Backend Explanation

### server/index.js
This is the main backend file.
It:
- creates the Express app
- creates the Socket.IO server
- handles events like join, sendMessage, and disconnect

### server/router.js
This file contains a simple route for testing the server.
When the browser visits the root route, it returns a response saying the server is running.

### server/users.js
This file stores active users in memory.
It contains helper functions to:
- add a user to a room
- remove a user when they leave
- find a user by socket ID
- get all users in a room

---

## 6. How the Chat Works

### Step 1: User joins
When the user enters a name and room, the frontend sends a join event to the server.

### Step 2: Server accepts the user
The server checks if the name and room are valid and adds the user to the room.

### Step 3: Welcome message
The server sends a welcome message to the joining user and notifies others in the room.

### Step 4: User sends message
When the user presses Send, the frontend emits a sendMessage event.

### Step 5: Server broadcasts message
The backend sends that message to everyone in the same room.

### Step 6: User leaves
When the user disconnects, the backend removes them and updates the room list.

---

## 7. Backend Events

### Socket events used in this project
- join
  - User enters a chat room
- sendMessage
  - User sends a chat message
- disconnect
  - User leaves the chat room

### HTTP route
- GET /
  - Used to confirm that the server is available

---

## 8. Setup Instructions

### Prerequisites
Install:
- Node.js
- npm
- VS Code

### Install server dependencies
```bash
cd server
npm install
```

### Install client dependencies
```bash
cd client
npm install
```

---

## 9. Run the Project

### Start the backend
```bash
cd server
npm start
```

### Start the frontend
```bash
cd client
npm start
```

### If you use Node 17+ or Node 22
Use this command for the client:
```bash
set NODE_OPTIONS=--openssl-legacy-provider
npm start
```

---

## 10. Why This Project Is Useful
This project teaches:
- how to build a simple real-time application
- how React and Node.js work together
- how Socket.IO handles live messaging
- how to manage users in rooms

---

## 11. Possible Improvements
You can improve this project by adding:
- user authentication
- database storage for messages
- message history
- private rooms
- typing indicators
- file sharing

---

## 12. Troubleshooting

### Problem: npm start fails on newer Node versions
Use:
```bash
set NODE_OPTIONS=--openssl-legacy-provider
```

### Problem: PowerShell blocks npm scripts
Run:
```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned -Force
```

### Problem: port already in use
Stop the old process or change the port.

---

## 13. Summary
This project is a beginner-friendly full-stack app that shows how a real-time chat system works. The frontend collects user input, the backend manages rooms and messages, and Socket.IO makes everything happen instantly.

