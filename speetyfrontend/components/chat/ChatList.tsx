//use moment.js to get time/date in a good format
// npm install moment @types/moment
//import moment from 'moment';
//const now = moment(); // Current date and time
//console.log(now.format('YYYY-MM-DD HH:mm:ss')); // Example formatting

import React from "react";
import MessageProp from "@/services/chat/MessageProp";

interface _messageInfo {
  msg: string;
  _datetime: string;
}
interface messageType {
  id: string;
  messageInfo: _messageInfo;
}
export default function ChatList() {
  //write a logic to retrieve the chatHistory or chatLists of sender and receiver

  // Custom comparison function to compare message times
  function compareMessages(a: messageType, b: messageType) {
    const timeA = new Date(a.messageInfo._datetime).getTime();
    const timeB = new Date(b.messageInfo._datetime).getTime();
    return timeA - timeB; // Ascending order
  }

  var user1Messages: messageType[] = [
    {
      id: "1",
      messageInfo: {
        msg: "Hello, how are you?",
        _datetime: "2024-02-27 10:00:00"
      },
    },
    {
      id: "2",
      messageInfo: {
        msg: "I'm good, thank you!",
        _datetime: "2024-02-27 10:05:00",
      },
    },
    {
      id: "3",
      messageInfo: {
        msg: "Do you want to grab some lunch?",
        _datetime: "2024-02-27 12:30:00",
      },
    },
  ];

  const user2Messages: messageType[] = [
    {
      id: "4",
      messageInfo: {
        msg: "Hey there!",
        _datetime: "2024-02-28 08:45:00",
      },
    },
    {
      id: "5",
      messageInfo: {
        msg: "Morning! How's it going?",
        _datetime: "2024-02-28 09:30:00",
      },
    },
    {
      id: "6",
      messageInfo: {
        msg: "Good morning! It's going well, thanks!",
        _datetime: "2024-02-2809:35:00",
      },
    },
  ];

  //sorting each message times
  user1Messages.sort(compareMessages);
  user2Messages.sort(compareMessages);
  return (
    <div>
      {user1Messages.map((message, index) => (
        <div key={message.id} className="flex justify-end">
          <MessageProp
            message={message.messageInfo["msg"]}
            msgTime={message.messageInfo["_datetime"]}
            msgColor="blue"
          />
          {/* Check if there are more messages in user2Messages */}
          {index < user2Messages.length && (
            <div className="flex justify-start">
              <MessageProp
                message={message.messageInfo["msg"]}
                msgTime={message.messageInfo["_datetime"]}
                msgColor="white"
              />
            </div>
          )}
  </div>
      ))}
    </div>
  );
}