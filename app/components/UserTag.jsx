"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function UserTag({user}) {
    //const {data:session}=useSession();
    const router = useRouter();
  return (
    <div className="">
      {user ? (
        <button
          className="flex gap-3 items-center"
          onClick={() => router.push("/" + user.email)}
        >
          <Image
            src={user.image}
            alt="your pfp"
            width={45}
            height={45}
            className="rounded-full"
          />
          <div>
            <h2 className="text-[14px] font-medium">{user.username}</h2>
            <h2 className="text-[12px]">{user.email}</h2>
          </div>
        </button>
      ) : null}
    </div>
  );
}

export default UserTag