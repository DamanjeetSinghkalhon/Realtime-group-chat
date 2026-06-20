import { io } from 'socket.io-client';

export function connectWS() {
    return io('https://realtime-group-chat-backend.onrender.com');
}
