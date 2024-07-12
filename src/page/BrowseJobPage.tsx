import React from 'react'
import Layout from './layout/Layout';
import CompanyVacancy from './component/CompanyVacancy'

function BrowseJobPage() {
    return (
        <Layout>
            <div className='mx-[8vw] mb-10 mt-6'>
                <div className='flex flex-col items-center'>
                    <div className='text-center font-semibold text-[24px]'>1000+ Software Engineer Jobs Vacancy</div>

                    <div className='mt-4'>
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                    </div>
                </div>

                <div className='flex mt-10 w-full relative'>
                    <div className='w-1/4 bg-[#F0F0F0] h-[60vh] rounded-sm p-4 sticky top-20'>
                        <div className='font-bold'>Filters</div>
                    </div>


                    <div className='w-3/4 ml-10'>
                        <div>
                            <CompanyVacancy StopTime={new Date()} Title={"Front End Developer"} Description={"Lorem"} ApplierCount={5}/>
                            <CompanyVacancy StopTime={new Date()} Title={"Front End Developer"} Description={"Lorem"} ApplierCount={5}/>
                            <CompanyVacancy StopTime={new Date()} Title={"Front End Developer"} Description={"Lorem"} ApplierCount={5}/>
                            <CompanyVacancy StopTime={new Date()} Title={"Front End Developer"} Description={"Lorem"} ApplierCount={5}/>
                            <CompanyVacancy StopTime={new Date()} Title={"Front End Developer"} Description={"Lorem"} ApplierCount={5}/>
                            <CompanyVacancy StopTime={new Date()} Title={"Front End Developer"} Description={"Lorem"} ApplierCount={5}/>
                        
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BrowseJobPage;
