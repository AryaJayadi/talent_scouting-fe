import React from 'react'
import Layout from './layout/Layout';
import CompanyCard2 from './component/CompanyCard2';

function BrowseCompanyPage() {
    return (
        <Layout>
            <div className='mx-[8vw] mb-10 mt-6'>
                <div className='flex flex-col items-center'>
                    <div className='text-center font-semibold text-[24px]'>200+ Tech Company Around The World</div>
                    <div className='mt-4'>
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                    </div>
                </div>

                <div className='flex mt-10 w-full relative'>
                    <div className='w-1/4 bg-[#F0F0F0] h-[60vh] rounded-sm p-4 sticky top-16'>
                        <div className='font-bold'>Filters</div>
                    </div>


                    <div className='w-3/4 ml-10'>
                        <div className='grid grid-cols-2 gap-2'>
                            <CompanyCard2 CompanyName={"PT Ford Jakarta"} Image={"asd"} CompanyLocation={"Jakarta"} VacancyCount={10}/>
                            <CompanyCard2 CompanyName={"PT Ford Jakarta"} Image={"asd"} CompanyLocation={"Jakarta"} VacancyCount={10}/>
                            <CompanyCard2 CompanyName={"PT Ford Jakarta"} Image={"asd"} CompanyLocation={"Jakarta"} VacancyCount={10}/>
                            <CompanyCard2 CompanyName={"PT Ford Jakarta"} Image={"asd"} CompanyLocation={"Jakarta"} VacancyCount={10}/>
                            <CompanyCard2 CompanyName={"PT Ford Jakarta"} Image={"asd"} CompanyLocation={"Jakarta"} VacancyCount={10}/>
                            <CompanyCard2 CompanyName={"PT Ford Jakarta"} Image={"asd"} CompanyLocation={"Jakarta"} VacancyCount={10}/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BrowseCompanyPage
