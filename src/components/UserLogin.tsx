import React, { useState } from 'react';
import { UserData } from 'types';

interface Props {
    setUser: (userData: UserData) => void;
    userData: UserData;
}

const UserLogin: React.FC<Props> = ({ setUser, userData }) => {
    const [username, setUsername] = useState<string>("");
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUsername(e.target.value);
    }
    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setUser({...userData, username})
    }
    return (
        <form onSubmit={e => handleOnSubmit(e)}>
            <label>Username: </label>
            <input type="text" name="username" onChange={e => handleOnChange(e)} value={username} />
            <button>Login</button>
        </form>
    )
}

export default UserLogin;