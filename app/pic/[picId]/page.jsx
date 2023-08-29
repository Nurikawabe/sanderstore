"use client"
import React, { useEffect, useState } from 'react'
import PicImage from '../../components/picDetail/PicImage'
import PicInfo from '../../components/picDetail/PicInfo'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import app from '@/app/Shared/firebaseConfig'
import { HiArrowSmallLeft } from "react-icons/hi2";
import { useRouter } from 'next/navigation'
function PicDetail({params}) {
  const router=useRouter();
  const db=getFirestore(app);
  const [picInfo,setPicInfo]=useState([]);
  const [copied, setCopied] = useState(false);
  useEffect(()=>{
    getPicInfo();
  },[])
 const getPicInfo=async()=>{
      const docRef = doc(db, 'sanderstore-post',params.picId );
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
       
        setPicInfo(docSnap.data())
      } else {
       
        console.log("No such document!");
      }
  }
  const onShareClick = () => {
    setCopied(true);
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setTimeout(() => setCopied(false), 1000);
    console.log("set");
  }
  return (
    <>
      {picInfo ? (
        <div className=" p-3 md:p-12 rounded-2xl md:px-24 lg:px-36">
          <HiArrowSmallLeft
            className="text-[60px] font-bold ml-[-50px] 
       cursor-pointer hover:bg-gray-900 rounded-full p-2 "
            onClick={() => router.back()}
          />
          <div
            className="grid grid-cols-1 lg:grid-cols-2 md:gap-10 shadow-lg
      rounded-2xl p-3 md:p-7 lg:p-12 xl:pd-16 "
          >
            <PicImage picInfo={picInfo} />
            <div className="">
              <PicInfo picInfo={picInfo} />
              <button
                className="bg-rose-900 hover:bg-rose-600 p-2 px-3 mx-2 marker:font-semibold mt-5 rounded-full"
                onClick={() => onShareClick()}
              >
                {copied ? "Copied" : "Share"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default PicDetail