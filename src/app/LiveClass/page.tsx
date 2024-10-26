import Link from "next/link";
export default function LiveClass(){
    return (
        <div className="flex justify-center overlay h-screen w-screen ">
            <div className="text-center flex flex-col justify-center">
                <h1 className="text-[#E66DFF] lg:w-[450px] p-2 rounded-2xl font-bold bg-white">Class 7 Math is starting in 1 hour, 34 minutes.</h1>
                <div className="bg-white p-10 lg:p-20 text-center m-5 my-2  rounded-2xl lg:w-[392px] h-[213px] flex flex-col justify-center self-center">
                    <h1 className="text-[#6669FE] font-bold text-xl">You can join the live Class 5 minutes before it starts. Please wait.</h1>
                    <div>
                        <Link href={"/Dashboard"}><button className="text-white text-sm p-2 mt-5 w-20 rounded-full bg-[#6669FE]">Okay</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}