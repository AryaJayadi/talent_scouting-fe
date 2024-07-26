import React from 'react'
import { StudentCardProps } from '../props/StudentCardProps'
import Temp from './../../assets/logo_binus.png'
import { Link } from 'react-router-dom'

const StudentCard: React.FC<StudentCardProps> = ({ StudentName, Image }) => {
    return (
        <Link to={'/job-detail'} className='border-2 rounded-md py-6 px-4 w-[15vw] h-[18vw]'>
            <div className='flex justify-center mb-6'>
                <img src={Image} className='w-[200px] h-[120px] object-cover object-center'/>
            </div>
            <div className='text-center text-[16px] font-semibold'>{StudentName}</div>
        </Link>
    )
}

export default StudentCard
