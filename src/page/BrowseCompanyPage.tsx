import React, { useEffect } from 'react';
import Layout from './layout/Layout';
import CompanyCard from './component/CompanyCard';
import 'aos/dist/aos.css';
import AOS from "aos"

function BrowseCompanyPage() {
    useEffect(() => {
        AOS.init({duration: 500})
    }, []);
    return (
        <Layout>
            <div className='mx-[8vw] mb-10 mt-6'>
                <div className='flex flex-col items-center' data-aos="fade-up">
                    <div className='text-center font-semibold text-[24px]'>200+ Tech Company Around The World</div>
                    <div className='mt-4'>
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                    </div>
                </div>

                <div className='flex mt-10 w-full relative'>
                    <div className='w-1/4 bg-[#F0F0F0] h-[60vh] rounded-sm p-4 sticky top-16' data-aos="fade-up">
                        <div className='font-bold'>Filters</div>
                    </div>


                    <div className='w-3/4 ml-10' data-aos="fade-left">
                        <div className='grid grid-cols-2 gap-2'>
                            <CompanyCard CompanyName={"PT Ford Jakarta"} Image={"asd"} CompanyLocation={"Jakarta"} VacancyCount={10}/>
                            <CompanyCard CompanyName={"PT Ford Jakarta"} Image={"asd"} CompanyLocation={"Jakarta"} VacancyCount={10}/>
                            <CompanyCard CompanyName={"PT Ford Jakarta"} Image={"asd"} CompanyLocation={"Jakarta"} VacancyCount={10}/>
                            <CompanyCard CompanyName={"PT Ford Jakarta"} Image={"asd"} CompanyLocation={"Jakarta"} VacancyCount={10}/>
                            <CompanyCard CompanyName={"PT Ford Jakarta"} Image={"asd"} CompanyLocation={"Jakarta"} VacancyCount={10}/>
                            <CompanyCard CompanyName={"PT Ford Jakarta"} Image={"asd"} CompanyLocation={"Jakarta"} VacancyCount={10}/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BrowseCompanyPage
