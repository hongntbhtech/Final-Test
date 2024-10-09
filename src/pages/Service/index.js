// import Header from "../../components/Header";
import img_service1 from "../../assests/Service/unsplash_5TJ0Hoy5FLY.png"
import img_service2 from "../../assests/Service/unsplash_ZOT2Mewzmh8.png"
import img_service3 from "../../assests/Service/unsplash_gzfIO69Q6eM.png"
import img_service4 from "../../assests/Service/unsplash_pTrhfmj2jDA.png"

import img_service5 from "../../assests/Service/Animation1_1.png"
import img_service6 from "../../assests/Service/Animation2_2.png"
import img_service7 from "../../assests/Service/Animation3_3.png"

import bg_service1 from "../../assests/Service/unsplash_NPjNtTExSJ4.png"

import play_button from "../../assests/Slider/play_button.png"

// import Footer from "../../components/Footer";

// import LayoutHeader from '../../layout/LayoutHeader'
// import LayoutFooter from '../../layout/LayoutFooter'
import React, { useState } from 'react';
import LayoutLanding1 from "../../components/LayoutLanding1/LayoutLanding1"

const faqs = [
    {
        id: 1,
        question: "Can I be beautiful in an instant time?",
        answer: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
            "Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla"
        ]
    },
    {
        id: 2,
        question: "Can I be beautiful in an instant time?",
        answer: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
            "Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla"
        ]
    },
    {
        id: 3,
        question: "Are there any side effects to the treatment methods or treatments at this clinic?",
        answer: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
            "Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla"
        ]
    },
    {
        id: 4,
        question: "Do professionals have accreditation in their respective fields?",
        answer: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
            "Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla"
        ]
    }
];

function Service() {
   
    const [activeIndex, setActiveIndex] = useState(null); // Theo dõi câu hỏi đang mở

    const toggleHandler = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Mở/đóng câu hỏi
    };
    return (
        <>

        <LayoutLanding1>
            <div className="max-xl:pl-[15px] max-xl:pr-[15px]">
                <div className="max-w-screen-2xl font-poppins mx-auto">
                    {/* <Header/> */}
                    {/* <LayoutHeader></LayoutHeader> */}
                </div>
                <div className="max-w-[1188px] mx-auto pt-[118px] pl-[24px] pr-[24px]
                ">
                    <div className="text-center">
                        <h4 className="font-semibold text-[16px] text-[#FF64AE] leading-[20px] max-md:text-[14px]">Our Services</h4>
                        <h1 className="font-semibold text-[36px] text-[#091156] leading-[45px] pt-[11px] -tracking-[0.1px]  max-md:text-[33px]">We focus on your beauty</h1>
                        <p className="font-normal text-[16px] text-[#8B8B8B] leading-[24px] tracking-[1.6px] pt-[24px]  max-md:text-[14px]">Lorem ipsum dolor sit amet</p>
                    </div>

                    <div className="flex flex-wrap justify-between pt-[74px] m-0 m-auto max-w-[1100px]
                     max-xl:justify-center
                     max-xl:gap-[30px]
                     
                     
                    ">
                        <img className="max-xl:object-cover max-xl:w-full max-xl:max-w-[40%] max-xl:h-auto" src={img_service1} alt="abc"></img>
                        <img className="max-xl:object-cover  max-xl:w-full max-xl:max-w-[40%] max-xl:h-auto max-xl:rounded-[40px] max-md:rounded-[15px] max-ssm:rounded-[10px]" src={img_service2} alt="abc"></img>
                    </div>

                    <div className="flex flex-wrap justify-between pt-[69px] m-0 m-auto max-w-[1100px]
                     max-xl:justify-center
                     max-xl:gap-[30px]
                     
                    ">
                        <img className="max-xl:object-cover max-xl:w-full max-xl:max-w-[40%] h-auto max-xl:rounded-[40px] max-md:rounded-[15px] max-ssm:rounded-[10px]" src={img_service3} alt="abc"></img>
                        <img className="max-xl:object-cover max-xl:w-full max-xl:max-w-[40%] max-xl:h-auto" src={img_service4} alt="abc"></img>
                    </div>
                </div>

                <div className='flex mx-auto max-w-[1185px] justify-between pt-[141px] pl-[24px] pr-[24px]
                max-lg:flex-col max-lg:items-center
                '>
                    <div className="">
                        <img className="" src={img_service5} alt="abc"></img>
                    </div>

                    <div className='max-w-[475px] pt-[29px]
                     max-lg:w-full max-lg:text-center max-lg:pt-[30px]
                    '>
                        <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae] -tracking-[0.1px]'>Beauty Consultation</h4>
                        <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] pt-[13px] -tracking-[0.3px] '>We services beauty consultation</h1>
                        <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] max-w-[480px] pt-[12px] max-lg:max-w-none'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.</p>
                        <div className="flex">
                            <p className="text-[16px] font-semibold leading-[24px] tracking-[1.5px] text-[#091156] max-w-[480px] pt-[25px] max-lg:max-w-none"> Make an Appointment</p>
                            <span className="text-[30px] text-[#FF64AE] pl-[10px] pt-[13px] font-semibold -tracking-[4px]">{'>>'}</span>
                        </div>

                    </div>
                </div>

                <div className='flex mx-auto max-w-[1185px] justify-between pt-[91px] pl-[24px] pr-[24px]
                max-lg:flex-col max-lg:items-center
                '>
                    <div className='max-w-[475px] pt-[29px]
                     max-lg:w-full max-lg:text-center max-lg:pt-[30px]
                    '>
                        <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae] -tracking-[0.1px]'>Skin Treatements</h4>
                        <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] pt-[13px] -tracking-[0.3px] max-w-[411px] '>Skin care and treatment by expert</h1>
                        <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] max-w-[480px] pt-[12px] max-lg:max-w-none'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.</p>
                        <div className="flex">
                            <p className="text-[16px] font-semibold leading-[24px] tracking-[1.5px] text-[#091156] max-w-[480px] pt-[25px] max-lg:max-w-none"> Make an Appointment</p>
                            <span className="text-[30px] text-[#FF64AE] pl-[10px] pt-[13px] font-semibold -tracking-[4px]">{'>>'}</span>
                        </div>

                    </div>

                    <div className="">
                        <img className="" src={img_service6} alt="abc"></img>
                    </div>
                </div>

                <div className='flex mx-auto max-w-[1185px] justify-between pt-[91px] pl-[24px] pr-[24px] pb-[130px]
                max-lg:flex-col max-lg:items-center
                '>
                    <div className="">
                        <img className="" src={img_service7} alt="abc"></img>
                    </div>

                    <div className='max-w-[475px] pt-[29px]
                     max-lg:w-full max-lg:text-center max-lg:pt-[30px]
                    '>
                        <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae] -tracking-[0.1px]'>Beauty Product</h4>
                        <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] pt-[13px] -tracking-[0.3px] '>We present quality beauty products</h1>
                        <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] max-w-[480px] pt-[12px] max-lg:max-w-none'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.</p>
                        <div className="flex">
                            <p className="text-[16px] font-semibold leading-[24px] tracking-[1.5px] text-[#091156] max-w-[480px] pt-[25px] max-lg:max-w-none"> Make an Appointment</p>
                            <span className="text-[30px] text-[#FF64AE] pl-[10px] pt-[13px] font-semibold -tracking-[4px]">{'>>'}</span>
                        </div>

                    </div>
                </div>

                <div className='h-[529px] bg-no-repeat 2xl:bg-cover' style={{ backgroundImage: `url(${bg_service1})` }}>
                    <div className="max-w-[1188px] mx-auto flex justify-between pt-[183px] pl-[24px] pr-[24px]
                     max-lg:flex-col max-lg:items-center
                     max-lg:pt-[20px]
                    ">
                        <div className="max-w-[732px] max-lg:text-center
                        ">
                            <h1 className="font-semibold text-[36px] leading-[45px] text-[#ffffff] max-w-[570px] -tracking-[0.3px]  max-md:text-[33px] max-lg:max-w-none">Best responsibility and service for our customers</h1>
                            <p className="font-normal text-[16px] leading-[24px] text-[#CACACA] tracking-[1.6px] max-w-[570px] pt-[18px]  max-md:text-[14px] max-lg:max-w-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                        </div>

                        <div className="flex max-w-[500px] pr-[58px] justify-between
                        max-lg:flex-col max-lg:items-center max-lg:pr-0
                        ">
                            <img className="max-lg:w-[60%]" src={play_button} alt="abc"></img>
                            <p className="ml-[9px] font-semibold text-[16px] leading-[24px] tracking-[1.6px] text-[#ffffff] pt-[66px]
                            max-lg:pt-[4px]
                            ">Treatments Videos</p>
                        </div>
                    </div>
                </div>

                <div className="min-h-[815px] max-w-[1020px] mx-auto pt-[117px] pb-[31px] pl-[24px] pr-[24px]
            
                ">
                    <div className="text-center items-center">
                        <div className="pb-[15px]">
                            <h1 className="font-semibold text-[36px] leading-[45px] text-[#091156] max-w-[640px] mx-auto pl-[13px] -tracking-[0.3px] max-lg:pl-0">Services FAQ’s</h1>
                        </div>
                        <div className="w-[40px] h-[5px] bg-[#FF64AE] rounded-[5px] m-0 m-auto "></div>
                    </div>

                    <div className="min-h-[700px]">
                    {faqs.map(({ id, question, answer }) => (
                        <div key={id}>
                            <div className="pt-[68px] flex justify-between max-w-[972px] pb-[12px]">
                                <div className="font-semibold text-[16px] leading-[24px] tracking-[1.5px] text-[#091156] pl-[34px] max-lg:pl-0">
                                    {question}
                                </div>
                                <span onClick={() => toggleHandler(id)} className="text-[18px] text-[#091156] pl-[10px] pt-[0px] font-semibold pr-[25px]">
                                    {activeIndex === id ? 'v' : '^'}
                                </span>
                            </div>
                            {activeIndex === id && (
                                <>
                                    <div className="w-[100%] h-[1px] bg-[#091156] my-2"></div>
                                    <div className="max-w-[821px] mx-auto pt-[52px]">
                                        {answer.map((text, index) => (
                                            <p key={index} className="font-normal italic text-[14px] leading-[21px] tracking-[1.45px] text-[#8B8B8B] pt-[21px]">
                                                {text}
                                            </p>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                    </div>


                </div>


            </div>

            {/* <Footer/> */}
            {/* <div className="-mt [98px]">
                <LayoutFooter ></LayoutFooter>
            </div> */}

            </LayoutLanding1>
        </>
    )
}

export default Service;