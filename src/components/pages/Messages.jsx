import * as Icons from "@heroicons/react/24/outline";
import ChatList from "../ui/messages/ChatList";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

const Messages = () => {
  const navigateTo = useNavigate();
  const [chats, setChats] = useState();

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await fetch("../../../public/store/chatData.json");
        const data = await response.json();
        setChats(data.messages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchChats();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="relative bg-white shadow p-4">
        <Icons.ChevronLeftIcon
          className="h-8 absolute cursor-pointer"
          onClick={() => navigateTo("/Home")}
        />
        <h1 className="text-2xl font-semibold text-center">Messages</h1>
      </header>
      <main>
        <ChatList chats={chats} />
      </main>
    </div>
  );
};

export default Messages;
