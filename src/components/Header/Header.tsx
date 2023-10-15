"use client";

import React, { FC, useState, useEffect } from "react";
import UserProfile from "./UserProfile/UserProfile";
import { IUser } from "@/interfaces/user";

const Header: FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setLoggedInUser(JSON.parse(loggedInUser));
    }
  }, []);

  return (
    <header className="p-3 flex bg-primary justify-center w-full">
      <nav className="flex container items-center">
        <div className="text-xl font-bold basis-1/2 text-white">TODOS APP</div>
        <div className="basis-1/2 flex justify-end">
          {loggedInUser && (
            <UserProfile
              avatar={loggedInUser.avatar}
              username={loggedInUser.username}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
