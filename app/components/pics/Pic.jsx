import { useRouter } from 'next/navigation';
import UserTag from '../UserTag';
import React from 'react'
import Image from 'next/image'

function picInfo({picInfo}) {
  const router=useRouter();
    const user={
        name:picInfo?.userName,
        image:picInfo?.userImage,
        /*
          <h2
            className="font-sans text-ellipsis overflow-hidden hover:text-clip
            text-[18px] mt-0 bg-[#ff03033d] text-white line-clamp-2 rounded-full text-center rounded-t-3xl"
          >
          {picInfo.title}
          </h2>
          rounded-t-3xl
        */

    }
  return (
    <div
      className=" flex-wrap-reverse relative
        before:absolute
        before:h-full before:w-full
        before:rounded-3xl
        rounded-3xl
        before:z-10
         hover:before:bg-[#000000bd]
        before:opacity-50
        cursor-pointer
        padding-bottom-50
        border-red-900
        border-2"
      onClick={() => router.push("/pic/" + picInfo.id)}
    >
      <Image
        src={picInfo.image}
        alt={picInfo.title}
        width={500}
        height={500}
        className="rounded-3xl 
        cursor-pointer z-0"
      />
    </div>
  );
}

export default picInfo