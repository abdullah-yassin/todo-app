import { FC, useState } from "react";
import Image from "next/image";
import USerMenu from "../UserMenu/UserMenu";

interface Props {
  avatar: string;
  username: string;
}

const UserProfile: FC<Props> = ({ avatar, username }) => {
  const [isShowDropDown, setIsShowDropDown] = useState<boolean>(false);

  const onClickUserHandler = () => {
    setIsShowDropDown((prevState) => !prevState);
  };

  return (
    <div
      className="flex items-center relative hover:cursor-pointer"
      onClick={onClickUserHandler}
    >
      {avatar && (
        <Image
          src={avatar}
          alt="User Avatar"
          width={50}
          height={50}
          className="me-4 rounded-full bg-white border p-2"
        />
      )}

      <p className="capitalize text-white">{username}</p>
      {isShowDropDown && <USerMenu />}
    </div>
  );
};

export default UserProfile;
