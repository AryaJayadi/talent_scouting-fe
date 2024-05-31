import React from 'react'
import Layout from './layout/Layout';
import Temp from '../assets/logo_header.png'
import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

function JobDetailPage() {
    return (
        <Layout>
            <div className='mt-6 py-10 mx-[20vw]'>
                <div className='flex'>
                    <div className='w-1/2 flex justify-center'><img src={Temp} className='h-full transition hover:scale-110'/></div>
                    <div className='w-1/2'>
                        <div>
                            <div className='text-[red] font-medium'>00:00:00 Left</div>
                            <div className='font-bold text-[32px]'>Software Engineer</div>
                            <div className='font-bold text-[24px]'>PT Ford Jakarta</div>
                        </div>

                        <div className='mt-2 font-medium'>
                            <div>Jakarta Barat</div>
                            <div>Full Time</div>
                            <div>Rp 5.000.000 - Rp 10.000.000</div>
                        </div>

                        <div className='flex mt-4'>
                            <Button className='mr-4 transition hover:scale-105'>Apply Now</Button>
                            <Button className='transition hover:scale-105'>View Company</Button>
                        </div>
                    </div>
                </div>

                <div className='mt-6'>
                    <div>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque debitis, optio repellat minus itaque recusandae veniam distinctio a praesentium similique! Dolorum distinctio ea quibusdam magni pariatur eos corporis numquam veritatis. 
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque debitis, optio repellat minus itaque recusandae veniam distinctio a praesentium similique! Dolorum distinctio ea quibusdam magni pariatur eos corporis numquam veritatis. 
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque debitis, optio repellat minus itaque recusandae veniam distinctio a praesentium similique! Dolorum distinctio ea quibusdam magni pariatur eos corporis numquam veritatis. 
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque debitis, optio repellat minus itaque recusandae veniam distinctio a praesentium similique! Dolorum distinctio ea quibusdam magni pariatur eos corporis numquam veritatis.
                    </div>
                </div>

                <div className='mt-6'>
                    <div className='text-[20px] font-medium mb-2'>Responsibilities</div>

                    <ul>
                        <li>Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet</li>
                        <li>Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet</li>
                        <li>Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet</li>
                        <li>Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet</li>
                        <li>Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet</li>
                    </ul>
                </div>

                <div className='mt-6'>
                    <div className='text-[20px] font-medium mb-2'>Requirement</div>

                    <div>
                        <Accordion type="single" collapsible className='text-lg'>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>HTML</AccordionTrigger>
                                <AccordionContent className='text-md'>
                                    Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger>CSS</AccordionTrigger>
                                <AccordionContent className='text-md'>
                                    Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet
                                </AccordionContent>
                            </AccordionItem>


                            <AccordionItem value="item-3">
                                <AccordionTrigger>Javascript</AccordionTrigger>
                                <AccordionContent className='text-md'>
                                    Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet
                                </AccordionContent>
                            </AccordionItem>



                        </Accordion>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default JobDetailPage
