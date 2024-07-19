import React, { useEffect } from 'react';
import Layout from './layout/Layout';
import { Input } from "@/components/ui/input"
import JobCard from './component/JobCard'
import JobRecommendationCard from './component/JobRecommendationCard'
import CompanyCard from './component/CompanyCard';
import 'aos/dist/aos.css';
import AOS from "aos"

const HomePage: React.FC = () => {

    useEffect(() => {
        AOS.init({duration: 500})
    }, []);

    return (
        <Layout>
            <div className='mx-[60px]'>
                <div className='bg-[#120272] p-[24px] mt-[30px] rounded-md' data-aos="fade-up" data-aos-once="true">
                    <div className='text-white text-[32px]'>Welcome Back Rico!!</div>
                    <div className='text-white mt-[10px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae praesentium, dolore tempore accusantium ea voluptatem exercitationem quae voluptatibus quaerat magnam, blanditiis beatae quia. Et itaque reiciendis voluptatem, alias quasi aperiam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae praesentium, dolore tempore accusantium ea voluptatem exercitationem quae voluptatibus quaerat magnam, blanditiis beatae quia. Et itaque reiciendis voluptatem, alias quasi aperiam.
                    </div>
                    <div className='mt-[30px] w-[30%]'>
                        <Input placeholder={'Let\'s find a job for you'}/>
                    </div>
                </div>

                <div className='my-[50px]' data-aos="fade-up" data-aos-once="true">
                    <div className='text-[24px] font-medium mb-2 text-center'>Job Recommendation</div>

                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae praesentium, dolore tempore accusantium ea voluptatem exercitationem quae voluptatibus quaerat magnam, blanditiis beatae quia. Et itaque reiciendis voluptatem, alias quasi aperiam.
                    </div>

                    <div className='flex justify-between mt-6'>
                        <JobRecommendationCard JobName={"Front End Developer"} Index={1}/>
                        <JobRecommendationCard JobName={"Back End Developer"} Index={2}/>
                        <JobRecommendationCard JobName={"AI Engineer"} Index={3}/>
                        <JobRecommendationCard JobName={"Full Stack Developer"} Index={4}/>
                    </div>
                </div>


                <div className='my-[50px]' data-aos="fade-up" data-aos-once="true">
                    <div className='text-[24px] font-medium mb-2 text-center'>Popular Job</div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae praesentium, dolore tempore accusantium ea voluptatem exercitationem quae voluptatibus quaerat magnam, blanditiis beatae quia. Et itaque reiciendis voluptatem, alias quasi aperiam.
                    </div>

                    <div className='grid grid-cols-5 mt-6 gap-10'>
                        <JobCard JobName={"Front End Developer"} CompanyName={"PT Bank Central Asia"} Image={"https://th.bing.com/th/id/R.ff70d9d943a71067cb9e0f061c078fd0?rik=YDbEo%2fzsssVmPA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-HL8IH_ZHKvI%2fUl-kk_7AC_I%2fAAAAAAAAC6M%2fb7BWRYGdn8w%2fs1600%2fBCA-Bank-Logo-blue.png&ehk=7%2fTz85jERnSu1EVuPQi4qCQHtzNt%2bxTv%2fZiS0x4waYM%3d&risl=&pid=ImgRaw&r=0"}/>
                        <JobCard JobName={"Back End Developer"} CompanyName={"PT CTI"} Image={"https://computradetech.com/wp-content/uploads/2021/07/New-Logo-CTI-Group-02.png"}/>
                        <JobCard JobName={"Full Stack Developer"} CompanyName={"PT Unilever"} Image={"https://logodix.com/logo/81176.jpg"}/>
                        <JobCard JobName={"AI Engineer"} CompanyName={"PT NVIDIA"} Image={"https://logodownload.org/wp-content/uploads/2014/09/nvidia-logo-0.png"}/>
                        <JobCard JobName={"Back End Developer"} CompanyName={"PT Ford Jakarta"} Image={"https://img.freepik.com/free-vector/hand-drawn-cactus-logo-template_23-2149398900.jpg?w=2000&t=st=1661990015~exp=1661990615~hmac=466aebeda6573c752489cdbfe5c11ef1cbebf1ff984e8f62018952f83d9639f6"}/>
                    </div>
                </div>

                <div className='my-[70px]' data-aos="fade-up" data-aos-once="true">
                    <div className='text-[24px] font-medium mb-2 text-center'>Top Companies for Software Developers</div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae praesentium, dolore tempore accusantium ea voluptatem exercitationem quae voluptatibus quaerat magnam, blanditiis beatae quia. Et itaque reiciendis voluptatem, alias quasi aperiam.
                    </div>

                    
                    <div className='grid grid-cols-3 mt-6 gap-4 mx-28'>
                        <CompanyCard CompanyName={"PT Binus University"} Image={"https://th.bing.com/th/id/OIP.orlY04-klLAbJn4WU-IqQwHaEK?rs=1&pid=ImgDetMain"} CompanyLocation={"Jakarta"} VacancyCount={10}/>
                        <CompanyCard CompanyName={"PT BCA"} Image={"https://th.bing.com/th/id/R.ff70d9d943a71067cb9e0f061c078fd0?rik=YDbEo%2fzsssVmPA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-HL8IH_ZHKvI%2fUl-kk_7AC_I%2fAAAAAAAAC6M%2fb7BWRYGdn8w%2fs1600%2fBCA-Bank-Logo-blue.png&ehk=7%2fTz85jERnSu1EVuPQi4qCQHtzNt%2bxTv%2fZiS0x4waYM%3d&risl=&pid=ImgRaw&r=0"} CompanyLocation={"Jakarta"} VacancyCount={10}/>
                        <CompanyCard CompanyName={"PT Unilever"} Image={"https://logodix.com/logo/81176.jpg"} CompanyLocation={"Jakarta"} VacancyCount={10}/>
                        <CompanyCard CompanyName={"PT CTI"} Image={"https://computradetech.com/wp-content/uploads/2021/07/New-Logo-CTI-Group-02.png"} CompanyLocation={"Jakarta"} VacancyCount={10}/>
                        <CompanyCard CompanyName={"PT NVIDIA"} Image={"https://logodownload.org/wp-content/uploads/2014/09/nvidia-logo-0.png"} CompanyLocation={"Jakarta"} VacancyCount={10}/>
                        <CompanyCard CompanyName={"PT Blue Cactus"} Image={"https://img.freepik.com/free-vector/hand-drawn-cactus-logo-template_23-2149398900.jpg?w=2000&t=st=1661990015~exp=1661990615~hmac=466aebeda6573c752489cdbfe5c11ef1cbebf1ff984e8f62018952f83d9639f6"} CompanyLocation={"Jakarta"} VacancyCount={10}/>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
