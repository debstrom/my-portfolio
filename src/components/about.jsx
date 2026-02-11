import {LuUser } from "react-icons/lu";

const about = () => {
  return (
      <div className='md:p-22 md:pt-24 md:pb-22 md:px-40 md:h-full select-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-[white] p-8 md:flex justify-normal space-x-28 md:mt-0 mt-6 pt-16'>
        <div className='md:w-6/12'>
            <div className='md:w-28 md:h-7 rounded-full w-20 h-5 bg-black md:px-1 space-x-3.5 mb-6'>
                <LuUser className='md:inline-block text-white font-semibold relative md:left-1.5 hidden scale-50 md:scale-100' size={22}/>
                <span className='text-white font-poppins text-xs md:text-xs font-normal md:font-medium relative md:-left-0 -left-1 md:-top-0 -top-1 md:pb-0 pb-2 md:pt-0'>About me</span>
            </div>
            <div className='md:pt-5'>
                <h1 className='md:text-5xl text-4xl md:font-medium font-semibold'>Software <br className='md:hidden'/><span className='bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent md:w-48'>Developer </span><br/> <span className='md:text-4xl text-3xl font-poppins font-normal md:font-medium'>Based In Bangladesh.</span></h1>
                <hr className='md:w-44 w-32 md:mb-0 mb-4 h-3 mt-3 md:ml-0 lg:mt-4 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]'></hr>
            </div>
            <div className='md:w-12/12 md:mt-10 '>
                <h1 className='font-poppins text-justify'>I am a Software Developer. Currently with a year of experience, I put my time learning essentials from other fields as well. I am very comfortable with adapting to new software and new technologies. With a strong passion for innovation and a keen eye for detail, I'm confident in my ability to collaborate with cross-functional teams, drive projects forward, and deliver high-quality results. </h1>
            </div>
        </div>
      </div>
    )
}
export default about;
