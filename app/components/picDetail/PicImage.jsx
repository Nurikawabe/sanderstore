import Image from 'next/image'
import React from 'react'

function PinImage({picInfo}) {

  return (
    <div>
      <Image
        src={picInfo.image}
        alt={picInfo.title}
        width={1000}
        height={1000}
        className="rounded-2xl"
      />
    </div>
  );
}

export default PinImage