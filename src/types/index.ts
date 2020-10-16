export interface UserData {
    username: string;
    room: string;
}

export interface Rooms {
    name: string;
}

export type SetRooms = (rooms: Rooms[]) => void;