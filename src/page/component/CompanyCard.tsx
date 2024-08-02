import React from 'react'
import { CompanyCardProps } from '../props/CompanyCardProps'
import Temp from './../../assets/logo_binus.png'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"

const JobCard: React.FC<CompanyCardProps> = ({ CompanyName, Image, CompanyLocation, VacancyCount }) => {
    const truncateMultilineStyle = {
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    };
    return (
        <div className='border-2 px-8 pb-10 shadow-md rounded-xl w-full'>
            <div>
                <div className='h-[28vh]'>
                    <div className='flex justify-between items-center h-[12vh]'>
                        <div className='flex items-center'>
                            <div className='mr-6'>
                                <img src={Image} className='w-[80px]'/>
                            </div>

                            <div>
                                <div className='text-[24px] font-semibold'>{CompanyName}</div>
                                <div className='text-[#838383]'>{CompanyLocation}</div>
                            </div>
                        </div>

                        {/* <div className='text-[#0E6700] w-[150px] text-center rounded-xl'>
                            <div className='text-[22px]'>{VacancyCount.toString()}</div>
                            <div>Jobs Available</div>
                        </div> */}
                    </div>

                    <div className='my-4' style={{display:'-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow:'hidden', textOverflow:'ellipsis'}}>
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                    </div>
                    
                </div>
                {/* <div className='bg-[#b2ffb2] text-[#0E6700] w-[150px] text-center rounded-xl'>{VacancyCount.toString()} Jobs Available</div> */}

                <div className='flex justify-between mt-4'>
                    <div className='text-[#0E6700] text-center items-center flex'>
                        <div className='text-[18px] bg-[#b2ffb2] px-3 py-1 rounded-lg'>{VacancyCount.toString()} Jobs Available</div>
                    </div>
                    <Link to={'/company-detail'}><Button className='transition hover:scale-105'>View Company</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default JobCard
