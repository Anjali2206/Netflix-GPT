import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from "../utils/userSlice";


const Header = () => {
  const dispatch=useDispatch()
  const user=useSelector((store)=>store.user)
  const navigate = useNavigate();
  const handleClick = () => {
    
    signOut(auth)
      .then(() => {
        
      })
      .catch((error) => {
        navigate('/error')
      });
  };

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,(user)=>{
        if(user){
            const {uid, email, displayName}=user
            dispatch(addUser({uid:uid, email:email, displayName:displayName}))
            navigate("/browse")
        }
        else{
            dispatch(removeUser())
            navigate("/")
        }
    })

    return ()=> unsubscribe()

},[])
  
  return (
    <div className=" flex justify-between px-8 w-screen py-2 absolute z-20 bg-gradient-to-b from-gray-900 text-white">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
      <div className=" p-4  flex  ">      
        <img
          className="w-14 h-14  "
          src="https://occ-0-2368-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"
          alt="user-icon"
        />
        <div>
        <p className="px-2">{user.displayName} </p>
        <button onClick={handleClick} className=" bottom-1 w-24 h-8   font-bold">
        Sign Out
        </button></div>
      </div>)}
      
    
      
    </div>
  );
};

export default Header;
