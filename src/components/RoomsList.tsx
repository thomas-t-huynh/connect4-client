import React from 'react';
import { UserData } from 'types';

interface Rooms {
    name: string;
}

interface Props {
    handleGetRooms: () => void;
    setRoom: (userData: UserData) => void;
    rooms?: Rooms[];
    userData: UserData;
}

const RoomsList: React.FC<Props> = ({ handleGetRooms, rooms, setRoom, userData }) => {
    const handleOnClick = (room: string) => {
        setRoom({...userData, room })
    }
    return (
        <div>
            <ul>
                {rooms && rooms.map((room, i) => <li onClick={e => handleOnClick(room.name)} key={i}>{room.name}</li>)}
            </ul>
            <button onClick={() => handleGetRooms()}>Get Rooms!</button>
        </div>
    )
};

export default RoomsList;