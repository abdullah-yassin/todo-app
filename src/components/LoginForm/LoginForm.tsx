"use client";

import { FC, useState, Fragment, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IUser } from "@/interfaces/user";
import { authenticateUser } from "@/services/auth";
import axiosInstance from "@/lib/axios/axios";

interface Props {
  usersData: IUser[];
}

const LoginForm: FC<Props> = ({ usersData }) => {
  const { push } = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<boolean>(false);

  const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isUserAuthenticated = authenticateUser(username, password);

    if (isUserAuthenticated) {
      const userData = usersData.find((user) => user.username === username);

      const user = {
        ...userData,
        password: password,
      };

      localStorage.setItem("user", JSON.stringify(user));

      axiosInstance.defaults.auth = {
        username,
        password,
      };

      push("/todos");
    } else {
      setLoginError(true);
    }
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

    if (loggedInUser) {
      push("/todos");
    }
  }, [push]);

  return (
    <form onSubmit={submitFormHandler} className="bg-white rounded mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Username
        </label>
        <select
          className="shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
          defaultValue={0}
          onChange={(event) => {
            setUsername(event.target.value);
            setLoginError(false);
          }}
        >
          {usersData &&
            usersData.map((user, index) => (
              <Fragment key={`user-${index + 1}`}>
                {index === 0 && (
                  <option value={0} disabled className="text-gray-300">
                    Select a user
                  </option>
                )}
                <option value={user.username}>{user.username}</option>
              </Fragment>
            ))}
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          className="bg-gray-100 shadow appearance-none border rounded w-full p-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          name="password"
          type="password"
          placeholder="********"
          onChange={(event) => {
            setPassword(event.target.value);
            setLoginError(false);
          }}
        />
      </div>
      {loginError && (
        <p className="text-red-500 text-xs italic text-center mb-6">
          Username/Password wrong
        </p>
      )}
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-primary text-white font-bold py-3 px-16 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
