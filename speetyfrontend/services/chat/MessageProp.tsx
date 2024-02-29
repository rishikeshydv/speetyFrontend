import React from 'react'

interface MsgProp {
    message:string;
    msgTime:string;
    msgColor:string

}
const MessageProp:React.FC<MsgProp> = ({message,msgTime,msgColor}) => {
  return (
    <div>
        <div className={`bg-${msgColor}-300 w-80 h-20 rounded-2xl`}>
            <h1>{message}</h1>
        </div>
        <p>{msgTime}</p>
    </div>
  )
}
export default MessageProp
