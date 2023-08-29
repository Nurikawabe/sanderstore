"use client"
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import app from './../Shared/firebaseConfig'
import UserInfo from '../components/UserInfo'
import PicList from '../components/pics/PicList'

function Profile({params}) {
    const db = getFirestore(app);
    const [userInfo, setUserInfo] = useState();
    const [pics, setPics] = useState([]);

    useEffect(() => {
        if(params)
        {
            getUserInfo(params.userId.replace('%40', '@'));
        }
    }, [params]);

    useEffect(() => {
        if(userInfo)
        {
            getUserPics();
        }
    }, [userInfo])
    const getUserPics = async ()=> {
        const q = query(collection(db, 'sanderstore-post')
        ,where("email", '==', userInfo.email));

        const qSnapshot = await getDocs(q);
        qSnapshot.forEach((doc) => {
            setPics(pics => [...pics, doc.data()]);
        });
    }

    const getUserInfo = async(email)=>{
        const docRef = doc(db, 'users', email);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()) {
            setUserInfo(docSnap.data());
        } else {
            console.log("no such doc");
        }
    }
    return (
    <div>
        {userInfo?
        <UserInfo userInfo={userInfo}/>
        :null}
        {userInfo?
        <PicList pics={pics}/>
        :null}
    </div>
  )
}

export default Profile