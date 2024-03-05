import React from 'react'

interface Agent{
    photoUrl:string;    //we wont be using image like zillow, we will use GIF/Video
    name:string;
    stars:number;
    phone:string;
    usersDealt:string
    company: string;
    license: string;

}
const AgentProp:React.FC<Agent> = ({photoUrl,name,stars,phone,usersDealt,company,license}) => {

  return (
    <div className='border-2 shadow-md rounded-2xl h-80 w-96 bg-gray-600'>
        <img src={photoUrl} alt="houseVideo" className='rounded-2xl'/>
        <p className='text-2xl font-bold mt-2'>{price}</p>
        <p className='text-xl'>{beds} bds | {baths} ba | {houseType}</p>
        <p className='text-xl'>{address}</p>
        <p>{listedBy}</p>
    </div>
  )
}

export default PropertyProp;