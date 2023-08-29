"use client"
import React,{useState} from 'react'
import UploadImage from './UploadImage'
import { useSession} from "next-auth/react"
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage"
import UserTag from './UserTag'
import app from '../Shared/firebaseConfig'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

function Form() {
    const {data:session}=useSession();
    const [title,setTitle]=useState();
    const [desc,setDesc]=useState();
    const [file,setFile]=useState();

    const [loading,setLoading]=useState(false);
    const [dumbass,setDumbass]=useState(false);
    const router=useRouter();
    const storage=getStorage(app);
    const db=getFirestore(app);
    const timestamp=Date.now().toString();
    const onSave=()=>{
        if(file && title) {
            setLoading(true);
            uploadFile();
        } else {
            setDumbass(true);
        }
    }

    const uploadFile=()=>{
        const storageRef=ref(storage,'sanderstore/' + file.name);
        uploadBytes(storageRef,file)
        .then(resp=>{
            getDownloadURL(storageRef)
            .then(async (url)=>{
              const postData = {
                title: title,
                desc: desc ? desc : "",
                image: url,
                userName: session.user.name,
                email: session.user.email,
                userImage: session.user.image,
                id: timestamp,
              };

              await setDoc(
                doc(db, "sanderstore-post", timestamp),
                postData
              ).then((resp) => {
                setLoading(true);
                router.push("/" + session.user.email);
              });
            })
        })
    }

   
   
  return (
    <div className='bg-crimson p-16 rounded-2xl '>
        <div className='flex justify-end mb-6'>
            <button onClick={()=>onSave()}
             className='bg-red-700 p-2
             hover:bg-red-500
             font-semibold px-3 
            rounded-lg'>
              {loading?  <Image src="/loading-indicator.png" 
                width={40} 
                height={40} 
                alt='aloing'
                className='animate-spin'  />:
                <span>Save</span>}
            </button>
        </div>

        {dumbass? <label className= " text-rose-500" for="imageGrid">No {file? "":"picture"}{title? "":(file?"":" and ") + "title"}, dumbass.</label>:null}<div id="imageGrid" className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
            <UploadImage setFile={(file)=>setFile(file)} />
          
       <div className="col-span-2">
       <div className='w-[100%]'>
        <input type="text" placeholder='Title'
            onChange={(e)=>setTitle(e.target.value)}
        className='text-[35px] outline-none font-bold w-full
        border-b-[2px] bg-transparent border-red-700 placeholder-white'/>
        <h2 className='text-[12px] mb-8 w-full  text-red-900'>Make it count</h2>
        <UserTag user={session?.user} />
        <textarea type="text"
          onChange={(e)=>setDesc(e.target.value)}
            placeholder='Desc' 
        className=' outline-none  w-full mt-8 pb-1 text-[14px]
        border-b-[2px] bg-transparent border-red-700 placeholder-white'/>
    </div>
       </div>
        
        </div>
    </div>
  )
}

export default Form