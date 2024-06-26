import React, { useEffect, useState } from "react";
import IconWrapper from "../Common/IconWrapper";
import TextChip from "./TextChip";

import { paperPlaneSvg } from "../../Constant/svgs";
import { Mic, MoreVertical, Plus, Search, Smile } from "lucide-react";
import NameAvatar from "./NameAvatar";
import { useSelector } from "react-redux";
const Chat = () => {
  const user = useSelector((state) => state.user.users);

  const [message, setMessage] = useState("");
  const [id, setId] = useState(0);
  const [chat, setChat] = useState([
    {
      message:
        "Oh, hello! All perfectly. I will check it and get back to you soon",
      timestamp: "06:45 PM",

      subject: "sender",
    },
    {
      message:
        "Oh, hello! All perfectly I will check it and get back to you soon",
      timestamp: "06:45 PM",
      subject: "reciever",
    },
    {
      message:
        "Oh, hello! All perfectly.I will check it and get back to you soon",
      timestamp: "06:45 PM",
      subject: "sender",
    },
    {
      message: "Ok",
      timestamp: "06:45 PM",
      subject: "reciever",
    },
  ]);
  const handleSendMessage = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = hours + ":" + minutes.toString().padStart(2, "0");

    const newChat = {
      message,
      timestamp: time,
      subject: "sender",
    };

    setChat([...chat, newChat]);
    setMessage("");

    const lastId = chat.length;
    setId(lastId);
  };

  useEffect(() => {
    const el = document.getElementById(`message${id}`);
    el.scrollIntoView({ behavior: "instant", block: "start" });
  }, [id]);

  return (
    <main className="w-100 d-flex flex-column singleChatWrapper bg-white  ">
      {/* Header */}
      <div className="chatHeader d-flex justify-content-between w-100 py-1">
        <div className="d-flex align-items-center gap-2">
          {user.dp === null ? (
            <NameAvatar name={user.user} />
          ) : (
            <img src={user.dp} alt="user" className="userDp" />
          )}
          <h4 className="chatUserName">{user.user}</h4>
          <TextChip label={user.tag} />
        </div>
        <div className="d-flex gap-2">
          <IconWrapper bg="#6B6392" color="white">
            <Search style={{ width: 20, height: 20 }} />
          </IconWrapper>
          <IconWrapper bg="#6B6392" color="white">
            <MoreVertical style={{ width: 20, height: 20 }} />
          </IconWrapper>
        </div>
      </div>
      {/* Chat header */}
      <div className="messages mt-2 d-flex flex-column w-100 gap-4 ">
        {chat.map((message, index) => (
          <div
            key={index}
            className={`w-100 d-flex position-relative ${
              message.subject === "reciever"
                ? "justify-content-start"
                : "justify-content-end"
            }`}
          >
            <div
              className={`w-auto ${
                message.subject === "sender"
                  ? "sentMessageBubble"
                  : "recievedMessageBubble"
              }`}
            >
              <div
                id={`message${index}`}
                className={`${
                  message.subject === "sender"
                    ? "chatBubbleSent"
                    : "RecievedMessageBubble"
                }`}
              >
                {message.message}
              </div>
              <p
                className={`position-absolute ${
                  message.subject === "sender"
                    ? "chatTimeStampsent"
                    : "chatTimeStamprecieved"
                }`}
              >
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="chatFooterMain">
        <div className="emojiWrapper">
          <Smile />
        </div>
        <div className="d-flex justify-content-start w-100 gap-2">
          <div className="d-flex align-items-center chatInputWrapper w-100 gap-2">
            <div className="addFileChatWrapper">
              <Plus />
            </div>
            <input
              type="text"
              placeholder="type and send your message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <span
              onClick={handleSendMessage}
              className="m-0 p-0 cursor-pointer"
              title="send message"
            >
              {paperPlaneSvg}
            </span>
          </div>
          <div className="emojiWrapper">
            <Mic style={{ color: "white" }} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Chat;
