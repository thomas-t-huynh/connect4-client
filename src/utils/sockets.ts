import io from 'socket.io-client';
import { UserData, Rooms, SetRooms } from 'types'

const socket = io('http://localhost:5000');

export const joinRoom = (user: UserData): void => {
    socket.emit('join', user, (error: any) => {
        if (error) {
          console.log(error)
        }
      })
}

export const getRooms = (user: UserData, setRooms: SetRooms): void => {
    socket.emit('roomData', user);
    socket.on('roomData', (rooms: Rooms[]) => {
        setRooms(rooms);
    })
}

socket.on('message', (message: {}) => {
    console.log(message)
})


