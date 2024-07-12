
import React from 'react'
import Layout from './layout/Layout'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from '@/components/ui/button'

function NewVacancyPage() {
  return (
    <Layout>
        <div className='mx-[70px] pb-10'>
            <div className='text-[32px] mt-4 text-center font-semibold'>New Vacancy</div>
            
            <div className='flex flex-col items-center'>
                <div className='mx-[70px] max-w-[700px] w-full '>
                    <div className='mb-4'>
                        <label>Job Position</label>
                        <Input className='mt-2 border-black' placeholder='Job Position'/>
                    </div>

                    <div className='mb-4'>
                        <label>Job Description</label>
                        <Textarea className='mt-2 border-black' placeholder='Job Position'/>
                    </div>
                    
                    <div className='mb-4'>
                        <label>Job Position</label>
                        <Input className='mt-2 border-black' placeholder='Job Position'/>
                    </div>

                    <div className='flex items-center justify-between'>
                        <div className='mb-4'>
                            <label>Job Position</label>
                            <Input className='mt-2 border-black w-full' placeholder='Job Position'/>
                        </div>

                        <div className='text-[32px]'>-</div>

                        <div className='mb-4'>
                            <label>Job Position</label>
                            <Input className='mt-2 border-black w-full' placeholder='Job Position'/>
                        </div>

                    </div>
                    <div className='mb-4'>
                        <label>Job Position</label>
                        <Select>
                            <SelectTrigger className='border-black'>
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className='mb-4'>
                        <label>Job Position</label>
                        <Select>
                            <SelectTrigger className='border-black'>
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className='mb-6'>
                        <label>Job Position</label>
                        <Input className='mt-2 border-black' placeholder='Job Position'/>
                    </div>



                    <div className='mb-4'>
                        <label className='mb-2'>Job Position</label>

                        <div className='text-[red]'>
                            <div className='font-semibold'>Example</div>
                            <div className='mb-2'>Skill title: Java Programming</div>
                            <div className='mb-4'>
                                Description: Proficient in Java programming with a strong understanding of object-oriented principles, data structures, and algorithms. Capable of developing robust, scalable, and maintainable code for various applications. Familiar with the latest Java versions and features.
                            </div>
                        </div>

                        <Input className='mt-2 border-black' placeholder='Job Position'/>

                        <Textarea className='mt-4 border-black' placeholder='Description'></Textarea>
                    </div>

                    <div className='flex justify-center'>
                        <Button>Publish</Button>
                    </div>
                </div>
            </div>
            
        </div>
    </Layout>
  )
}

export default NewVacancyPage