"use client"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Image from 'next/image'
import app from './Shared/firebaseConfig';
import { useEffect, useState } from 'react';
import PicList from './components/pics/PicList';

export default function Home() {
  const db = getFirestore(app);
  const [pics, setPics] = useState([]);

  useEffect(() => {
    getAllPics();
  }, [])

  const getAllPics = async ()=> {
    const q = query(collection(db, 'sanderstore-post'));

    const qSnapshot = await getDocs(q);
    qSnapshot.forEach((doc) => {
        setPics(pics => [...pics, doc.data()]);
    })
  }

  return (
    <>
    <div className='p-3'>
      <PicList pics={pics}/>
    </div>
    </>
  )
}
