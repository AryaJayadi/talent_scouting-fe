import React, { useEffect } from 'react'
import Layout from './layout/Layout';
import { Input } from '@/components/ui/input';
import CompanyVacancy from './component/CompanyVacancy';
import 'aos/dist/aos.css';
import AOS from "aos"

function CompanyHomePage() {

    useEffect(() => {
        AOS.init({duration: 500})
    }, []);

    return (
        <Layout>
            <div className='mx-[60px] overflow-hidden'>
                <div className='bg-[#120272] p-[24px] mt-[30px] rounded-md'>
                    <div className='text-white text-[32px]'>Welcome Back Rico!!</div>
                    <div className='text-white mt-[10px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae praesentium, dolore tempore accusantium ea voluptatem exercitationem quae voluptatibus quaerat magnam, blanditiis beatae quia. Et itaque reiciendis voluptatem, alias quasi aperiam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae praesentium, dolore tempore accusantium ea voluptatem exercitationem quae voluptatibus quaerat magnam, blanditiis beatae quia. Et itaque reiciendis voluptatem, alias quasi aperiam.
                    </div>
                    <div className='mt-[30px] w-[30%]'>
                        <Input placeholder={'Let\'s find a job for you'}/>
                    </div>
                </div>
                <div className='mt-[40px]' data-aos='fade-left'>
                    <div className='text-[24px] font-medium mb-2 text-center'>Your Latest Vacancy</div>

                    <div>
                        <CompanyVacancy StopTime={new Date()} Title={"Front End Developer"} Description={"Lorem"} ApplierCount={5}/>
                        <CompanyVacancy StopTime={new Date()} Title={"Front End Developer"} Description={"Lorem"} ApplierCount={5}/>
                        <CompanyVacancy StopTime={new Date()} Title={"Front End Developer"} Description={"Lorem"} ApplierCount={5}/>
                        
                    </div>
                </div>

            </div>

        </Layout>
    )
}

export default CompanyHomePage
