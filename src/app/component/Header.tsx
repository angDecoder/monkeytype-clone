import React from 'react';
import Logo from "@/app/assets/Logo";
import Keyboard from "@/app/assets/Keyboard";
import Crown from "@/app/assets/Crown";
import Setting from "@/app/assets/Setting";
import Bell from "@/app/assets/Bell";
import User from "@/app/assets/User";
import Tooltip from '@/app/component/Tooltip';

function Header() {
  return (
    <header className="flex justify-start items-center gap-3 my-5 px-36">
      <Logo />
      <h1 className="font-semibold text-4xl text-color5">monkeytype</h1>

      <div className="flex gap-3 px-2 *:transition-colors *:duration-300 *:cursor-pointer grow">
        <div className='relative group'>
          <Keyboard />
          <Tooltip name='Invite' />
        </div>

        <div className='relative group'>
          <Crown />
          <Tooltip name='Leaderboard' />
        </div>
        <div className='relative group'>
          <Setting />
          <Tooltip name='Settings' />
        </div>
      </div>

      <div className="flex gap-3 px-2 *:transition-colors *:duration-300 *:cursor-pointer">
        <div className='relative group'>
          <Bell />
          <Tooltip name='Notification' />
        </div>

        <div className='relative group'>
          <User />
          <Tooltip name='Profile' />
        </div>
      </div>
    </header>
  )
}

export default Header