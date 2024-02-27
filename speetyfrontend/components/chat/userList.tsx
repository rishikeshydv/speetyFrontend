import React, { useEffect } from 'react';
import ChatListProp from '@/services/chat/ChatListProp';
//import all the packages and modules that would connect it to firebase

export default function UserList() {

  TODO: //use the following code to use document and access the element by Id
  // useEffect(() => {
  //   const userSpace = document.getElementById('all_users')
  // },[]);
  
  return (
    <div id="all_users">
      {/* {inside these curly braces, write the logic for getting all the getDocs of the users
        and then forEach, add a ChatListProp
      } */}
      {/* For now I will be haardcoding the users list UI */}
      <ChatListProp 
      imgUrl = "123.png"
      userName = "Rishi"
      lastMsg = "Hi!"
      lastMsgTime = "10:30 AM"
      newMsg = {true}
      />
            <ChatListProp 
      imgUrl = "456.png"
      userName = "Saddy"
      lastMsg = "Hello"
      lastMsgTime = "11:00PM"
      newMsg = {false}
      />
    </div>
  )
}