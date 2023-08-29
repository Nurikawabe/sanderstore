import React from 'react'
import UserTag from '../UserTag'

function PinInfo({picInfo}) {
  const user={
    name:picInfo.userName,
    email:picInfo.email,
    image:picInfo.userImage
  }
  return (
    <div>
      <h2 className="text-[30px] font-bold mb-10 text-ellipsis overflow-hidden hover:text-clip">
        {picInfo.title}
      </h2>
      <UserTag user={user} />
      <h2 className="mt-10 text-ellipsis overflow-hidden hover:text-clip">
        {picInfo.desc}
      </h2>
    </div>
  );
}

export default PinInfo