import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose
} from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import { TbTruckReturn,TbTruckDelivery} from "react-icons/tb";
import { FaGoogleWallet} from "react-icons/fa";
import { MdHelp, MdOutlineFavorite} from "react-icons/md";


const TopNav = () => {
    const [sideNav, setSideNav]= useState(false);

  return (
    <div className="max-w-[1520] max-auto flex justify-between item-center p-4">
      <div className="flex items-center ">
        <div className="cursor-pointer">
          <AiOutlineMenu onClick={()=> setSideNav(!sideNav)} size={25} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Yummy
          <span className="text-orange-700 font-bold">Foods</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-orange-700 text-white flex rounded-full p-2 text-bold">
            <TbTruckDelivery size={25} className="mx-1"/>
            free
          </p>
          <p className="text-bold p-2">delivery</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500]">
        <AiOutlineSearch size={25}/>
        <input
          className="bg-transparent p-2 w-full"
          type="text"
          placeholder="search meals"
        />
      </div>

      <button className="bg-orange-700 text-white hidden md:flex item-center px-4 py-2 rounded-full">
        <BsFillCartFill size={25} /> cart
      </button>
      {
        sideNav?<div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0" onClick={()=>(setSideNav(!sideNav))}></div>:""
      }
      <div className={sideNav?"fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300":
    "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
        <AiOutlineClose onClick={()=>(setSideNav(!sideNav))} size={25} className="absolute top-5 right-5 " />
        <h2 className="text-2xl p-4">Yummy <span className="text-orange-700 font-bold">Foods</span></h2>
        <ul className="p-4 text-gray-900">
            <li className="text-xl py-4 flex">
                <BsPerson size={25} className="bg-black text-white rounded-full mr-4"/>
                My Account
            </li>
            <li className="text-xl py-4 flex">
                <TbTruckReturn size={25} className="bg-black text-white rounded-full mr-4"/>
                Delivery
            </li>
            <li className="text-xl py-4 flex">
                <MdOutlineFavorite size={25} className="bg-black text-white rounded-full mr-4"/>
                My Favorite
            </li>
            <li className="text-xl py-4 flex">
                <FaGoogleWallet size={25} className="bg-black text-white rounded-full mr-4"/>
                My Wallet
            </li>
            <li className="text-xl py-4 flex">
                <MdHelp size={25} className="bg-black text-white rounded-full mr-4"/>
                Help
            </li>
        </ul>

      </div>

      
    </div>
  );
};

export default TopNav;
