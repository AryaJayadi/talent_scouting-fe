import React from 'react'
import LogoBinus from '../../assets/logo_header.png';
import { Link } from 'react-router-dom'
import ProfileHeader from './../component/ProfileHeader'

function NavigationBar() {
    return (
        <div className='w-full h-full flex px-[60px] items-center shadow-md'>
            <div className='flex items-center mr-[32px]'>
                <img src={LogoBinus} className='w-[100px]'/>
            </div>

            <div>
                <Link className='mx-[30px] text-[18px] font-medium' to={'/home'}>Home</Link>
                <Link className='mx-[30px] text-[18px] font-medium' to={'/browse-job'}>Job</Link>
                <Link className='mx-[30px] text-[18px] font-medium' to={'/browse-company'}>Company</Link>
                <Link className='mx-[30px] text-[18px] font-medium' to={'/profile'}>Profile</Link>
            </div>

            <div className='ml-auto'>
                <ProfileHeader/>
            </div>
        </div>
    )
}

export default NavigationBar
