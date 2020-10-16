import React, { useState } from 'react';
import { UserData, Rooms } from 'types';
import './App.css';
import RoomsList from './components/RoomsList';
import UserLogin from './components/UserLogin';
import { getRooms, joinRoom } from './utils/sockets';

function App() {
  const [userData, setUserData] = useState<UserData>({
    username: 'Thomas',
    room: 'room1'
  })
  const [rooms, setRooms] = useState<Rooms[]>([])
  const handleGetRooms = (): void => {
    getRooms(userData, setRooms);
  }

  return (
    <div className="App">
        <header className="App-header">
        <h3>Hello, {userData.username}. You're in room: {userData.room}</h3>
        <RoomsList handleGetRooms={handleGetRooms} rooms={rooms} setRoom={setUserData} userData={userData} />
        <UserLogin setUser={setUserData} userData={userData} />
      </header>
    </div>
  );
}

export default App;
