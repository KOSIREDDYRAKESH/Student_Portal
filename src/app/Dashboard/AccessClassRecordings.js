import { useState } from "react";
export default function AccessClassRecordings() {
    const [togglePlayBtn, setTogglePlayBtn] = useState([true, null]);
    const textColorBlue = "text-[#4749B3;] lg:text-lg text-base font-bold";
    const textColorPink = "text-[#E66DFF;] lg:text-lg text-base font-bold";
    const [toggleVideoPannel, setToggleVedioPannel] = useState(null);
    console.log(toggleVideoPannel)
    return (
        <><div className="my-14 lg:px-8 lg:w-4/6 cursor-pointer">
            <h1 className="font-bold text-xl mt-3 m-7 mb-4">Access Class Recordings</h1>
            <div className="bg-white p-7 rounded-lg ">
                <input type="text" className="bg-[#F6F6FB;] w-full h-10 mb-5 p-3" placeholder="Search for class recordings"></input>
                <div className="flex justify-between text-sm my-5">
                    <span> Filter By:</span>
                    <div>
                        <span className="mx-5 bg-[#F6F6FB;] p-2">This week ^</span>
                        <span className="bg-[#F6F6FB;] p-2">All subjects ^</span>
                    </div>
                </div>

                <div onClick={() => { setToggleVedioPannel(true) }}
                    onMouseEnter={() => setTogglePlayBtn([true, 1])}
                    onMouseLeave={() => setTogglePlayBtn([false, 1])}>
                    <div className="flex justify-between mt-10"
                    >
                        <div className="text-sm">
                            <p className="text-[#4749B3;]">Class 7 Math</p>
                            <h1 className={togglePlayBtn[0] && togglePlayBtn[1] == 1 ? textColorBlue : "lg:text-lg text-base font-bold"}>Algebraic Equations </h1>
                        </div>
                        <div className="bg-[#474996;] w-28 h-20">
                            {togglePlayBtn[0] && (togglePlayBtn[1] == 1) ? <div className="text-white font-bold text-sm absolute text-center w-28 h-20 z-10 mt-8">play now</div> :
                                <div class="absolute z-10 w-10 h-10 border-4 border-white rounded-full flex items-center justify-center  mt-5 ml-8">
                                    <div class="w-0 h-0 border-l-[10px] rotate-90 border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-white"></div>
                                </div>}

                            <img className="h-20 object-cover" src="https://s3-alpha-sig.figma.com/img/acd9/706c/ba5e99b25b5edb1a76a3a53c6e647f36?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AUdPFn8ln-8kM~ufrIxKyfzUWWoqDziuzBE7mRIyQbQ3SkemcEnbyDHiISn6Ig5R12q9zcEhX~pkVO9EXu4AgtLH5Ml9l8qUgKPsZUot0SbLVbzgw3EEzRsX~Q~hNrpvJ2Sy5VdNwZIvryjcdZNEuDkjSInXkpqgvMouIEjX3-qVBMDELiUhyca5XzimTTYlkz-GsNXSK8aXxLknuXtyNM-9nHM5GY1LV5fs~qdzV-4KITrJxdC-YMje3toI3Wv-snaBgku1cSYIywOrSH-Bg3qAk-vnqUSsj5mvTnz-70orCunw9eZLavE6g9sRYSM7DxlHB4VtOavbR8BYDIN~jw__" />
                            <div className="z-10  w-28 h-20 inset-0 bg-[#474996;] opacity-50 -mt-20"></div>
                        </div>
                    </div>
                    <p className="text-xs mb-1">24th October, 2024</p>
                </div>
                <hr />
                <div onClick={() => { setToggleVedioPannel(true) }}
                    onMouseEnter={() => setTogglePlayBtn([true, 2])}
                    onMouseLeave={() => setTogglePlayBtn([false, 2])}>
                    <div className="flex justify-between mt-10"
                    >
                        <div className="text-sm">
                            <p className="text-[#E66DFF;]">Class 7 Math</p>
                            <h1 className={togglePlayBtn[0] && togglePlayBtn[1] == 2 ? textColorPink : "lg:text-lg text-base font-bold"}>Differential Maths </h1>
                        </div>
                        <div className="bg-[#474996;] w-28 h-20">
                            {togglePlayBtn[0] && (togglePlayBtn[1] == 2) ? <div className="text-white font-bold text-sm absolute text-center w-28 h-20 z-10 mt-8">play now</div> :
                                <div class="absolute z-10 w-10 h-10 border-4 border-white rounded-full flex items-center justify-center  mt-5 ml-8">
                                    <div class="w-0 h-0 border-l-[10px] rotate-90 border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-white"></div>
                                </div>}
                            <img className="h-20 object-cover" src="https://s3-alpha-sig.figma.com/img/acd9/706c/ba5e99b25b5edb1a76a3a53c6e647f36?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AUdPFn8ln-8kM~ufrIxKyfzUWWoqDziuzBE7mRIyQbQ3SkemcEnbyDHiISn6Ig5R12q9zcEhX~pkVO9EXu4AgtLH5Ml9l8qUgKPsZUot0SbLVbzgw3EEzRsX~Q~hNrpvJ2Sy5VdNwZIvryjcdZNEuDkjSInXkpqgvMouIEjX3-qVBMDELiUhyca5XzimTTYlkz-GsNXSK8aXxLknuXtyNM-9nHM5GY1LV5fs~qdzV-4KITrJxdC-YMje3toI3Wv-snaBgku1cSYIywOrSH-Bg3qAk-vnqUSsj5mvTnz-70orCunw9eZLavE6g9sRYSM7DxlHB4VtOavbR8BYDIN~jw__" />
                            <div className="z-10  w-28 h-20 inset-0 bg-[#E66DFF;] opacity-50 -mt-20"></div>
                        </div>
                    </div>
                    <p className="text-xs mb-1">24th October, 2024</p>
                </div>
                <hr />
                <div onClick={() => { setToggleVedioPannel(true) }}
                    onMouseEnter={() => setTogglePlayBtn([true, 3])}
                    onMouseLeave={() => setTogglePlayBtn([false, 3])}>
                    <div className="flex justify-between mt-10"
                    >
                        <div className="text-sm">
                            <p className="text-[#4749B3;]">Class 7 Math</p>
                            <h1 className={togglePlayBtn[0] && togglePlayBtn[1] == 3 ? textColorBlue : "lg:text-lg text-base font-bold"}>Fundamentals of organic chemistry </h1>
                        </div>

                        <div className="bg-[#474996;] w-28 h-20">
                            {togglePlayBtn[0] && (togglePlayBtn[1] == 3) ?
                                <div className="text-white font-bold text-sm absolute text-center w-28 h-20 z-10 mt-8">play now</div> :
                                <div class="absolute z-10 w-10 h-10 border-4 border-white rounded-full flex items-center justify-center  mt-5 ml-8">
                                    <div class="w-0 h-0 border-l-[10px] rotate-90 border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-white"></div>
                                </div>}
                            <img className="h-20 object-cover" src="https://s3-alpha-sig.figma.com/img/acd9/706c/ba5e99b25b5edb1a76a3a53c6e647f36?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AUdPFn8ln-8kM~ufrIxKyfzUWWoqDziuzBE7mRIyQbQ3SkemcEnbyDHiISn6Ig5R12q9zcEhX~pkVO9EXu4AgtLH5Ml9l8qUgKPsZUot0SbLVbzgw3EEzRsX~Q~hNrpvJ2Sy5VdNwZIvryjcdZNEuDkjSInXkpqgvMouIEjX3-qVBMDELiUhyca5XzimTTYlkz-GsNXSK8aXxLknuXtyNM-9nHM5GY1LV5fs~qdzV-4KITrJxdC-YMje3toI3Wv-snaBgku1cSYIywOrSH-Bg3qAk-vnqUSsj5mvTnz-70orCunw9eZLavE6g9sRYSM7DxlHB4VtOavbR8BYDIN~jw__" />
                            <div className="z-10  w-28 h-20 inset-0 bg-[#474996;] opacity-50 -mt-20"></div>
                        </div>
                    </div>
                    <p className="text-xs mb-1">24th October, 2024</p>
                </div>
                <hr />
                <div onClick={() => { setToggleVedioPannel(true) }}
                    onMouseEnter={() => setTogglePlayBtn([true, 4])}
                    onMouseLeave={() => setTogglePlayBtn([false, 4])}
                >
                    <div className="flex justify-between mt-10">
                        <div className="text-sm">
                            <p className="text-[#4749B3;]">Class 7 Math</p>
                            <h1 className={togglePlayBtn[0] && togglePlayBtn[1] == 4 ? textColorBlue : "lg:text-lg text-base font-bold"}>Trignomentry 101</h1>
                        </div>
                        <div className="bg-[#474996;] w-28 h-20">
                            {togglePlayBtn[0] && (togglePlayBtn[1] == 4) ? <div className="text-white font-bold text-sm absolute text-center w-28 h-20 z-10 mt-8">play now</div> :
                                <div class="absolute z-10 w-10 h-10 border-4 border-white rounded-full flex items-center justify-center  mt-5 ml-8">
                                    <div class="w-0 h-0 border-l-[10px] rotate-90 border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-white"></div>
                                </div>}                                <img className="h-20 object-cover" src="https://s3-alpha-sig.figma.com/img/acd9/706c/ba5e99b25b5edb1a76a3a53c6e647f36?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AUdPFn8ln-8kM~ufrIxKyfzUWWoqDziuzBE7mRIyQbQ3SkemcEnbyDHiISn6Ig5R12q9zcEhX~pkVO9EXu4AgtLH5Ml9l8qUgKPsZUot0SbLVbzgw3EEzRsX~Q~hNrpvJ2Sy5VdNwZIvryjcdZNEuDkjSInXkpqgvMouIEjX3-qVBMDELiUhyca5XzimTTYlkz-GsNXSK8aXxLknuXtyNM-9nHM5GY1LV5fs~qdzV-4KITrJxdC-YMje3toI3Wv-snaBgku1cSYIywOrSH-Bg3qAk-vnqUSsj5mvTnz-70orCunw9eZLavE6g9sRYSM7DxlHB4VtOavbR8BYDIN~jw__" />
                            <div className="z-10  w-28 h-20 inset-0 bg-[#474996;] opacity-50 -mt-20"></div>
                        </div>
                    </div>
                    <p className="text-xs mb-1">24th October, 2024</p>
                </div>
                <hr />
            </div>
        </div >
            {
                toggleVideoPannel ?
                    <div className="bg-black bg-opacity-50 lg:-mx-5 w-screen h-screen lg:h-auto  -mt-[1650px] -ml-5   lg:-mt-40 z-50 fixed lg:pt-32 lg:px-20 ">
                        <div className="flex bg-[#4749B3;]  justify-between py-3 text-white rounded-t-2xl ">
                            <div></div>
                            <div className="text-center ml-2">
                                <p className="text-sm">Class 7 Science</p>
                                <h1 className="font-bold">Fundamentals of Organic Chemistry</h1>
                            </div>
                            <div onClick={() => { setToggleVedioPannel(false) }} className="text-center pt-2 hover:border w-10 mr-2">X</div>
                        </div>
                        <div>
                            <img className="w-full " alt="video" src="https://s3-alpha-sig.figma.com/img/acd9/706c/ba5e99b25b5edb1a76a3a53c6e647f36?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AUdPFn8ln-8kM~ufrIxKyfzUWWoqDziuzBE7mRIyQbQ3SkemcEnbyDHiISn6Ig5R12q9zcEhX~pkVO9EXu4AgtLH5Ml9l8qUgKPsZUot0SbLVbzgw3EEzRsX~Q~hNrpvJ2Sy5VdNwZIvryjcdZNEuDkjSInXkpqgvMouIEjX3-qVBMDELiUhyca5XzimTTYlkz-GsNXSK8aXxLknuXtyNM-9nHM5GY1LV5fs~qdzV-4KITrJxdC-YMje3toI3Wv-snaBgku1cSYIywOrSH-Bg3qAk-vnqUSsj5mvTnz-70orCunw9eZLavE6g9sRYSM7DxlHB4VtOavbR8BYDIN~jw__" />
                        </div>
                    </div> : ""
            }
        </>
    );
}