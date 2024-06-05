import React from 'react'
import { JobCardProps } from '../props/JobCardProps'
import Temp from './../../assets/logo_binus.png'
import { Link } from 'react-router-dom'

const JobCard: React.FC<JobCardProps> = ({ JobName, CompanyName, Image }) => {
    return (
        <Link to={'/job-detail'} className='border-2 rounded-md py-6'>
            <div className='flex justify-center my-6'>
                <img src={Temp} width={100}/>
            </div>
            <div className='text-center text-[18px]'>{JobName}</div>
            <div className='text-center'>{CompanyName}</div>
        </Link>
    )
}

export default JobCard
