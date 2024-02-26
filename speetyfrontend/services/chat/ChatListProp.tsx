//this file creates a prop for each user connected and their messages

import React from 'react'

interface ChatList {
    imgUrl:string,
    userName:string,
    lastMsg:string,
    lastMsgTime:string,
    newMsg:boolean

}
const ChatListProp = (userInfo:ChatList) => {
  return (
    <div>ChatListProp</div>
  )
}

export default ChatListProp;