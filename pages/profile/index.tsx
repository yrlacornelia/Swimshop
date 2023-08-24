import React, { use, useEffect, useState } from 'react'
import MyProfile from '../../components/profile/myProfile'
import { useRouter } from 'next/router';
import { useUserAuth } from '../../utils/services';
import Loader from '../../components/reusableComponents/loader';
export default function Profile() {
  const router = useRouter();
  const {user}  = useUserAuth();
  useEffect(() => {
    if (!user ) {
      router.push('/profile/login'); 
    }
    else{
          console.log("no")
    }
  }, [user]);
  console.log(user)
  return (

    <>
      {user ? (
        <MyProfile />) :
        (<><Loader/></>)
        }
    </>


  )
}
