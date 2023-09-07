"use client"

//react..?
import React, { useEffect } from 'react'
import Image from 'next/image'

//decorative
import { GiAbstract037 } from "react-icons/gi";
import { HiSearch, HiBell, HiChat, HiArrowNarrowRight, HiCake } from "react-icons/hi";

//important
import { useSession, signIn, signOut } from "next-auth/react"
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import app from './../Shared/firebaseConfig'
import { useRouter } from 'next/navigation';


function Header() {
    const { data: session } = useSession()

    const router = useRouter();
    const db = getFirestore(app);

    useEffect(()=>{
      saveUserInfo();
    }, [session])

    const saveUserInfo=async()=>{
      if(session?.user)
      {
        await setDoc(doc(db, "users", session.user.email), {
          username: session.user.name,
          email: session.user.email,
          userImg: session.user.image
        });
      }
    };
    
  return (
    <div className='flex gap-3 md:gap-2 items-center p-6'>
        <button>
          <Image src="/Logo.png" width={100} height={70} alt='AB' className='hover:bg-red-950 p-2 rounded-full' onClick={() => router.push('/')}/>
        </button>
        <button className='hover:bg-red-700 bg-black p-2 px-4 rounded-full' onClick={() => router.push('/')}>Home</button>
        <button className='font-semibold p-2 px-4 hover:bg-red-950 rounded-full' 
          onClick={()=>session? router.push('/pic-builder'): signIn()}>Create</button>
        <div className='bg-transparent p-3 text-center
        gap-3 items-center rounded-full w-full hidden sm:flex'>
          <HiCake className='text-[30px] text-red-800'/>
          <h1 className='text[30px] text-red-800'>BBC Event - <a href="https://tsvetnihromozomi.files.wordpress.com/2017/01/26809-1pecahw.jpg?w=680" className='text-red-800 hover:text-red-700'>BirthdayBoy.com</a></h1>
        </div>
        <button onClick={() => router.push('/myBad')}>
          <HiBell className='text-[30px] text-red-800 hover:text-red-600'/>
        </button>
        <button onClick={() => router.push('/myBad')}>
        <HiChat className='text-[40px] text-red-800 hover:text-red-600'/>
        </button>
        {session?.user? 
        <Image src={session?.user?.image}
          onClick={()=>router.push('/'+session.user.email)}
          alt='your-pfp' width={50} height={50}
          className='hover:bg-red-950 p-2
          rounded-full cursor-pointer'/>
        :<button className='font-semibold p-2 px-4 hover:bg-red-950 rounded-full' 
          onClick={() => signIn()}>Login</button>}
    </div>
  )
}

export default Header;