import Navbar from './Navbar.js';
import Announcements from './Announcements.js';
import QuickLinks from './QuickLinks.js';
import AccessClassRecordings from './AccessClassRecordings.js';
import ClassSchedule from './ClassSchedule.js'
export default function Dashboard() {
    return (
        <>
            <Navbar />
            <div className='bg-[#6669FE1A;] lg:flex p-5'>
                <div className='hidden lg:block w-4/6 '>
                    <Announcements />
                    <ClassSchedule />
                </div>
                <div className='lg:hidden'>
                    <Announcements />
                    <QuickLinks />
                    <ClassSchedule />
                </div>
                <div className='hidden lg:block w-3/6'>
                    <QuickLinks />
                </div>
                <AccessClassRecordings />
            </div>
        </>
    );
}