import React from 'react'
import { CompanyCardProps } from '../props/CompanyCardProps'
import Temp from './../../assets/logo_binus.png'
import { Link } from 'react-router-dom'

const JobCard: React.FC<CompanyCardProps> = ({ CompanyName, Image, CompanyLocation, VacancyCount, }) => {
    return (
        <Link to={'/company-detail'} className='border-2 rounded-md py-6'>
            <div className='flex justify-center my-6'>
                <img src={Temp}/>
            </div>
            <div className='text-center text-[18px]'>{CompanyName}</div>
            <div className='text-center'>{CompanyLocation}</div>
            <div className='text-center'>
                <div className='text-[#0E6700] font-bold bg-[#90F2AC] mx-20 rounded-xl mt-4'>{VacancyCount.toString()} Jobs</div>
            </div>
        </Link>
    )
}

export default JobCard
