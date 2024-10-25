import Link from "next/link";

export default function Login() {
    return (
        <div className="bg-[#6669FE;] w-screen p-5">
            <img className="h-12 w-18 lg:mx-10" src="https://s3-alpha-sig.figma.com/img/1851/a76d/5564585b3e54113002a9ffd6e566e393?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gi~7T4kW0Oq~5ivG5TTSVnxzxUdm27neii4fCZRfvd3HxdiHmaN3OCXrWPqtv4~6x5mNfzykMkr8KBHJ25UoTsu8GyZ~f8d-JqfgCMfxpoyvXgZK6ZJyplt7CkXez~Ysxr1OZZKTCTOekmofloxAUVgqNrEEb1gBv-rH7szYCOOqXAODlNpU-LlK-fMBkAD1vVaNgPdfuH6FY6jK7bDPnUQ-BO2V0lEiImmm4Xf7s8QPkf2dPgvHcNLHUU2tYCqntBvR7w0lir7hLm97taIcugZ7pVMCzS3DSBAG9Qe9lb3LUKpRwHL2y2DA2IhVPbmopN5vUpcHsYraCl9S442AjQ__" />
            <div className="flex justify-center">
                <div className="flex flex-col h-[89vh] justify-center">
                    <div className="text-center lg:w-[700px]">
                        <h1 className="font-bold lg:text-5xl text-2xl text-white">Please verify your account to access the student portal.</h1>
                        <Link href={"/Login/Otp"}><button className="bg-white text-[#E66DFF;] font-bold text-lg px-5 p-2 my-4 rounded-full">Send WhatsApp OTP</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}