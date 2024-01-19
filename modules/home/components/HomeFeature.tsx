import { Button } from '@/common/components/elements/Button'
import React from 'react'

const HomeFeature = () => {
    return (
        <>
            <div className='lg:hidden'>
                <div className='bg-white mb-3'>
                    <div className="p-3 flex justify-items-center">
                        <span className='font-semibold'>Home and outdoor</span>
                    </div>
                    <div className='relative overflow-x-auto'>
                        <div className="flex">
                            <div className="flex shrink-0 h-56 w-44 border relative">
                                <div className="gap-2 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <img className='w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704252318/kris-store/ipgpubzf62fl7uagkuzt.jpg" alt="" />
                                    <span className='text-center'>Clothes</span>
                                    <span className='text-center font-normal text-sm text-slate-500'>Form USD 19</span>
                                </div>
                            </div>
                            <div className="flex shrink-0 h-56 w-44 border relative">
                                <div className="gap-2 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <img className='w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704252486/kris-store/s2ik2gdqjvgxid3wlhyx.png" alt="" />
                                    <span className='text-center'>Clothes</span>
                                    <span className='text-center font-normal text-sm text-slate-500'>Form USD 19</span>
                                </div>
                            </div>
                            <div className="flex shrink-0 h-56 w-44 border relative">
                                <div className="gap-2 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <img className='w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704252372/kris-store/vi6fecnlexutmwxtfsoy.png" alt="" />
                                    <span className='text-center'>Clothes</span>
                                    <span className='text-center font-normal text-sm text-slate-500'>Form USD 19</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 flex justify-items-center gap-3 border">
                        <span className='font-semibold text-blue-600'>Source now</span>
                        <img src="/assets/icons/arrow_forward.svg" alt="" style={{ fill: 'blue' }} />
                    </div>
                </div>
                <div className='bg-white mb-3'>
                    <div className="p-3 flex justify-items-center">
                        <span className='font-semibold'>Consumer electronics</span>
                    </div>
                    <div className='relative overflow-x-auto'>
                        <div className="flex">
                            <div className="flex shrink-0 h-56 w-44 border relative">
                                <div className="gap-2 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <img className='w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704256590/kris-store/msftp0eeck4oablglala.png" alt="" />
                                    <span className='text-center'>Clothes</span>
                                    <span className='text-center font-normal text-sm text-slate-500'>Form USD 19</span>
                                </div>
                            </div>
                            <div className="flex shrink-0 h-56 w-44 border relative">
                                <div className="gap-2 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <img className='w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704256589/kris-store/sxev2grn5nyhtnqqaucp.png" alt="" />
                                    <span className='text-center'>Clothes</span>
                                    <span className='text-center font-normal text-sm text-slate-500'>Form USD 19</span>
                                </div>
                            </div>
                            <div className="flex shrink-0 h-56 w-44 border relative">
                                <div className="gap-2 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <img className='w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704256590/kris-store/kyfbnsl6sch5ophxz445.png" alt="" />
                                    <span className='text-center'>Clothes</span>
                                    <span className='text-center font-normal text-sm text-slate-500'>Form USD 19</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 flex justify-items-center gap-3 border">
                        <span className='font-semibold text-blue-600'>Source now</span>
                        <img src="/assets/icons/arrow_forward.svg" alt="" style={{ fill: 'blue' }} />
                    </div>
                </div>
            </div>
            <div className="hidden lg:block">
                <div className='flex mb-5'>
                    <div className="bg-white w-full h-80 border flex rounded-lg">
                        <div className="w-80 h-80 border relative bg-yellow-200 shrink-0">
                            <img className='object-cover w-80 h-80 m-auto opacity-70' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704851092/kris-store/ruuufqm9fnnivdinhi4w.jpg" alt="" />
                            <div className="flex flex-col top-0 gap-5 p-7 absolute">
                                <span className='text-xl w-32 h-full flex flex-wrap font-semibold'>Home and outdoor</span>
                                <Button className='bg-white rounded-lg max-w-full h-10 px-2'>Source now</Button>
                            </div>
                        </div>
                        <div className="flex flex-wrap overflow-x-auto relative">
                            <div className="flex">
                                <div className="flex h-[159px] w-[280px] border shrink-0 relative">
                                    <div className="flex flex-col p-3 absolute">
                                        <span className='font-semibold'>Soft chairs</span>
                                        <span className='text-sm text-slate-500'>Form</span>
                                        <span className='text-sm text-slate-500'>USD 19</span>
                                    </div>
                                    <div className="flex flex-col absolute">
                                        <div className='w-24 h-24 absolute top-12 left-44'>
                                            <img className='object-contain w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704252486/kris-store/s2ik2gdqjvgxid3wlhyx.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex h-[159px] w-[280px] border shrink-0 relative">
                                    <div className="flex flex-col p-3 absolute">
                                        <span className='font-semibold'>Sofa & chairs</span>
                                        <span className='text-sm text-slate-500'>Form</span>
                                        <span className='text-sm text-slate-500'>USD 19</span>
                                    </div>
                                    <div className="flex flex-col absolute">
                                        <div className='w-24 h-24 absolute top-12 left-44'>
                                            <img className='object-contain w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704853632/kris-store/pnpaqh62ytr9fu4wrb2k.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex h-[159px] w-[280px] border shrink-0 relative">
                                    <div className="flex flex-col p-3 absolute">
                                        <span className='font-semibold'>Kitchen dishes</span>
                                        <span className='text-sm text-slate-500'>Form</span>
                                        <span className='text-sm text-slate-500'>USD 19</span>
                                    </div>
                                    <div className="flex flex-col absolute">
                                        <div className='w-24 h-24 absolute top-12 left-44'>
                                            <img className='object-contain w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704853776/kris-store/vb1mgca2m44bnoxunzb1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex h-[159px] w-[280px] border shrink-0 relative">
                                    <div className="flex flex-col p-3 absolute">
                                        <span className='font-semibold'>Smart watches</span>
                                        <span className='text-sm text-slate-500'>Form</span>
                                        <span className='text-sm text-slate-500'>USD 19</span>
                                    </div>
                                    <div className="flex flex-col absolute">
                                        <div className='w-24 h-24 absolute top-12 left-44'>
                                            <img className='object-contain w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704861304/kris-store/whue5hdbebivo0fpcykm.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex h-[159px] w-[280px] border shrink-0 relative">
                                    <div className="flex flex-col p-3 absolute">
                                        <span className='font-semibold'>Kitchen mixer</span>
                                        <span className='text-sm text-slate-500'>Form</span>
                                        <span className='text-sm text-slate-500'>USD 19</span>
                                    </div>
                                    <div className="flex flex-col absolute">
                                        <div className='w-24 h-24 absolute top-12 left-44'>
                                            <img className='object-contain w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704861812/kris-store/tcpuu8jxvt3ic0qohzqq.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex h-[159px] w-[280px] border shrink-0 relative">
                                    <div className="flex flex-col p-3 absolute">
                                        <span className='font-semibold'>Blenders</span>
                                        <span className='text-sm text-slate-500'>Form</span>
                                        <span className='text-sm text-slate-500'>USD 19</span>
                                    </div>
                                    <div className="flex flex-col absolute">
                                        <div className='w-24 h-24 absolute top-12 left-44'>
                                            <img className='object-contain w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704861812/kris-store/p5gf7fvdalfxqqxpeoo1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex h-[159px] w-[280px] border shrink-0 relative">
                                    <div className="flex flex-col p-3 absolute">
                                        <span className='font-semibold'>Home appliance</span>
                                        <span className='text-sm text-slate-500'>Form</span>
                                        <span className='text-sm text-slate-500'>USD 19</span>
                                    </div>
                                    <div className="flex flex-col absolute">
                                        <div className='w-24 h-24 absolute top-12 left-44'>
                                            <img className='object-cover w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704861812/kris-store/akk8v3kna1glnglzemmk.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex h-[159px] w-[280px] border shrink-0 relative">
                                    <div className="flex flex-col p-3 absolute">
                                        <span className='font-semibold'>Coffee maker</span>
                                        <span className='text-sm text-slate-500'>Form</span>
                                        <span className='text-sm text-slate-500'>USD 19</span>
                                    </div>
                                    <div className="flex flex-col absolute">
                                        <div className='w-24 h-24 absolute top-12 left-44'>
                                            <img className='object-contain w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704861812/kris-store/ncau2u4vg90nhcw5qdwk.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex mb-5'>
                    <div className="bg-white w-full h-80 border flex rounded-lg">
                        <div className="w-80 h-80 border bg-sky-200 shrink-0 relative">
                            <img className='object-cover w-80 h-80 m-auto opacity-70' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704863011/kris-store/ok3cffhip4spth2uew3m.png" alt="" />
                            <div className="flex flex-col top-0 gap-5 p-7 absolute">
                                <span className='text-xl w-32 h-full flex flex-wrap font-semibold'>Consumer electronics and gadgets</span>
                                <Button className='bg-white rounded-lg max-w-full h-10 px-2'>Source now</Button>
                            </div>
                        </div>
                        <div className="flex flex-wrap overflow-x-auto relative">
                            <div className="flex">
                                <div className="flex h-[159px] w-[280px] border shrink-0 relative">
                                    <div className="flex flex-col p-3 absolute">
                                        <span className='font-semibold'>Smart watches</span>
                                        <span className='text-sm text-slate-500'>Form</span>
                                        <span className='text-sm text-slate-500'>USD 19</span>
                                    </div>
                                    <div className="flex flex-col absolute">
                                        <div className='w-24 h-24 absolute top-12 left-44'>
                                            <img className='object-contain w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704419192/kris-store/pjaahaibhrswqzsdwhtc.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex h-[159px] w-[280px] border shrink-0 relative">
                                    <div className="flex flex-col p-3 absolute">
                                        <span className='font-semibold'>Cameras</span>
                                        <span className='text-sm text-slate-500'>Form</span>
                                        <span className='text-sm text-slate-500'>USD 19</span>
                                    </div>
                                    <div className="flex flex-col absolute">
                                        <div className='w-24 h-24 absolute top-12 left-44'>
                                            <img className='object-contain w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704842264/kris-store/b3z1nkvge33h89v9nqvc.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex h-[159px] w-[280px] border shrink-0 relative">
                                    <div className="flex flex-col p-3 absolute">
                                        <span className='font-semibold'>Headphones</span>
                                        <span className='text-sm text-slate-500'>Form</span>
                                        <span className='text-sm text-slate-500'>USD 19</span>
                                    </div>
                                    <div className="flex flex-col absolute">
                                        <div className='w-24 h-24 absolute top-12 left-44'>
                                            <img className='object-contain w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704249540/kris-store/trza0kqss8vegyjrjug0.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex h-[159px] w-[280px] border shrink-0 relative">
                                    <div className="flex flex-col p-3 absolute">
                                        <span className='font-semibold'>Smart watches</span>
                                        <span className='text-sm text-slate-500'>Form</span>
                                        <span className='text-sm text-slate-500'>USD 19</span>
                                    </div>
                                    <div className="flex flex-col absolute">
                                        <div className='w-24 h-24 absolute top-12 left-44'>
                                            <img className='object-contain w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704488182/kris-store/cigdjslok7ysi8dbyntd.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex h-[159px] w-[280px] border shrink-0 relative">
                                    <div className="flex flex-col p-3 absolute">
                                        <span className='font-semibold'>Gaming set</span>
                                        <span className='text-sm text-slate-500'>Form</span>
                                        <span className='text-sm text-slate-500'>USD 19</span>
                                    </div>
                                    <div className="flex flex-col absolute">
                                        <div className='w-24 h-24 absolute top-12 left-44'>
                                            <img className='object-contain w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704489443/kris-store/qyrpkzirehqdjoqzvg0b.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex h-[159px] w-[280px] border shrink-0 relative">
                                    <div className="flex flex-col p-3 absolute">
                                        <span className='font-semibold'>Laptop & PC</span>
                                        <span className='text-sm text-slate-500'>Form</span>
                                        <span className='text-sm text-slate-500'>USD 19</span>
                                    </div>
                                    <div className="flex flex-col absolute">
                                        <div className='w-24 h-24 absolute top-12 left-44'>
                                            <img className='object-contain w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704249657/kris-store/wnrcil5aok479mtzt1lj.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex h-[159px] w-[280px] border shrink-0 relative">
                                    <div className="flex flex-col p-3 absolute">
                                        <span className='font-semibold'>Tablets</span>
                                        <span className='text-sm text-slate-500'>Form</span>
                                        <span className='text-sm text-slate-500'>USD 19</span>
                                    </div>
                                    <div className="flex flex-col absolute">
                                        <div className='w-24 h-24 absolute top-12 left-44'>
                                            <img className='object-cover w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704256589/kris-store/sxev2grn5nyhtnqqaucp.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex h-[159px] w-[280px] border shrink-0 relative">
                                    <div className="flex flex-col p-3 absolute">
                                        <span className='font-semibold'>Smartphones</span>
                                        <span className='text-sm text-slate-500'>Form</span>
                                        <span className='text-sm text-slate-500'>USD 19</span>
                                    </div>
                                    <div className="flex flex-col absolute">
                                        <div className='w-24 h-24 absolute top-12 left-44'>
                                            <img className='object-contain w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704256590/kris-store/pcnu4nuvyhjj5wvfascf.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default HomeFeature