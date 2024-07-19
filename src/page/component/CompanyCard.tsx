import React from 'react'
import { CompanyCardProps } from '../props/CompanyCardProps'
import Temp from './../../assets/logo_binus.png'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"

const JobCard: React.FC<CompanyCardProps> = ({ CompanyName, Image, CompanyLocation, VacancyCount }) => {
    return (
        <div className='border-2 border-[#BEBEBE] px-4 py-4 shadow-xl w-full'>
            <div>
                <div className='flex justify-between items-center'>
                    <div>
                        <div className='text-[20px] font-semibold'>{CompanyName}</div>
                        <div className='text-[#838383]'>{CompanyLocation}</div>
                    </div>

                    <div>
                        <img src={Image} className='object-cover object-center w-[100px] h-[80px]'/>
                    </div>
                </div>

                <div className='my-4'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</div>
                
                <div className='bg-[#90F2AC] text-[#0E6700] w-[150px] text-center rounded-xl'>{VacancyCount.toString()} Jobs Available</div>

                <div className='flex justify-center'>
                    <Link to={'/company-detail'}><Button className='mt-4 transition hover:scale-105'>View Company</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default JobCard
