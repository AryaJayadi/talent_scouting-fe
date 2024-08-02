import React from 'react'
import Layout from './layout/Layout';
import Image from '../assets/logo_binus.png';
import JobRecommendationCard from './component/JobRecommendationCard'
import CVTemplate from './component/CVTemplate'

function StudentProfilePage() {
    return (
        <Layout>
            <div className='mx-[20vw] pt-10 flex justify-center pb-20'>
                <div>
                    <div className='flex items-center justify-center'>
                        <div className='border-[1px] rounded-[50%] w-[200px] h-[200px]'><img src={Image} className='w-full h-full object-cover object-center rounded-[50%]'/></div>
                        <div className='ml-16'>
                            <div className='text-[3rem] font-semibold'>Rico Gunawan</div>
                            <div className='text-[1.2rem]'>2501961786</div>
                            <div className='text-[1.2rem]'>Computer Science</div>
                            <div className='text-[1.2rem]'>GPA: 3.9</div>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <div className='text-[24px] font-medium mb-8 font-semibold'>Job Recommendation</div>
                        <div className='flex justify-between mt-6 gap-4'>
                            <JobRecommendationCard JobName={"Front End Developer"} Index={1}/>
                            <JobRecommendationCard JobName={"Back End Developer"} Index={2}/>
                            <JobRecommendationCard JobName={"AI Engineer"} Index={3}/>
                            <JobRecommendationCard JobName={"Full Stack Developer"} Index={4}/>
                        </div>
                    </div>

                    <div className='mt-10 w-full flex gap-10'>
                        <div>
                            <div className='text-[24px] font-medium mb-2 font-semibold text-center sticky top-10'>Curriculum Vitae</div>
                            <div className='flex mt-6 w-full gap-10 sticky top-[100px]'>
                                <CVTemplate/>
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className='text-[24px] font-medium mb-4 font-semibold'>Work Experience</div>
                            <div className='mb-4'>
                                <div className='text-[18px] font-semibold mb-2'>Junior Laboratory Assistant</div>
                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt consequatur omnis voluptate exercitationem rem aspernatur facilis corrupti architecto fugiat pariatur nobis molestias, magni neque aut sit sed distinctio minus.</div>
                            </div>
                            <div className='mb-4'>
                                <div className='text-[18px] font-semibold mb-2'>Junior Laboratory Assistant</div>
                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt consequatur omnis voluptate exercitationem rem aspernatur facilis corrupti architecto fugiat pariatur nobis molestias, magni neque aut sit sed distinctio minus.</div>
                            </div>
                            <div className='mb-4'>
                                <div className='text-[18px] font-semibold mb-2'>Junior Laboratory Assistant</div>
                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt consequatur omnis voluptate exercitationem rem aspernatur facilis corrupti architecto fugiat pariatur nobis molestias, magni neque aut sit sed distinctio minus.</div>
                            </div>
                            <div className='mb-4'>
                                <div className='text-[18px] font-semibold mb-2'>Junior Laboratory Assistant</div>
                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt consequatur omnis voluptate exercitationem rem aspernatur facilis corrupti architecto fugiat pariatur nobis molestias, magni neque aut sit sed distinctio minus.</div>
                            </div>
                            <div className='mb-4'>
                                <div className='text-[18px] font-semibold mb-2'>Junior Laboratory Assistant</div>
                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt consequatur omnis voluptate exercitationem rem aspernatur facilis corrupti architecto fugiat pariatur nobis molestias, magni neque aut sit sed distinctio minus.</div>
                            </div>
                            <div className='mb-4'>
                                <div className='text-[18px] font-semibold mb-2'>Junior Laboratory Assistant</div>
                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt consequatur omnis voluptate exercitationem rem aspernatur facilis corrupti architecto fugiat pariatur nobis molestias, magni neque aut sit sed distinctio minus.</div>
                            </div>
                            <div className='mb-4'>
                                <div className='text-[18px] font-semibold mb-2'>Junior Laboratory Assistant</div>
                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt consequatur omnis voluptate exercitationem rem aspernatur facilis corrupti architecto fugiat pariatur nobis molestias, magni neque aut sit sed distinctio minus.</div>
                            </div>
                            <div className='mb-4'>
                                <div className='text-[18px] font-semibold mb-2'>Junior Laboratory Assistant</div>
                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt consequatur omnis voluptate exercitationem rem aspernatur facilis corrupti architecto fugiat pariatur nobis molestias, magni neque aut sit sed distinctio minus.</div>
                            </div>

                            <div className='mt-10 w-full'>
                                <div className='text-[24px] font-medium mb-4 font-semibold'>Project</div>
                                <div className='mb-4'>
                                    <div className='text-[18px] font-semibold mb-2'>AOL Web Programming (Ketring Website)</div>
                                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt consequatur omnis voluptate exercitationem rem aspernatur facilis corrupti architecto fugiat pariatur nobis molestias, magni neque aut sit sed distinctio minus.</div>
                                </div>
                                <div className='mb-4'>
                                    <div className='text-[18px] font-semibold mb-2'>AOL Web Programming (Ketring Website)</div>
                                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt consequatur omnis voluptate exercitationem rem aspernatur facilis corrupti architecto fugiat pariatur nobis molestias, magni neque aut sit sed distinctio minus.</div>
                                </div>
                                <div className='mb-4'>
                                    <div className='text-[18px] font-semibold mb-2'>AOL Web Programming (Ketring Website)</div>
                                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt consequatur omnis voluptate exercitationem rem aspernatur facilis corrupti architecto fugiat pariatur nobis molestias, magni neque aut sit sed distinctio minus.</div>
                                </div>
                                <div className='mb-4'>
                                    <div className='text-[18px] font-semibold mb-2'>AOL Web Programming (Ketring Website)</div>
                                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt consequatur omnis voluptate exercitationem rem aspernatur facilis corrupti architecto fugiat pariatur nobis molestias, magni neque aut sit sed distinctio minus.</div>
                                </div>
                                <div className='mb-4'>
                                    <div className='text-[18px] font-semibold mb-2'>AOL Web Programming (Ketring Website)</div>
                                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt consequatur omnis voluptate exercitationem rem aspernatur facilis corrupti architecto fugiat pariatur nobis molestias, magni neque aut sit sed distinctio minus.</div>
                                </div>
                                <div className='mb-4'>
                                    <div className='text-[18px] font-semibold mb-2'>AOL Web Programming (Ketring Website)</div>
                                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt consequatur omnis voluptate exercitationem rem aspernatur facilis corrupti architecto fugiat pariatur nobis molestias, magni neque aut sit sed distinctio minus.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    


                </div>
            </div>
        </Layout>
    )
}

export default StudentProfilePage
