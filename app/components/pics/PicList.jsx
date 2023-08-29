import app from '@/app/Shared/firebaseConfig';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { useEffect } from 'react'
import Pic from './Pic'

function PicList({pics}) {
    console.log(pics);

  return (
    <div
      className="mt-7 mb-4 px-2 md:px-5
      columns-2 md:columns-3
      lg:columns-4
      xl:columns-5 space-y-7 mx-auto`"
    >
      {pics.map((item, index) => (
        <div key={index}>
          <Pic picInfo={item} />
        </div>
      ))}
    </div>
  );
}

export default PicList