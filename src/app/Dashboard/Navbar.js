export default function Navbar() {
    return (
        <nav className="bg-[#4749B3;] w-screen text-white font-bold flex justify-between p-8 lg:p-5 text-center">
            <div className="flex flex-col justify-center">
                <img className="h-12 w-18 lg:mx-10" src="https://s3-alpha-sig.figma.com/img/1851/a76d/5564585b3e54113002a9ffd6e566e393?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gi~7T4kW0Oq~5ivG5TTSVnxzxUdm27neii4fCZRfvd3HxdiHmaN3OCXrWPqtv4~6x5mNfzykMkr8KBHJ25UoTsu8GyZ~f8d-JqfgCMfxpoyvXgZK6ZJyplt7CkXez~Ysxr1OZZKTCTOekmofloxAUVgqNrEEb1gBv-rH7szYCOOqXAODlNpU-LlK-fMBkAD1vVaNgPdfuH6FY6jK7bDPnUQ-BO2V0lEiImmm4Xf7s8QPkf2dPgvHcNLHUU2tYCqntBvR7w0lir7hLm97taIcugZ7pVMCzS3DSBAG9Qe9lb3LUKpRwHL2y2DA2IhVPbmopN5vUpcHsYraCl9S442AjQ__" />
            </div>
            <div className="flex flex-col justify-center">
                <h1>Student Portal</h1>
            </div>
            <div className="hidden lg:block">
                <h1>Hello, Gabrisa!</h1>
                <p>Class 7, Math + Science</p>
            </div>
        </nav>
    );
}