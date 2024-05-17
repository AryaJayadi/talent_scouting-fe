import React from 'react';
import Layout from './layout/Layout';
import { Input } from "@/components/ui/input"
import JobCard from './component/JobCard'

const HomePage: React.FC = () => {
    return (
        <Layout>
            <div className='mx-[20px]'>
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

                <div className='my-[20px]'>
                    <div className='text-[24px] font-medium mb-2'>Explore Job</div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae praesentium, dolore tempore accusantium ea voluptatem exercitationem quae voluptatibus quaerat magnam, blanditiis beatae quia. Et itaque reiciendis voluptatem, alias quasi aperiam.
                    </div>

                    <div className='grid grid-cols-5 mt-6 gap-6'>
                        <JobCard JobName={"Sofware Engineer"} CompanyName={"PT Ford Jakarta"} Image={"asd"}/>
                        <JobCard JobName={"Sofware Engineer"} CompanyName={"PT Ford Jakarta"} Image={"asd"}/>
                        <JobCard JobName={"Sofware Engineer"} CompanyName={"PT Ford Jakarta"} Image={"asd"}/>
                        <JobCard JobName={"Sofware Engineer"} CompanyName={"PT Ford Jakarta"} Image={"asd"}/>
                        <JobCard JobName={"Sofware Engineer"} CompanyName={"PT Ford Jakarta"} Image={"asd"}/>
                    </div>
                </div>

                <div className='my-[20px]'>
                    <div className='text-[24px] font-medium mb-2'>Explore Company</div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae praesentium, dolore tempore accusantium ea voluptatem exercitationem quae voluptatibus quaerat magnam, blanditiis beatae quia. Et itaque reiciendis voluptatem, alias quasi aperiam.
                    </div>

                    
                    <div className='grid grid-cols-5 mt-6 gap-6'>
                        <JobCard JobName={"Sofware Engineer"} CompanyName={"PT Ford Jakarta"} Image={"asd"}/>
                        <JobCard JobName={"Sofware Engineer"} CompanyName={"PT Ford Jakarta"} Image={"asd"}/>
                        <JobCard JobName={"Sofware Engineer"} CompanyName={"PT Ford Jakarta"} Image={"asd"}/>
                        <JobCard JobName={"Sofware Engineer"} CompanyName={"PT Ford Jakarta"} Image={"asd"}/>
                        <JobCard JobName={"Sofware Engineer"} CompanyName={"PT Ford Jakarta"} Image={"asd"}/>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
