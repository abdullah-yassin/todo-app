import { FC } from "react";
import Image from "next/image";
import LoginForm from "@/components/LoginForm/LoginForm";
import { getAllUsers } from "@/services/userServices";

const LoginPage: FC = async () => {
  const usersData = await getAllUsers();

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-[#7211f8] to-[#c125ff] backdrop-blur-lg">
      <div className="w-1/3">
        <div className="bg-white p-10 shadow-md rounded-md mb-6">
          <div className="w-[225px] h-[50px] m-auto">
            <Image
              src="https://nextwo.com/wp-content/uploads/2022/09/logo.png"
              alt="Nextwo"
              width="200"
              height="50"
            />
          </div>
          <LoginForm usersData={usersData} />
        </div>
        <p className="text-center text-white text-xs">
          &copy;2023 Todo app (T2). All rights reserved.
          <br />
          Created by Abdallah Yassin
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
