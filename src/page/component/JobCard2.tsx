import React from 'react'
import Temp from './../../assets/logo_binus.png'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { CompanyVacancyProps } from '../props/CompanyVacancyProps'

const JobCard2: React.FC<CompanyVacancyProps> = ({StopTime, Title, Description, ApplierCount}) => {
    return (
        <div className='border-2 border-[#BEBEBE] px-4 py-4 shadow-md w-full rounded-xl mb-8 '>
            <div className='flex justify-between items-center'>
                <div className='mr-8'>
                    <div className='text-[red] font-semibold'>00:00:00 Time Left</div>
                    <div className='text-[24px] font-semibold mb-2'>{Title}</div>
                    <div className='mb-4'>
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                     </div>

                    <div className='font-semibold'>
                        {ApplierCount.toString()} people apply to this job vacancy
                    </div>
                </div>
                
                <div className='ml-8'>
                    <div>
                        <Link to={'/job-detail'}><Button className='mt-2 transition w-[120px] hover:scale-105'>View Detail</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard2
