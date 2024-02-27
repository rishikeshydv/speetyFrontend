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
    if (userInfo.newMsg)  {
        return (
            <div className='bg-blue-100 rounded-2xl'>
                {userInfo.newMsg}
                <img src="/user.png" alt="user1" className='w-12 h-12'  />
                <h1 className='font-bold text-2xl'>{userInfo.userName}</h1>
                <h3>New Message</h3>        
            </div>
          )
    }
else {
    <div className='bg-gray-100 rounded-2xl'>
    {userInfo.newMsg}
    <img src="/user.png" alt="user1" className='w-12 h-12'  />
    <h1 className='font-bold text-2xl'>{userInfo.userName}</h1>
    <h3>{userInfo.lastMsg}</h3>
    <h3>{userInfo.lastMsgTime}</h3>
</div>
}

}

export default ChatListProp;