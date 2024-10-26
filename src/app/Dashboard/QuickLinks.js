"use client";
import { useState } from "react";
export default function QuickLinks() {
    const [closePopUp, setClosePopUp] = useState(false);

    return (
        <div>
            <div className="lg:my-14 hidden lg:w-3/12  lg:block absolute">
                <h1 className="font-bold text-xl mt-3 mb-4">Quick Links</h1>
                <div className="bg-[#4749B3] hover:bg-white hover:text-[#4749B3] cursor-pointer text-white text-center p-5 rounded-3xl my-3 transition duration-500">
                    <div className="m-5">logo</div>
                    <h1 className="font-bold text-xl">Canvas LMS</h1>
                    <p className="text-sm">Click here to access your LMS portal for assignments, class recordings and notes.</p>
                </div>
                <div onClick={() => setClosePopUp(!closePopUp)} className="bg-[#E66DFF] hover:bg-white hover:text-[#E66DFF] cursor-pointer text-white text-center p-5 rounded-3xl my-3 transition duration-500">
                    <div className="m-5">logo</div>
                    <h1 className="font-bold text-xl">Join Live Class</h1>
                    <p className="text-sm">Class 7 Math is starting in</p>
                    <p className="font-bold">1 hour, 35 minutes.</p>
                </div>
                <div className="bg-[#6669FE] hover:bg-white hover:text-[#6669FE] cursor-pointer text-white text-center p-5 rounded-3xl transition duration-500">
                    <div className="m-5">logo</div>
                    <h1 className="font-bold text-xl">Contact Teacher</h1>
                    <p className="text-sm">Click here to contact your teacher for any doubts or concerns.</p>
                </div>
            </div>
            <div className="lg:hidden">
                <h1 className="font-bold text-xl mt-3 mb-4">Quick Links</h1>
                <div className="text-white bg-[#E66DFF]  m-4 text-center p-5 rounded-md my-3">
                    <div className=""></div>
                    <h1 className="text-xl font-bold">Canvas LMS</h1>
                </div>
                <div onClick={() => setClosePopUp(!closePopUp)} className="text-white bg-[#4749B3] m-4 text-center p-5 rounded-md my-3">
                    <div className=""></div>
                    <h1 className="text-xl font-bold">Join Live Class</h1>
                </div>
                <div className="text-white bg-[#6669FE] m-4 text-center p-5 rounded-md my-3">
                    <div className=""></div>
                    <h1 className="text-xl font-bold">Contact Teacher</h1>
                </div>
            </div>
            {
                closePopUp ?
                    <div className="flex justify-center z-20 bg-black bg-opacity-75 w-full  h-screen -mt-[665px] -ml-5 lg:-ml-[518px]  lg:-mt-28 fixed">
                        <div className="text-center h-screen flex flex-col justify-center">
                            <h1 className="text-[#E66DFF] lg:w-[450px] p-2 rounded-2xl font-bold bg-white">Class 7 Math is starting in 1 hour, 34 minutes.</h1>
                            <div className="bg-white p-10 lg:p-20 text-center m-5 my-2  rounded-2xl lg:w-[392px] h-[213px] flex flex-col justify-center self-center">
                                <h1 className="text-[#6669FE] font-bold text-xl">You can join the live class 5 minutes before it starts. Please wait.</h1>
                                <div>
                                    <button onClick={() => setClosePopUp(!closePopUp)} className="text-white text-sm p-2 mt-5 w-20 rounded-full bg-[#6669FE]">Okay</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    : ""
            }
        </div>
    );
}