import LayoutHeader from '../../layout/LayoutHeader'
import LayoutFooter from '../../layout/LayoutFooter'
// import Header from "../../components/Header";
import slider_img from '../../assests/Slider/frame1.png';
import animation1 from '../../assests/Service/Animation1.png';
import animation2 from '../../assests/Service/Animation2.png';
import animation3 from '../../assests/Service/Animation3.png';

import play from '../../assests/About/Play_button.png';
import imgAbout from '../../assests/About/imgAbout.png';
import { ServiveBoxMain, ImgBox, Heading, Paragraph } from './HomeStyled'
import Proteams from "../../components/Proteams";

import contact_img from '../../assests/Contact/Contact_Animations.png';
import './Home.css';
// import Footer from "../../components/Footer";

import bg_slider from '../../assests/Slider/bg_slide.png'

import bg_about from '../../assests/About/bg_about.png'
import bg_contact from '../../assests/Contact/bg_contact.png'

// import LayoutLanding1 from '../../components/LayoutLanding1/LayoutLanding1';




function Home() {
    return (
        <>
            {/* <LayoutLanding1> */}
            <div className="bg-no-repeat" style={{ backgroundImage: `url(${bg_slider})` }}>
                    <LayoutHeader></LayoutHeader>
                    <div className=''>
                        <div className='max-w-[1188px] mx-auto flex justify-between pl-[24px] pr-[24px] pt-[205px]
                            max-xxl:m-0 max-xxl:m-auto  max-xxl:gap-[30px]
                           
                            max-lg:ml-0
                            max-lg:flex-col max-lg:items-center
                            max-lg:pl-[24px]
                            
                        '>
                            <div className='max-w-[474px] max-lg:text-center ml-[39px]   max-lg:ml-0'>
                                <h1 className="font-semibold text-[#091156] text-[48px] leading-[60px] -tracking-[0.2px]
                            max-md:text-[45px] max-ssm:text-[40px] max-sssm:text-[33px] 
                            ">
                                    Clinic & beauty consultant
                                </h1>


                                <p className='text-[16px] font-medium leading-[24px] tracking-[1.65px] text-[#091156]  pl-px pt-2
                            max-ssm:text-[14px] max-sssm:text-[12px]
                            '>
                                    It is a long established fact that a reader will be by the readable content of a page.
                                </p>

                                <div className='pt-[34px]'>
                                    <button className='w-[200px] h-[58.36px] rounded-[50px] bg-[#FF64AE] border-0 text-[16px] text-white tracking-[1.6px] font-semibold pl-[10px] pb-[2px] font-poppins pl-[2px]
                                max-ssm:w-[150px] max-ssm:h-[45px] max-ssm:text-[14px]
                                max-sssm:w-[130px] max-sssm:h-[40px] max-sssm:text-[12px]

            '>More Details</button>
                                </div>
                            </div>

                            <div className='-mt-[56px] max-lg:pt-[60px]'>
                                <img className='' src={slider_img} alt='Logo' />
                            </div>
                        </div>

                        <div className='flex justify-center items-center pt-[136px]'>
                            <div className="w-[14.82px] h-[3.09px] bg-[#EEEEEE] rounded-[50px] mr-[5px]"></div>
                            <div className="w-[25.31px] h-[8.15px] bg-[#414880] rounded-[50px]"></div>
                            <div className="w-[14.82px] h-[3.09px] bg-[#EEEEEE] rounded-[50px] ml-[5px]"></div>
                        </div>
                    </div>

            

            </div>
            <div className='max-w-[1188px] font-poppins mx-auto pl-[24px] pr-[24px]'>
                <div className='text-center pt-[131px] max-w-[850px] m-0 m-auto'>
                    <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae] max-md:text-[14px] '>Main Services</h4>
                    <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] max-w-[450px] m-0 m-auto pt-[12px]
                    max-md:text-[40px] max-sm:text-[37px] max-ssm:text-[33px]
                    '>Learn services to focus on your beauty</h1>
                    <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] pt-[18px]
                    max-md:text-[14px] max-md:text-[12px]
                    '>Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                </div>

                <div className='flex flex-wrap justify-between max-w-[1140px] m-0 m-auto pt-[86px]
                max-xl:justify-center
                '>
                    <ServiveBoxMain className='hover:shadow-custom-hover'>
                        <ImgBox src={animation1} alt='Beauty consultation' />
                        <Heading>Beauty consultation</Heading>
                        <Paragraph>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</Paragraph>
                    </ServiveBoxMain>

                    <ServiveBoxMain className='hover:shadow-custom-hover'>
                        <ImgBox src={animation2} alt='Beauty consultation' />
                        <Heading>Skin treatments</Heading>
                        <Paragraph>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</Paragraph>
                    </ServiveBoxMain>

                    <ServiveBoxMain className='hover:shadow-custom-hover'>
                        <ImgBox src={animation3} alt='Beauty consultation' />
                        <Heading>Beauty product</Heading>
                        <Paragraph>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</Paragraph>
                    </ServiveBoxMain>
                </div>
            </div>

            <div className="bg-no-repeat bg-right"
                style={{ backgroundImage: `url(${bg_about})` }}>
                <div className='max-w-[1188px] mx-auto font-poppins flex justify-between pl-[24px] pr-[24px] pt-[135px]
                  max-xl:flex-col max-xl:items-center
                '
                >
                    <div className='max-xl:text-center'>
                        <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae]
                    max-md:text-[14px] max-sm:text-[14px]
                    '>About Us</h4>
                        <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] pt-[11px] -tracking-[0.1px] whitespace-nowrap
                    max-md:text-[33px] max-md:whitespace-normal max-sm:text-[30px]
                    '>We are the best beauty clinic</h1>
                        <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] max-w-[480px] pt-[19px]
                    max-xl:max-w-none max-ssm:text-[14px]
                    '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</p>
                        <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] max-w-[480px] pt-[25px]
                    max-xl:max-w-none max-ssm:text-[14px]
                    '>Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</p>
                        <div className='flex pt-[53px] max-xl:justify-center max-md:block'>
                            <div className='about-btn-learnmore'>
                                <button className='w-[200px] h-[57px] rounded-[50px] bg-[#FF64AE] border-0 text-[16px] text-[#ffffff] tracking-[1.7px] font-medium font-poppins 
                             max-ssm:w-[150px] max-ssm:h-[45px] max-ssm:text-[14px]
                             max-sssm:w-[130px] max-sssm:h-[40px] max-sssm:text-[12px]
                             max-sm:text-[12px]
                            '>Learn More</button>
                            </div>
                            <div className='flex pl-[40px] max-md:justify-center max-md:pl-0 max-md:pt-[20px] '>
                                <img className='' src={play} alt='abc'></img>
                                <p className='text-[16px] font-semibold leading-[24px] text-[#8b8b8b] tracking-[1.6px] whitespace-nowrap pl-[10px] pt-[16px]
                            max-md:whitespace-normal max-sm:text-[12px] '>Watch Video</p>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <img className='w-full' src={imgAbout} alt='abc'></img>
                    </div>
                </div>
            </div>

            <Proteams />


            <div className="bg-no-repeat"
                style={{ backgroundImage: `url(${bg_contact})` }}>
                <div className="max-w-[1188px] font-poppins flex justify-between pl-[24px] pr-[24px] mx-auto pt-[145px]
                  max-lg:flex-col max-lg:items-center
                ">
                    <div className='pt-[158px] max-xl:pt-[20px]'>
                        <img src={contact_img} alt='abc'></img>
                    </div>


                    <div className='max-w-[520px]
                    max-lg:max-w-none max-lg:text-center
                    '>
                        <h5 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae]'>Contact Us</h5>
                        <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] -tracking-[0.3px] w-[71%] pt-[12px] max-xl:w-full'>Send your inquiry to our expert team</h1>
                        <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] pt-[19px]'>Lorem ipsum dolor sit amet nulla turapis tellus.</p>

                        <form className='pt-[47px]'>
                            <div className='flex justify-between'>
                                <input className='w-[46.4%] h-[60px] rounded-[15px] border border-solid border-[#D9DDFE] pl-[23px]' type="text" placeholder="First name"></input>
                                <input className='w-[46.4%] h-[60px] rounded-[15px] border border-solid border-[#D9DDFE] pl-[23px]' type="text" placeholder="Last name"></input>
                            </div>

                            <div className='pt-[40px]'>
                                <input className='w-[100%] h-[60px] rounded-[15px] border border-solid border-[#D9DDFE] pl-[23px]' type="email" placeholder='Email address'></input>
                            </div>

                            <div className='pt-[39px]'>
                                <input className='w-[100%] h-[62px] rounded-[15px] border border-solid border-[#D9DDFE] pl-[23px]' type="text" placeholder='Subject message'></input>
                            </div>

                            <div className='pt-[38px]'>
                                <textarea className="w-[100%] h-[239px] rounded-[15px] border border-solid border-[#D9DDFE] pl-[23px] pt-[26px]" type="text" placeholder="Your inquiry here"></textarea>
                            </div>
                        </form>

                        <div className='pt-[49px]'>
                            <button className='w-[48%] h-[58px] bg-[#ff64ae] text-[#ffffff] text-[16px] font-semibold leading-[24px] tracking-[1.8px] text-center rounded-full border-none pb-[3px] font-poppins max-ssm:text-[12px]'>Send Message</button>
                        </div>
                    </div>
                </div>
               
            </div>

            {/* </LayoutLanding1> */}


            {/* <Footer /> */}
            <LayoutFooter></LayoutFooter>

        </>
    )
}

export default Home;