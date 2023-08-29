import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {React, useState} from 'react'

function UserInfo({userInfo}) {
  const router=useRouter();
  const {data:session} = useSession();
  const [copied, setCopied] = useState(false);

  

  const onLogoutCLick= ()=> {
    signOut();
  }
  const onShareClick = () => {
    setCopied(true);
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setTimeout(() => setCopied(false), 1000);
    console.log("set");
  }

  return (
    <div className='flex flex-col items-center'>
      <Image src={userInfo.userImg}
        alt='your pfp'
        width={110}
        height={110}
        className='rounded-full'/>

      <h2 className='text-[30px] font-semibold'>
        {userInfo.username}
      </h2>

      <h2 className='text-[15px]'>
        {userInfo.email}
      </h2>
      <div>
      <button className='bg-rose-900 hover:bg-rose-600 p-2 px-3 mx-2 marker:font-semibold mt-5 rounded-full'
        onClick={() => onShareClick()}>{copied?"Copied":"Share"}</button>
      {session?.user.email == userInfo.email?
      <button className='bg-red-800 hover:bg-red-600 p-2 px-3 mx-2 font-semibold mt-5 rounded-full' onClick={() => onLogoutCLick()}>Logout</button>
      :null}
      </div>
    </div>
  )
}

export default UserInfo