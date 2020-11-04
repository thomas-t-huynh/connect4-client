import React, { useState } from 'react';
import { UserData } from 'types';
import { joinRoom } from '../utils/sockets';

interface Rooms {
    name: string;
}

interface Props {
    handleGetRooms: () => void;
    setUserData: (userData: UserData) => void;
    rooms?: Rooms[];
    userData: UserData;
}

const RoomsList: React.FC<Props> = ({ handleGetRooms, rooms, setUserData, userData }) => {
    const [selectedRoom, setSelectedRoom] = useState<string>("");

    const handleOnClick = (room: string): void => {
        setSelectedRoom(room);
    }

    const handleJoinRoom = (): void => {
        joinRoom(userData, setUserData);
    }

    return (
        <div>
            <ul>
                {rooms && rooms.map((room, i) => <li style={{ color: selectedRoom === room.name ? "lime" : "white" }} onClick={e => handleOnClick(room.name)} key={i}>{room.name}</li>)}
            </ul>
            {userData.room && <button onClick={() => handleJoinRoom()}>Join room</button>}
            <button onClick={() => handleGetRooms()}>Get Rooms!</button>
        </div>
    )
};

export default RoomsList;