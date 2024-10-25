export default function ClassSchedule() {
    return (
        <div>
            <h1 className="font-bold text-xl mb-5">Your Class Schedule</h1>
            <div className="bg-white rounded-xl lg:m-4 lg:p-5 p-3 text-xs text-[#7577D9;]">
                <div className="hidden lg:block">
                    <div className="flex p-3 bg-[#F8F8F8;] mb-2 justify-between  rounded-md  ">
                        <div className="flex">
                            <div className="flex flex-col justify-center"><div className="mx-5">v</div></div>
                            <div>
                                <span className="text-xs">Class 7,Science | Live Class</span>
                                <p className="text-sm font-bold text-[#4749B3;]">Tuesday 5:00 - 5:50 PM</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center"><span >Yesterday</span></div>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <div className="flex p-3 bg-[#E66DFF;] mb-2 justify-between text-white  rounded-md">
                        <div className="flex">
                            <div className="flex flex-col justify-center"><div className="mx-5">v</div></div>
                            <div>
                                <span className="text-xs">Class 7,Science | Live Class</span>
                                <p className="text-sm font-bold text-white">Tuesday, 6:30 - 7:15 PM</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center"><span >Today</span></div>
                    </div>
                </div>
                <div className="flex p-3 bg-[#F8F8F8;] mb-2 justify-between  rounded-md">
                    <div className="flex">
                        <div className="flex flex-col justify-center"><logo className="mx-5">v</logo></div>
                        <div>
                            <span className="text-xs">Class 7,Science | Live Class</span>
                            <p className="text-sm font-bold text-[#4749B3;]">Tuesday 5:00 - 5:50 PM</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center"><span >Yesterday</span></div>
                </div>
                <div className="flex p-3 bg-[#FDF5FF;] text-[#E981FF;] mb-2 justify-between text-center  rounded-md">
                    <div className="flex">
                        <div className="flex flex-col justify-center"><logo className="mx-5">v</logo></div>
                        <div>
                            <span className="text-xs">Class 7,Science | Live Class</span>
                            <p className="text-sm font-bold text-[#E66DFF;]">Tuesday 5:00 - 5:50 PM</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center"><span >Yesterday</span></div>
                </div>

            </div>
        </div>
    );
}