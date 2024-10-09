// import Footer from "../../components/Footer";
import LayoutFooter from '../../layout/LayoutFooter'
import { Link } from 'react-router-dom';
import logo from '../../assests/Header/Logo_Home2.png';
import background from '../../assests/Slider/background_slider.png';


import play_button from '../../assests/Slider/play_button.png';

import img_about from '../../assests/About/Illustration-1.png';

import icon_2 from '../../assests/Service/icon-2.png';
import icon_2_1 from '../../assests/Service/icon-2_1.png';
import icon_2_2 from '../../assests/Service/icon-2_3.png';

import { ServiveBoxMain, ImgBox, Heading, Paragraph, Paragraph1, BlogBoxMain, ImgBoxBlog, HeadingBlog, ParagraphBlog, Button } from './Home2Styled'

import bg_choose from '../../assests/Choose/Background_Choose.png'
import choose1 from '../../assests/Choose/handshake_1.png'
import choose2 from '../../assests/Choose/brotherhood_1.png'
import choose3 from '../../assests/Choose/earth_1.png'
import choose4 from '../../assests/Choose/doctor_1.png'


import img_blog_2 from '../../assests/Blog/unsplash_0_McYfdyEDA.png'
import img_blog from '../../assests/Blog/unsplash_3ewkNkfJj2k.png'
import img_blog_1 from '../../assests/Blog/unsplash_7tDGb3HrITg.png'

import "./Home2.css";
import React, { useState, useEffect, useRef } from 'react';
import { FaAlignJustify, FaTimes } from 'react-icons/fa';

import img_service from '../../assests/Service/Vector.png'



function Home2() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const handleClick = () => setMenuOpen(prevMenuOpen => !prevMenuOpen);

    const handleOutsideClick = (event) => {
        if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
        if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [menuOpen, isOpen]);

    const toggleMenu = (event) => {
        event.stopPropagation(); // Ngăn chặn sự kiện truyền lên các phần tử cha
        setIsOpen(prev => !prev);
    };

    return (
        <>
            <div className=''>

                <div className=' h-[918px] bg-no-repeat 2xl:bg-cover' style={{ backgroundImage: `url(${background})` }}>
                    <header className='max-w-screen-2xl font-poppins mx-auto'>
                        <div className='max-w-[1188px] mx-auto flex pl-[24px] pr-[24px] justify-between pt-[41px]'>
                            <div>
                                <img className='max-lg:w-[100%]' src={logo} alt="abc" />
                            </div>
                            <div ref={menuRef} className={`pt-[17px] absolute max-lg:left-0 max-lg:w-full max-lg:bg-gray-100 max-lg:shadow-lg max-lg:transition-all max-lg:duration-300 ${menuOpen ? 'top-[0px]' : '-top-[600px]'} lg:static`}>
                                <ul onClick={() => setMenuOpen(false)} className='flex gap-[45px] max-lg:flex-col max-lg:w-[100%]'>
                                    <li className='max-lg:w-[100%] max-lg:text-center max-lg:pt-[50px] group relative flex justify-center max-lg:max-h-[300px] max-lg:border-b max-lg:border-gray-300 max-lg:pb-2'>
                                        <button onClick={toggleMenu} className='no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#fff] whitespace-nowrap cursor-pointer max-lg:text-[#8b8b8b]'>
                                            Home +
                                        </button>
                                        <div className={`absolute left-1/2 max-lg:left-2/3 transform -translate-x-1/2 mt-2 w-[150px] bg-white rounded-md shadow-lg transition-opacity duration-300 ${isOpen ? 'block' : 'hidden'} max-lg:z-10`}>
                                            <ul>
                                                <li>
                                                    <Link to='/homemain' className='block px-4 py-2 text-base text-[#8B8B8B] hover:bg-[#FF64AE] hover:text-white rounded-md'>
                                                        Home1
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/home' className='block px-4 py-2 text-base text-[#8B8B8B] hover:bg-[#FF64AE] hover:text-white rounded-md'>
                                                        Home2
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/team' className='block px-4 py-2 text-base text-[#8B8B8B] hover:bg-[#FF64AE] hover:text-white rounded-md'>
                                                        Team
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>


                                    <li className="max-lg:w-[100%] max-lg:text-center max-lg:border-b max-lg:border-gray-300 max-lg:pb-2">
                                        <Link to='/about' className='max-lg:my-1 max-lg:mx-2 no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#fff] -ml-[6px] max-lg:text-[#8b8b8b]'>About</Link>
                                    </li>
                                    <li className="max-lg:w-[100%] max-lg:text-center max-lg:border-b max-lg:border-gray-300 max-lg:pb-2">
                                        <Link to='/service' className='max-lg:my-1 max-lg:mx-2 no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#fff] max-lg:text-[#8b8b8b]'>Service</Link>
                                    </li>
                                    <li className="max-lg:w-[100%] max-lg:text-center max-lg:border-b max-lg:border-gray-300 max-lg:pb-2">
                                        <Link to='/gallery' className='max-lg:my-1 max-lg:mx-2 no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#fff] max-lg:text-[#8b8b8b]'>Gallery</Link>
                                    </li>
                                    <li className="max-lg:w-[100%] max-lg:text-center max-lg:border-b max-lg:border-gray-300 max-lg:pb-2">
                                        <Link to='/blog' className='max-lg:my-1 max-lg:mx-2 no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#fff] max-lg:text-[#8b8b8b]'>Blog</Link>
                                    </li>
                                    <li className='pl-[8px] pt-[1px] max-lg:w-[100%] max-lg:text-center max-lg:pb-[50px] max-lg:border-b max-lg:border-gray-300 max-lg:pb-2'>
                                        <Link to='/contact' className='py-3.5 px-10 bg-[#FF64AE] rounded-full text-white text-base tracking-[1.6px] font-semibold'>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='text-[25px] lg:hidden cursor-pointer pt-[18px]' onClick={handleClick}>
                                {menuOpen ? <FaTimes /> : <FaAlignJustify />}
                            </div>
                        </div>
                    </header>

                    <div className=" max-w-[1188px] flex mx-auto pt-[204px] justify-between pl-[24px] pr-[22px]
                      max-lg:flex-col max-lg:items-center
                      max-lg:pt-[100px]
                    ">
                        <div className='max-lg:text-center'>
                            <h1 className='font-semibold text-[48px] leading-[60px] text-[#ffffff] -tracking-[0.4px] max-w-[502px]
                              max-md:text-[45px] max-ssm:text-[40px] max-sssm:text-[33px]
                            '>Your beauty center place</h1>
                            <p className='max-w-[501px] font-medium text-[16px] leading-[24px] tracking-[1.7px] text-[#D8DCFF] pt-[11px]
                             max-ssm:text-[14px] max-sssm:text-[12px]
                            '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque arcu fusce et magna consequat neque vitae lobortis.</p>

                            <div className='pt-[41px]'>
                                <button className='w-[36%] h-[52px] font-semibold text-[16px] leading-[24px] tracking-[1.6px] text-[#ffffff] border-[1px] border-[#FFFFFF] rounded-[15px]
                                max-ssm:w-[150px] max-ssm:h-[45px] max-ssm:text-[14px]
                                max-sssm:w-[130px] max-sssm:h-[40px] max-sssm:text-[12px]
                                '>More Details</button>
                            </div>

                        </div>

                        <div className='flex  mx-auto items-center pl-[54px]
                        max-lg:p-0
                        '>
                            <div>
                                <img className='max-md:w-[70%]' src={play_button} alt='abc'></img>
                            </div>

                            <div className='pl-[27px] max-md:p-0'>
                                <h4 className='font-semibold leading-[24px] text-[16px] text-[#ffffff] tracking-[1.6px] max-sssm:whitespace-nowrap'>Tour Video</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='max-w-[1188px] pl-[24px] pr-[24px] flex mx-auto  justify-between pt-[159px]
                 max-lg:flex-col max-lg:items-center
                '>
                    <div className="">
                        <img className=' max-xl:w-[80%] m-0 m-auto' src={img_about} alt="abc"></img>
                    </div>

                    <div className='max-w-[483px] max-lg:pt-[30px] max-lg:text-center'>
                        <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae]
                        max-md:text-[14px] max-sm:text-[14px]
                        '>About Us</h4>
                        <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] pt-[11px] -tracking-[0.1px]
                          max-md:text-[33px] max-md:whitespace-normal max-sm:text-[30px]
                        '>We are the best beauty clinic</h1>
                        <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] max-w-[480px] pt-[11px] 
                         max-xl:max-w-none max-ssm:text-[14px]
                        '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</p>

                        <div className='pt-[48px] '>
                            <div className='about-btn-learnmore'>
                                <button className='w-[42%] h-[57px] rounded-[50px] bg-[#FF64AE] border-0 text-[16px] text-[#ffffff] tracking-[1.7px] font-medium font-poppins pl-[2px]
                                max-md:h-[50px]
                                max-ssm:text-[14px]
                                max-sssm:text-[12px]
                                max-sssm:h-[40px]
                            '>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='pt-[160px] pb-[127px] max-w-[1188px] mx-auto pl-[24px] pr-[24px]'>
                    <div className='max-w-[964px] m-0 m-auto text-center pl-[24px] pr-[24px]'>
                        <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae] max-md:text-[14px] '>Main Services</h4>
                        <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] max-w-[450px] m-0 m-auto pt-[12px]
                        max-md:text-[40px] max-sm:text-[37px] max-ssm:text-[33px]
                        '>Our focus services</h1>
                        <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] pt-[20px]
                        max-md:text-[14px] max-md:text-[12px]
                        '>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className='flex flex-wrap justify-between max-w-[915px] m-0 m-auto pt-[77px]
                     max-xl:justify-center
                     max-xl:gap-[30px]
                    '>
                        <ServiveBoxMain className='max-xl:mt-[30px]' >
                            <ImgBox src={icon_2} alt='abc'></ImgBox>
                            <Heading>Beauty consultation</Heading>
                            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing.</Paragraph>
                            <Paragraph1>Learn more</Paragraph1>
                        </ServiveBoxMain>

                        <ServiveBoxMain className='max-xl:mt-[30px]'>
                            <ImgBox src={icon_2_1} alt='abc'></ImgBox>
                            <Heading>Skin treatments</Heading>
                            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing.</Paragraph>
                            <Paragraph1>Learn more</Paragraph1>
                        </ServiveBoxMain>

                        <ServiveBoxMain className='max-xl:mt-[30px]'>
                            <ImgBox src={icon_2_2} alt='abc'></ImgBox>
                            <Heading>Beauty product</Heading>
                            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing.</Paragraph>
                            <Paragraph1>Learn more </Paragraph1>
                        </ServiveBoxMain>
                    </div>
                </div>


                <div className='h-[697.5px] bg-no-repeat 2xl:bg-cover

                ' style={{ backgroundImage: `url(${bg_choose})` }}>

                    <div className='max-w-[1180px] flex pt-[290px] mx-auto justify-between pl-[24px] pr-[24px]
                    
                      max-lg:flex-col max-lg:items-center
                      max-lg:pt-[150px]
                      '>
                        <div className='max-w-[486px]
                    max-lg:text-center
                    '>
                            <h1 className='font-semibold text-[36px] leading-[45px] text-[#ffffff] -tracking-[0.2px] max-md:text-[30px] max-sm:text-[27px] max-ssm:text-[23px]'>Why choosing us?</h1>
                            <p className='font-normal text-[16px] leading-[24px] tracking-[1.6px] text-[#D8DCFF] pt-[20px] max-md:text-[14px] max-sm:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p>
                        </div>

                        <div className='min-w-[507px] -mt-[13px]
                    max-xl:min-w-[380px]
                    max-lg:pt-[40px]
                    max-ssm:min-w-[200px]
                    
                    '>
                            <div className='flex'>
                                <div className='flex '>
                                    <img className='max-w-[64px] max-h-[64px]' src={choose1} alt='abc'></img>
                                    <div className='pl-[10px]'>
                                        <p className='font-semibold text-[36px] leading-[45px] text-[#ffffff] max-md:text-[30px] max-sm:text-[27px] max-ssm:text-[23px]'>100%</p>
                                        <p className='font-normal text-[16px] leading-[20px] text-[#ffffff] tracking-[0.4px] -mt-[3px] max-sm:text-[14px]'>trusted clinic</p>
                                    </div>
                                </div>

                                <div className='flex pl-[88px] -mt-[5px]
                        max-sssm:pl-[10px]

                        '>
                                    <img className='max-w-[64px] max-h-[64px]' src={choose2} alt='abc'></img>
                                    <div>
                                        <p className='font-semibold text-[36px] leading-[45px] text-[#ffffff] pt-[4px] pl-[10px] max-md:text-[30px] max-sm:text-[27px] max-ssm:text-[23px]'>99%</p>
                                        <p className='font-normal text-[16px] leading-[20px] text-[#ffffff] -mt-[3px] pl-[11px] max-sm:text-[14px]'>customer love</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex  pt-[43px]'>
                                <div className='flex max-w-[197px]'>
                                    <img className='max-w-[64px] max-h-[64px]' src={choose3} alt='abc'></img>
                                    <div>
                                        <p className='font-semibold text-[36px] leading-[45px] text-[#ffffff] pt-[5px] pl-[10px] max-md:text-[30px] max-sm:text-[27px] max-ssm:text-[23px]'>75+</p>
                                        <p className='font-normal text-[16px] leading-[20px] text-[#ffffff] -mt-[4px] pl-[12px] max-sm:text-[14px]'>asian branch</p>
                                    </div>
                                </div>

                                <div className='flex pl-[88px]
                         max-sssm:pl-0
                        '>
                                    <img className='max-w-[64px] max-h-[64px]' src={choose4} alt='abc'></img>
                                    <div>
                                        <p className='font-semibold text-[36px] leading-[45px] text-[#ffffff] pt-[5px] pl-[10px] max-md:text-[30px] max-sm:text-[27px] max-ssm:text-[23px]'>1.200+</p>
                                        <p className='font-normal text-[16px] leading-[20px] text-[#ffffff] -mt-[4px] pl-[10px] max-sm:text-[14px]'>licensed worker</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='max-w-[1187px] text-center mx-auto pt-[112px] pl-[24px] pr-[24px]'>
                    <div className=''>
                        <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae] max-md:text-[14px]'>The Blog</h4>
                        <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] pt-[11px] max-md:text-[40px] max-sm:text-[37px] max-ssm:text-[33px]'>Our latest news</h1>
                        <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] pt-[18px]
                             max-md:text-[14px] max-md:text-[12px]
                            '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className='flex flex-wrap justify-between max-w-[1139px] m-0 m-auto pt-[87px]
                         max-xl:justify-center
                         max-xl:gap-[30px]
                        '>
                        <BlogBoxMain className="">
                            <ImgBoxBlog src={img_blog} alt='abc'></ImgBoxBlog>
                            <HeadingBlog>How much does a consultation cost at our clinic?</HeadingBlog>
                            <ParagraphBlog>A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</ParagraphBlog>
                            <Button>Learn more</Button>
                        </BlogBoxMain>

                        <BlogBoxMain className="">
                            <ImgBoxBlog src={img_blog_1} alt='abc'></ImgBoxBlog>
                            <HeadingBlog>Watch out! don't choose the wrong beauty product</HeadingBlog>
                            <ParagraphBlog>A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</ParagraphBlog>
                            <Button>Learn more</Button>
                        </BlogBoxMain>

                        <BlogBoxMain className="">
                            <ImgBoxBlog src={img_blog_2} alt='abc'></ImgBoxBlog>
                            <HeadingBlog>About skin care you need to know</HeadingBlog>
                            <ParagraphBlog>A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</ParagraphBlog>
                            <Button>Learn more</Button>
                        </BlogBoxMain>
                    </div>
                </div>

                <div className='max-w-[1187px] pl-[24px] pr-[24px] flex justify-between  mx-auto pt-[169px] pb-[60px] 
                  max-xl:flex-col max-xl:items-center
                '>
                    <div className='max-w-[391px] max-xl:text-center'>
                        <h1 className='font-semibold text-[36px] leading-[45px] text-[#091156] -tracking-[0.2px] max-md:text-[30px] max-sm:text-[27px] max-ssm:text-[23px]'>Request call services</h1>
                        <p className='font-normal text-[16px] leading-[24px] tracking-[1.6px] pt-[17px] max-sm:text-[14px]'>Lorem ipsum dolor sit amet, consect adipiscing elit <span className='font-semibold text-[16px] leading-[24px] tracking-[1.6px] '> Contact Us.</span></p>
                    </div>

                    <form className='pt-[14px]'>
                        <div className='relative'>


                            <input className=' w-[658px] h-[73px] rounded-[25px] border-[1px] border-[#D9DDFE] pl-[37px]
                        max-md:w-[350px]
                        max-ssm:w-[200px] max-ssm:h-[50px]
                        ' type='number' placeholder='Insert your phone number here ...'></input>


                            <div className='top-0 right-0 absolute w-[113px] h-[73px] bg-[#FF64AE] rounded-r-[25px] max-ssm:h-[50px]'>
                                <img className='m-0 m-auto pt-[18px] max-ssm:p-[5px]' src={img_service} alt='abc'>

                                </img>
                            </div>
                        </div>


                        <p className='font-normal text-[12px] leading-[18px] tracking-[1.2px] text-[#8B8B8B] italic text-end pt-[8px]'>Toll free for our coverage areas.</p>
                    </form>
                </div>
            </div>

            {/* <Footer/> */}

            <LayoutFooter></LayoutFooter>


        </>
    )
}

export default Home2;