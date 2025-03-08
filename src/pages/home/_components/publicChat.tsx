import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

interface Message {
  id: number;
  username: string;
  text: string;
  role: "admin" | "moderator" | "vip" | "user";
}

const roleColors: Record<string, string> = {
  admin: "bg-red-500",
  moderator: "bg-green-500",
  vip: "bg-orange-500",
  user: "bg-gray-700",
};

export default function PublicChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      username: "Admin123",
      text: "Welcome to the chat!",
      role: "admin",
    },
    { id: 2, username: "User456", text: "Hey everyone!", role: "user" },
    { id: 3, username: "VIP_Gamer", text: "Love this game!", role: "vip" },
  ]);

  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      { id: Date.now(), username: "You", text: input, role: "user" },
    ]);
    setInput("");
  };

  return (
    <>
      <div
        className={`fixed inset-0 pt-16 md:pt-0 md:relative w-full md:w-1/6 h-full p-3 md:p-0 bg-background z-20 rounded-lg flex flex-col justify-between shadow-lg transition-all duration-300${
          isOpen
            ? "translate-x-0 translate-y-0"
            : "translate-x-full translate-y-full  md:translate-x-0 md:translate-y-0 "
        } `}
      >
        <div className="flex justify-between items-center pb-2">
          <h2 className="text-lg font-semibold">📢 Chat</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-green-500">ONLINE</span>
            <BiChevronDown
              className="text-xl md:hidden"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 p-2">
          {messages.map(({ id, username, text, role }) => (
            <div key={id} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-sm font-medium">
                {username.charAt(0).toUpperCase()}
              </div>
              <div className="flex flex-col">
                <span className="text-sm flex items-center space-x-1">
                  <strong>{username}</strong>
                  <span
                    className={`px-2 py-1 text-xs rounded-md ${roleColors[role]}`}
                  >
                    {role.toUpperCase()}
                  </span>
                </span>
                <p className="text-sm text-gray-300">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full items-center space-x-2 pt-2">
          <input
            type="text"
            className="flex-1 bg-white/10 rounded-lg p-2 text-sm outline-none"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-primary px-3 py-2 rounded-lg text-sm"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
      {!isOpen && (
        <div
          className="fixed z-10 bottom-2 right-2 md:hidden bg-primary p-1 px-4 rounded-lg "
          onClick={() => setIsOpen(true)}
        >
          Chat
        </div>
      )}
    </>
  );
}
