import { FC } from "react";
import { useRouter } from "next/navigation";

interface Props {}

const USerMenu: FC<Props> = () => {
  const router = useRouter();

  const clickLogoutHandler = () => {
    localStorage.removeItem("user");
    router.push("/auth/login");
  };

  return (
    <div
      className="absolute right-0 z-10 mt-32 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
    >
      <button
        className="block px-2 py-3 text-sm w-full hover:cursor-pointer"
        onClick={clickLogoutHandler}
      >
        Logout
      </button>
    </div>
  );
};

export default USerMenu;
