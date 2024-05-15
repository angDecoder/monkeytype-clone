import React from 'react';
import Logo from "@/app/assets/Logo";
import Keyboard from "@/app/assets/Keyboard";
import Crown from "@/app/assets/Crown";
import Setting from "@/app/assets/Setting";
import Bell from "@/app/assets/Bell";
import User from "@/app/assets/User";

function Header() {
  return (
    <header className="flex justify-start items-center gap-3 my-5 px-36">
      <Logo />
      <h1 className="font-semibold text-4xl text-color5">monkeytype</h1>

      <div className="flex gap-3 px-2 *:transition-colors *:duration-300 *:cursor-pointer grow">
        <Keyboard />
        <Crown />
        <Setting />
      </div>

      <div className="flex gap-3 px-2 *:transition-colors *:duration-300 *:cursor-pointer">
        <Bell />
        <User />
      </div>
    </header>
  )
}

export default Header