
import io from 'socket.io-client';
import feathers from '@feathersjs/client';
import socketio from '@feathersjs/socketio-client';

const socket = io('https://api.zenchat.mywire.org', {transports: ['websocket']});
// const socket = io('https://localhost:4040', {transports: ['websocket']});
const client = feathers();

client.configure(socketio(socket));
client.configure(feathers.authentication({
    storage: localStorage,
}));
export default client;