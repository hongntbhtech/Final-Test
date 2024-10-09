import React, { useState, useEffect } from 'react';
import footer_logo from '../../assests/Footer/Footer.png';

import footer_bg from '../../assests/Footer/Footer_BG.png';
import bg_bottom from '../../assests/Footer/Bottom_BG.png';

import vector from '../../assests/Footer/arrow-up.png';

import contact1 from '../../assests/Footer/facebook-f.png';
import contact5 from '../../assests/Footer/instagram.png';
import contact3 from '../../assests/Footer/linkedin-in.png';
import contact4 from '../../assests/Footer/youtube.png';
import contact2 from '../../assests/Footer/twitter.png';

import { List, List1 } from './FooterStyled'
import { Link } from 'react-router-dom';

const contact_icon = [
    { id: 1, src: contact1, alt: "Contact 1" },
    { id: 2, src: contact2, alt: "Contact 2" },
    { id: 3, src: contact3, alt: "Contact 3" },
    { id: 4, src: contact4, alt: "Contact 4" },
    { id: 5, src: contact5, alt: "Contact 5" },
];

function Footer() {
    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth', // Smooth scroll
    //     });
    // };

    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 200) { // Điều chỉnh giá trị nếu cần
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <footer className='font-poppins relative'>
                <div className='pt-[69px]'>
                    <div className="relative  h-[705.34px] bg-no-repeat 2xl:bg-cover "
                        style={{ backgroundImage: `url(${footer_bg})` }}>
                        <div className='max-w-screen-2xl flex justify-between pt-[242px] w-[79.2%] mx-auto 
                        max-xl:w-[85%] 
                        max-lg:flex-wrap max-lg:pt-[100px] max-lg:w-[70%]
                        max-md:w-[80%]
                         max-sssm:w-[95%]
                           2xl:w-[80%] 2xl:mx-auto
                        '>
                            <div className='footer-1 max-lg:w-full max-lg:text-center'>
                                <img className='max-lg:m-0 max-lg:m-auto' src={footer_logo} alt='abc'></img>
                                <p className='text-[16px] font-semibold leading-[24px] tracking-[1.6px] text-[#d7dbff] indent-[32px] pt-[33px]'>
                                    Beautice <span className='p-children' style={{ fontSize: '16px', lineHeight: '24px', letterSpacing: '1.6px', fontWeight: 400 }}>
                                        is a Beauty Clinic WordPress Theme.
                                    </span>
                                </p>
                                <p className='text-[14px] font-medium italic leading-[21px] tracking-[1.6px] text-[#d7dbff] indent-[31px] pt-[23px]'>Baker Steet 101, NY, United States.</p>
                                <div className='flex mt-1 max-lg:justify-center max-md:flex-wrap'>
                                    <p className='text-[14px] font-medium italic leading-[21px] tracking-[1.6px] text-[#d7dbff] indent-[31px]'>+521 569 8966.</p>
                                    <p className='text-[14px] font-medium italic leading-[21px] tracking-[1.6px] text-[#d7dbff] indent-[31px] pl-[10px]'>mail@company.com.</p>
                                </div>
                            </div>


                            <div className='w-[13.4%] -mt-[14px] max-lg:pt-[50px] max-lg:w-[30%] max-lg:mx-auto max-md:w-[40%] max-md:mx-auto' >
                                <h3 className='text-[18px] font-semibold leading-[27px] tracking-[1.8px] text-white max-md:text-[14px]'>Pages</h3>
                                <ul className='pt-[20px]'>
                                    <List className='text-[16px] font-normal tracking-[1.8px] text-[#d7dbff] list-none max-md:text-[12px]'>
                                        <Link onClick={scrollToTop} to='/'>Home</Link>
                                    </List>
                                    <List className='text-[16px] font-normal tracking-[1.8px] text-[#d7dbff] list-none max-md:text-[12px]'>
                                        <Link onClick={scrollToTop} to='/about'>About</Link>
                                    </List>
                                    <List className='text-[16px] font-normal tracking-[1.8px] text-[#d7dbff] list-none max-md:text-[12px]'>
                                        <Link onClick={scrollToTop} to='/service'>Services</Link>
                                    </List>
                                    <List className='text-[16px] font-normal tracking-[1.8px] text-[#d7dbff] list-none max-md:text-[12px]'>
                                        <Link onClick={scrollToTop} to='/gallery'>Gallery</Link>
                                    </List>
                                    <List className='text-[16px] font-normal tracking-[1.8px] text-[#d7dbff] list-none max-md:text-[12px]'>
                                        <Link onClick={scrollToTop} to='/team'>Team</Link>
                                    </List>
                                </ul>
                            </div>

                            <div className='max-lg:pt-[50px]'>
                                <h3 className='text-[18px] font-semibold leading-[27px] tracking-[1.5px] text-white -mt-[16px] -ml-[3px]  max-md:text-[14px]'>Informations</h3>
                                <ul className='pt-[22px]' >
                                    <List1 className='text-[16px] font-normal tracking-[1.8px] text-[#d7dbff] list-none  max-md:text-[12px]'>Terms & conditions</List1>
                                    <List1 className='text-[16px] font-normal tracking-[1.8px] text-[#d7dbff] list-none max-md:text-[12px]'>Privacy policy</List1>
                                    <List1 className='text-[16px] font-normal tracking-[1.8px] text-[#d7dbff] list-none max-md:text-[12px]'>
                                        <Link onClick={scrollToTop} to='/blog'>Blog</Link>
                                    </List1>
                                    <List1 className='text-[16px] font-normal tracking-[1.8px] text-[#d7dbff] list-none max-md:text-[12px]'>
                                        <Link onClick={scrollToTop} to='/contact'>Contact</Link>
                                    </List1>
                                </ul>
                            </div>


                        </div>

                        {/* <div className='w-[95.5%] flex justify-end fixed bottom-[170px]'>
                            <Link onClick={scrollToTop} >
                                <div className='w-[36px] h-[36px] bg-[#ff64ae] rounded-[5px] flex justify-center items-center'>
                                    <img src={vector} alt='abc'></img>
                                </div>
                            </Link>
                        </div> */}

                        {showButton && (
                            <div className='w-[95.5%] flex justify-end fixed bottom-[170px]'>
                                <Link onClick={scrollToTop}>
                                    <div className='w-[36px] h-[36px] bg-[#ff64ae] rounded-[5px] flex justify-center items-center'>
                                        <img src={vector} alt='Scroll to top' />
                                    </div>
                                </Link>
                            </div>
                        )}



                        <div className='max-w-screen-2xl flex justify-between w-[79.2%] mx-auto pt-[138px]
                         max-xl:w-[85%] max-lg:pt-[80px]
                        max-md:flex-col max-md:justify-center max-md:pt-[50px]
                        '>
                            <div className='flex gap-[45px] max-lg:gap-[25px] max-md:text-center max-md:m-0 max-md:m-auto'>
                                {/* <img src={contact1} alt='abc'></img>
                                <img src={contact2} alt='abc'></img>
                                <img src={contact3} alt='abc'></img>
                                <img src={contact4} alt='abc'></img>
                                <img src={contact5} alt='abc'></img> */}

                                {contact_icon.map((contact) => (
                                    <img key={contact.id} src={contact.src} alt={contact.alt} />
                                ))}
                            </div>


                            <div className="leading-[24px] tracking-[1.6px] text-[#d7dbff] -mt-[2px]
                            max-md:text-center max-md:text-[12px]
                            ">
                                <p>© AltDesain Studio 2021 - All right reserved.</p>
                            </div>
                        </div>

                    </div>
                    <div className="absolute bg-no-repeat w-full h-[125px] bottom-0 left-0 -z-10"
                        style={{ backgroundImage: `url(${bg_bottom})` }}>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;