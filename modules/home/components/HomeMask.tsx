import { Button } from '@/common/components/elements/Button'
import { InputField } from '@/common/components/elements/InputField'
import React from 'react'

const HomeMask = () => {
    return (
        <>
            <div className='flex relative mb-3 lg:hidden'>
                <img className='absolute w-full h-[200px] lg:h-[300px] object-cover object-right' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704256593/kris-store/yyt9xxump5e4kwxr8huj.png" alt="" />
                <div className='absolute w-full h-[200px] lg:h-[300px] z-10 bg-gradient-to-r from-blue-700 to-yellow-100 opacity-80' />
                <div className='w-full h-[200px] lg:h-[300px] z-40'>
                    <span className='absolute top-6 left-8 text-xl text-white h-[200px] lg:h-[300px]'>An easy way to send</span>
                    <span className='absolute top-12 left-8 text-xl font-semibold text-white'>requests to all suppliers</span>
                    <div className='absolute top-24 left-8'>
                        <Button
                            className='max-w-full h-10 bg-blue-600 px-2 rounded-lg text-white'
                        >
                            Send inquiry
                        </Button>
                    </div>
                </div>
            </div>
            <div className='lg:flex mb-3 hidden'>
                <div className="flex w-full h-96 bg-gradient-to-r from-blue-700 to-yellow-100 m-auto rounded-lg relative">
                    <img className='w-[1200px] h-96 object-cover rounded-lg opacity-15' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704256593/kris-store/yyt9xxump5e4kwxr8huj.png" alt="" />
                    <div className="flex flex-wrap p-10 absolute">
                        <div className="flex flex-col h-full w-96">
                            <span className='text-white font-semibold text-3xl mb-3'>An easy way to send requests to all suppliers</span>
                            <span className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</span>
                        </div>
                    </div>
                    <div className="flex absolute h-[300px] w-[500px] bg-white border rounded-lg right-10 top-10">
                        <div className="flex flex-col p-5 w-full gap-2">
                            <span className='font-semibold'>Send quote to suppliers</span>
                            <InputField
                                placeholder='What item do you need?'
                                className='w-full border rounded-lg'
                                type='text'
                                name=''
                                id=''
                            />
                            <textarea className='w-full h-20 border rounded-lg p-2' placeholder='Type more details' />
                            <div className="flex gap-2">
                                <input className='w-full border rounded-lg p-2' type="text" name="" id="" placeholder='Quantity' />
                                <select className='w-full border rounded-lg p-2'>
                                    <option value="1">Pcs</option>
                                </select>
                            </div>
                            <Button className='w-40 h-10 bg-blue-600 px-2 rounded-lg text-white'>Send inquiry</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeMask