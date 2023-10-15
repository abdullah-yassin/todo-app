import { FC } from "react";
import Image from "next/image";

interface Props {
  avatar: string;
}

const AssignedUser: FC<Props> = ({ avatar }) => {
  return (
    <div className="flex items-center relative">
      {avatar && (
        <Image
          src={avatar}
          alt="User Avatar"
          width="40"
          height="40"
          className="rounded-full bg-white border"
        />
      )}
    </div>
  );
};

export default AssignedUser;
