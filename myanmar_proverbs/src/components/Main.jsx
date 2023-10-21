import React from 'react'
import { NavLink } from 'react-router-dom'

const Main = () => {
  return (
    <div className=' container mx-auto w-[80%] md:w-[70%] lg:w-[70%] h-screen flex justify-center items-center'>
        <div className=''>
            <h1 className='h-[100px] text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>သိမှတ်စရာမြန်မာစကားပုံများ</h1>

            <p className='text-sm my-7'>သင့်ဘ၀အတွက် ဗဟုသုတအဖြစ် လေ့လာနိုင်သည့်အပြင် ကျောင်းသားကျောင်းသူများအတွက် မြန်မာစာအရေးအသားလေ့လာနိုင်ရန် အသုံးပြုနိုင်သည်။</p>

            
            <NavLink  to='/wordList'>
                <p className='w-24 h-9 rounded-md drop-shadow-xl text-white bg-gradient-to-r from-green-400 to-indigo-400 text-center '>ရှေ့သို့</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Main