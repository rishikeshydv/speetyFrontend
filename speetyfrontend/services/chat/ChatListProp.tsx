import React from 'react';

interface ChatList {
    imgUrl: string;
    userName: string;
    lastMsg: string;
    lastMsgTime: string;
    newMsg: boolean;
}

const ChatListProp: React.FC<ChatList> = ({ imgUrl, userName, lastMsg, lastMsgTime, newMsg }) => {
    if (newMsg) {
        return (
            <div className='bg-blue-100 rounded-2xl'>
                <img src="/user.png" alt="user1" className='w-12 h-12' />
                <h1 className='font-bold text-2xl'>{userName}</h1>
                <h3>New Message</h3>
            </div>
        );
    } else {
        return (
            <div className='flex bg-gray-100 rounded-2xl'>
                <img src="/user.png" alt="user1" className='w-12 h-12' />
                <div className='ml-5'>
                <h1 className='font-bold text-2xl'>{userName}</h1>
                <h3>{lastMsg}</h3>
                </div>  
                <h3 className='mt-5 ml-5'>{lastMsgTime}</h3>
            </div>
        );
    }
};

export default ChatListProp;
