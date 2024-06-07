import React from 'react';
import Layout from './layout/Layout';
import { Input } from "@/components/ui/input"
import JobCard from './component/JobCard'
import JobRecommendationCard from './component/JobRecommendationCard'
import CompanyCard from './component/CompanyCard';

const HomePage: React.FC = () => {
    return (
        <Layout>
            <div className='mx-[60px]'>
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

                <div className='my-[50px]'>
                    <div className='text-[24px] font-medium mb-2 text-center'>Job Recommendation</div>

                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae praesentium, dolore tempore accusantium ea voluptatem exercitationem quae voluptatibus quaerat magnam, blanditiis beatae quia. Et itaque reiciendis voluptatem, alias quasi aperiam.
                    </div>

                    <div className='flex justify-between mt-6'>
                        <JobRecommendationCard JobName={"Front End Developer"} Index={1}/>
                        <JobRecommendationCard JobName={"Front End Developer"} Index={2}/>
                        <JobRecommendationCard JobName={"Front End Developer"} Index={3}/>
                        <JobRecommendationCard JobName={"Front End Developer"} Index={4}/>
                    </div>
                </div>


                <div className='my-[50px]'>
                    <div className='text-[24px] font-medium mb-2 text-center'>Popular Job</div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae praesentium, dolore tempore accusantium ea voluptatem exercitationem quae voluptatibus quaerat magnam, blanditiis beatae quia. Et itaque reiciendis voluptatem, alias quasi aperiam.
                    </div>

                    <div className='grid grid-cols-6 mt-6 gap-10'>
                        <JobCard JobName={"Sofware Engineer"} CompanyName={"PT Ford Jakarta"} Image={"asd"}/>
                        <JobCard JobName={"Sofware Engineer"} CompanyName={"PT Ford Jakarta"} Image={"asd"}/>
                        <JobCard JobName={"Sofware Engineer"} CompanyName={"PT Ford Jakarta"} Image={"asd"}/>
                        <JobCard JobName={"Sofware Engineer"} CompanyName={"PT Ford Jakarta"} Image={"asd"}/>
                        <JobCard JobName={"Sofware Engineer"} CompanyName={"PT Ford Jakarta"} Image={"asd"}/>
                        <JobCard JobName={"Sofware Engineer"} CompanyName={"PT Ford Jakarta"} Image={"asd"}/>
                    </div>
                </div>

                <div className='my-[70px]'>
                    <div className='text-[24px] font-medium mb-2 text-center'>Top Companies for Software Developers</div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae praesentium, dolore tempore accusantium ea voluptatem exercitationem quae voluptatibus quaerat magnam, blanditiis beatae quia. Et itaque reiciendis voluptatem, alias quasi aperiam.
                    </div>

                    
                    <div className='grid grid-cols-3 mt-6 gap-4 mx-28'>
                        <CompanyCard CompanyName={"PT Ford Jakarta"} Image={"asd"} CompanyLocation={"Jakarta"} VacancyCount={10}/>
                        <CompanyCard CompanyName={"PT Ford Jakarta"} Image={"asd"} CompanyLocation={"Jakarta"} VacancyCount={10}/>
                        <CompanyCard CompanyName={"PT Ford Jakarta"} Image={"asd"} CompanyLocation={"Jakarta"} VacancyCount={10}/>
                        <CompanyCard CompanyName={"PT Ford Jakarta"} Image={"asd"} CompanyLocation={"Jakarta"} VacancyCount={10}/>
                        <CompanyCard CompanyName={"PT Ford Jakarta"} Image={"asd"} CompanyLocation={"Jakarta"} VacancyCount={10}/>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
