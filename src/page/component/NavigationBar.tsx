import React from 'react'
import LogoBinus from '../../assets/logo_header.png';
import { Link } from 'react-router-dom'
import ProfileHeader from './../component/ProfileHeader'

function NavigationBar() {
    return (
        <div className='w-full h-full flex px-[30px] items-center border-b-2'>
            <div className='flex items-center mr-[32px]'>
                <img src={LogoBinus} className='w-[100px]'/>
                <div className='font-bold text-[20px]'>Job Connector</div>
            </div>

            <div>
                <Link className='mx-[30px] text-[16px] font-medium' to={'/home'}>Home</Link>
                <Link className='mx-[30px] text-[16px] font-medium' to={'/job'}>Job</Link>
                <Link className='mx-[30px] text-[16px] font-medium' to={'/company'}>Company</Link>
                <Link className='mx-[30px] text-[16px] font-medium' to={'/profile'}>Profile</Link>
            </div>

            <div className='ml-auto'>
                <ProfileHeader/>
            </div>
        </div>
    )
}

export default NavigationBar
