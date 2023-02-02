import React from "react";
import { useAuthContext } from "contexts/AuthContext";

const LoginWithDiscord = ({ DiscordIcon }) => {
  const auth = useAuthContext();

  // Code for styling the login/logout button
  const buttonStyle = "border-2 border-black \
  bg-amber-500 hover:bg-amber-600 active:bg-amber-700 \
  rounded-full py-2 px-10 text-center text-slate-800 \
  text-lg font-bold"

  // If user is not authenticated; Render login button
  if (!auth.isAuthenticated()) {
    return (
      <form action="/auth/discord">
        <button
          className={"w-52 tablet:w-auto tracking-widest " + buttonStyle}
          type="submit"
        >
          <DiscordIcon className="w-7 h-7 mr-2 float-left" />
          Login with Discord
        </button>
      </form>
    );
  }


  return (
    <div>
      <button className={"w-52 tablet:w-auto pt-2 tracking-widest " + buttonStyle}
        onClick={auth.logout}>
          Logout
        </button>
    </div>
  );
};

export default LoginWithDiscord;
