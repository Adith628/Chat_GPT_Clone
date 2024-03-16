import React, { useEffect, useState } from "react";
import icon from "../assets/gpticon.png";
import stars from "../assets/star.png";
import avatar from "../assets/avatar.png";
import send from "../assets/send.png";
import { sendMsgToGPT } from "./OpenAi";
const Main = () => {
  const user = "John Doe";

  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hello, I'm ChatGPT. How can I help you today?",
      isBot: true,
    },
  ]);

  const handleSend = async (msg) => {
    const res = await sendMsgToGPT(msg);
    setPrompt("");
    setMessages([
      ...messages,
      {
        text: msg,
        isBot: false,
      },
      {
        text: res,
        isBot: true,
      },
    ]);
  };

  return (
    <div className="flex-1">
      <nav className="py-2 fixed z-10 top-0  w-full border-b bg-gray-950 border-gray-700">
        <div className="flex justify-between px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex  w-64 items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="default-sidebar"
                data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden  focus:outline-none focus:ring-2   hover:bg-gray-700  focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipPath="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-1 text-2xl text-center">ChatGPT</div>
        </div>
      </nav>

      <aside
        id="default-sidebar"
        className="fixed top-0 z-30 left-0  w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li className="flex my-3 items-center gap-5">
              <div className="flex items-center justify-center rounded-full h-12 w-12 bg-white ">
                <img src={icon} alt="ChatGPT" className="h-8 invert " />
              </div>
              <div className="text-xl">New chat</div>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
              >
                <span className="ms-3">Dashboard</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2  rounded-lg  text-white   hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
              </a>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t   border-gray-700">
            <li className="flex px-2 py-2 rounded-3xl items-center gap-4 hover:bg-gray-700">
              <div className="border border-gray-500 w-max p-2 rounded-full">
                <img src={stars} className="h-8 invert" alt="" />
              </div>
              <div className="">
                <div className="text-lg font-semibold">Upgrade plan</div>
                <div className="text-gray-500">Get GPT-4,DALL·E, and more</div>
              </div>
            </li>
            <li className="flex px-2 py-2 rounded-3xl items-center gap-4 hover:bg-gray-700">
              <div className="border border-gray-500 w-fit p-2 rounded-full">
                <img src={avatar} className="h-8 " alt="" />
              </div>
              <div className="">
                <div className="text-xl font-semibold">{user}</div>
              </div>
            </li>
          </ul>
        </div>
      </aside>
      <div className="flex z-0 flex-col justify-end min-w-full items-end p-4 sm:pl-72 max-w-screen-sm h-screen">
        <div className="chats overflow-y-scroll flex flex-col gap-4 w-full h-full mt-20">
          {messages.map((msg, index) => {
            return (
              <div
                key={index}
                className={`chat flex mt-2 items-start gap-2.5 justify-start`}
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src={msg.isBot ? icon : avatar}
                  alt="Jese image"
                />
                <div
                  className={`flex flex-col  w-full max-w-[320px] leading-1.5 p-4 border-gray-200  rounded-e-xl rounded-es-xl ${
                    msg.isBot ? "bg-gray-700" : "bg-gray-500"
                  }`}
                >
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-white">
                      {msg.isBot ? "ChatGPT" : user}
                    </span>
                    <span className="text-mdfont-normal text-gray-500 dark:text-gray-400">
                      {Date.now().toLocaleString()}
                    </span>
                  </div>
                  <p className="text-md font-normal py-2.5  text-white">
                    {msg.text}
                  </p>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Delivered
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="chtfooter h-fit flex w-full items-center   md:px-16
        justify-center   "
        >
          <div className="relative flex  flex-1">
            <input
              value={prompt}
              onChange={(e) => {
                setPrompt(e.target.value);
              }}
              type="search"
              id="default-search"
              className="block
              text-white text-xl  bg-transparent rounded-3xl h-20 w-full p-4 ps-10 text-xlborder  focus:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Message ChatGPT..."
              required
            />
            <button
              type="submit"
              className="flex  rounded-3xl  items-center justify-center text-white
              hover:outline-none hover:ring-2 hover::ring-gray-600
              bg-gray-500 w-16
              h-16 absolute end-2.5 bottom-2.5"
              onClick={() => handleSend(prompt)}
            >
              <img src={send} className="h-6 -rotate-90" alt="" />
            </button>
          </div>
        </div>
        <div className="text-center text-sm mt-4 text-gray-400 self-center">
          ChatGPT can make mistakes. Consider checking important information.
        </div>
      </div>
    </div>
  );
};

export default Main;
