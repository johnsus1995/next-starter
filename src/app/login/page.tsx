'use client';

import * as React from 'react';
import { useRecoilState } from 'recoil';

import { userAtom } from '@/store/user.atom';

export default function Page() {
  const [userState, setUserState] = useRecoilState(userAtom);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserState({ ...userState, email: event.target.value });
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserState({ ...userState, userName: event.target.value });
  };

  return (
    <div>
      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        id='email'
        value={userState.email}
        onChange={handleEmailChange}
      />
      <label htmlFor='username'>Username:</label>
      <input
        type='text'
        id='username'
        value={userState.userName}
        onChange={handleUsernameChange}
      />
    </div>
  );
}
