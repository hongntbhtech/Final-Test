// import Header from "../../components/Header";
import actor1 from '../../assests/Proteams/unsplash_pTrhfmj2jDA.png';
import actor2 from '../../assests/Proteams/unsplash_FVh_yqLR9eA.png';
import actor3 from '../../assests/Proteams/unsplash_mEZ3PoFGs_k.png';
import icon1 from '../../assests/Proteams/Twitter.png';
import icon2 from '../../assests/Proteams/Facebook.png';
import icon3 from '../../assests/Proteams/Instagram.png';

import img_team1 from '../../assests/Team/unsplash_byGTytEGjBo.png'
import img_team2 from '../../assests/Team/unsplash_8YG31Xn4dSw.png'
import img_team3 from '../../assests/Team/unsplash_Fsgzm8N0hIY.png'

import bg_team from '../../assests/Team/unsplash_rE6FqsyyqwM.png'

import img_team4 from '../../assests/Team/unsplash_Z5g_6TLS6Ho.png'
import img_team5 from '../../assests/Team/Vector.png'
import img_team6 from '../../assests/Team/arrow-right.png'

import img_team7 from '../../assests/Team/star.png'
import img_team8 from '../../assests/Team/star.png'
import img_team9 from '../../assests/Team/star.png'
import img_team10 from '../../assests/Team/star.png'
import img_team11 from '../../assests/Team/star.png'

// import LayoutHeader from '../../layout/LayoutHeader'
// import LayoutFooter from '../../layout/LayoutFooter'

import { useSelector, useDispatch } from 'react-redux';
import { nextContent, backContent } from '../Team/actions/testimonials';


import { ProteamsBoxMain, ImgBox, Heading, Heading1, Para, SocialMedia, SocialMedia1 } from './TeamStyled'
import LayoutLanding1 from '../../components/LayoutLanding1/LayoutLanding1';
// import Footer from "../../components/Footer";


const star_icon = [
    { id: 1, src: img_team7, alt: "Star 1" },
    { id: 2, src: img_team8, alt: "Star 2" },
    { id: 3, src: img_team9, alt: "Star 3" },
    { id: 4, src: img_team10, alt: "Star 4" },
    { id: 5, src: img_team11, alt: "Star 5" },
];
function Team() {
    // const dispatch = useDispatch();
    // const currentContent = useSelector(state => state.testimonicalsReducer[0]);
    // const handleNext = () => {
    //     dispatch(nextContent(currentContent.id));
    // };

    // const handleBack = () => {
    //     dispatch(backContent(currentContent.id));
    // };

    const dispatch = useDispatch();
    const { contentList, currentIndex } = useSelector(state => state.testimonicalsReducer);

    const currentContent = contentList[currentIndex];

    const handleNext = () => {
        dispatch(nextContent());
    };

    const handleBack = () => {
        dispatch(backContent());
    };



    return (
        <>
        <LayoutLanding1>
            <div className="">

                <div className="max-w-screen-2xl font-poppins mx-auto">
                    {/* <Header/> */}

                    {/* <LayoutHeader></LayoutHeader> */}

                </div>

                <div className='max-w-[1188px] mx-auto pt-[118px] pl-[24px] pr-[24px]
                    '>
                    <div className='text-center max-w-[800px] m-0 m-auto pr-[79px] max-lg:pr-0
                '>
                        <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae]
                    max-md:text-[14px]'>Our Team</h4>
                        <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] pt-[12px]
                    max-md:text-[40px] max-sm:text-[37px] max-ssm:text-[33px]
                    '
                        >We are Professional</h1>
                        <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] pt-[23px]
                    max-md:text-[14px] max-md:text-[12px]
                    '>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                    </div>

                    <div className='flex flex-wrap justify-between max-w-[1085px] m-0 m-auto pt-[95px]
                     max-xl:justify-center
                     max-xl:gap-[30px]
                '>
                        <ProteamsBoxMain className='hover:shadow-custom-hover hover:min-w-[424px] rounded-[42px] max-md:hover:shadow-none max-md:hover:min-w-[initial]'>
                            <ImgBox src={actor1} alt='abc'></ImgBox>
                            <Heading>Surgeon</Heading>
                            <Heading1>Briyan Nevalli</Heading1>
                            <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</Para>
                            <SocialMedia className='social-media'>
                                <SocialMedia1 src={icon1} alt='abc'></SocialMedia1>
                                <SocialMedia1 src={icon2} alt='abc'></SocialMedia1>
                                <SocialMedia1 src={icon3} alt='abc'></SocialMedia1>
                            </SocialMedia>
                        </ProteamsBoxMain>

                        <ProteamsBoxMain className='hover:shadow-custom-hover hover:min-w-[424px] rounded-[42px] max-md:hover:shadow-none max-md:hover:min-w-[initial]'>
                            <ImgBox src={actor2} alt='abc'></ImgBox>
                            <Heading>Dermatologist</Heading>
                            <Heading1>Bella sebastian</Heading1>
                            <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</Para>
                            <SocialMedia className='social-media'>
                                <SocialMedia1 src={icon1} alt='abc'></SocialMedia1>
                                <SocialMedia1 src={icon2} alt='abc'></SocialMedia1>
                                <SocialMedia1 src={icon3} alt='abc'></SocialMedia1>
                            </SocialMedia>
                        </ProteamsBoxMain>

                        <ProteamsBoxMain className='hover:shadow-custom-hover hover:min-w-[424px] rounded-[42px] max-md:hover:shadow-none max-md:hover:min-w-[initial]'>
                            <ImgBox src={actor3} alt='abc'></ImgBox>
                            <Heading>Stylist expert</Heading>
                            <Heading1>Lilly Adams</Heading1>
                            <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</Para>
                            <SocialMedia className='social-media-right'>
                                <SocialMedia1 src={icon1} alt='abc'></SocialMedia1>
                                <SocialMedia1 src={icon2} alt='abc'></SocialMedia1>
                                <SocialMedia1 src={icon3} alt='abc'></SocialMedia1>
                            </SocialMedia>
                        </ProteamsBoxMain>
                    </div>
                </div>

                <div className="max-w-[1188px] pl-[24px] pr-[24px] mx-auto  pt-[151px] pb-[125px]
             max-lg:pl-[30px] max-lg:pr-[30px]
            ">
                    <div className="text-center">
                        <h4 className="ld text-[16px] text-[#FF64AE] leadfont-semiboing-[20px]">Assistance Team</h4>
                        <h1 className="font-semibold text-[36px] text-[#091156] leading-[45px] pt-[12px] -tracking-[0.1px]">Meet the pro assistance</h1>
                        <p className="font-normal text-[16px] text-[#8B8B8B] leading-[24px] tracking-[1.6px] pt-[25px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                    </div>

                    <div className="m-0 m-auto flex justify-between pt-[113px]
                max-lg:flex-col max-lg:items-center max-lg:ml-0

                ">
                        <img src={img_team1} alt="abc"></img>
                        <div className="max-w-[434px] pt-[63px] mr-[136px] max-xxl:mr-0">
                            <h5 className="font-semibold text-[18px] leading-[22.5px] text-[#091156]">Lina Gustav / <span className="font-normal italic text-[14px] leading-[17.5px] text-[#CACACA]">Pharmacist</span></h5>
                            <p className="font-normal text-[16px] leading-[24px] tracking-[1.6px] pt-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.</p>
                        </div>
                    </div>

                    <div className=" m-0 m-auto flex justify-between pt-[79px]
                 max-lg:flex-col max-lg:items-center max-lg:ml-0
            
                ">
                        <img src={img_team2} alt="abc"></img>
                        <div className="max-w-[434px] pt-[63px] mr-[136px] max-xxl:mr-0
                    ">
                            <h5 className="font-semibold text-[18px] leading-[22.5px] text-[#091156]">Adam White / <span className="font-normal italic text-[14px] leading-[17.5px] text-[#CACACA]">Finance</span></h5>
                            <p className="font-normal text-[16px] leading-[24px] tracking-[1.6px] pt-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.</p>
                        </div>
                    </div>

                    <div className=" m-0 m-auto flex justify-between pt-[79px]
                 max-lg:flex-col max-lg:items-center max-lg:ml-0
                ">
                        <img src={img_team3} alt="abc"></img>
                        <div className="max-w-[434px] pt-[63px] mr-[136px] max-xxl:mr-0">
                            <h5 className="font-semibold text-[18px] leading-[22.5px] text-[#091156]">Jane Doe /  <span className="font-normal italic text-[14px] leading-[17.5px] text-[#CACACA]">Marketer</span></h5>
                            <p className="font-normal text-[16px] leading-[24px] tracking-[1.6px] pt-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.</p>
                        </div>
                    </div>
                </div>

                <div className="h-[529px] bg-no-repeat 2xl:bg-cover" style={{ backgroundImage: `url(${bg_team})` }}>
                    <div className="max-w-[1188px] mx-auto text-center pt-[180px] pl-[24px] pr-[24px]
                ">
                        <h1 className="font-semibold text-[36px] leading-[45px] text-[#ffffff] max-w-[500px] mx-auto pl-[23px] -tracking-[0.3px
                    max-lg:pl-0
                    ">Customer satisfaction is our main goal</h1>
                        <p className="max-w-[679px] mx-auto font-normal text-[16px] leading-[24px] tracking-[1.6px] text-[#CACACA] pt-[6px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                    </div>
                </div>

                <div className="max-w-[1188px] mx-auto pt-[119px] pb-[15px] pl-[24px] pr-[24px]
            ">
                    <div className="text-center">
                        <h4 className="text-[16px] font-semibold leading-[20px] text-[#ff64ae]">Our Testimonials</h4>
                        <h1 className="text-[36px] font-semibold leading-[45px] text-[#091156] pt-[12px] -tracking-[0.2px] ">What our customer says</h1>
                        <p className=" text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] pt-[23px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                    </div>

                    <img className="mx-auto pt-[65px]" src={img_team4} alt="abc"></img>

                    <div className="flex max-w-[775px] mx-auto pt-[43px] justify-between">
                        <div className="pt-[18px]">
                            <button onClick={handleBack} disabled={currentIndex === 0}>
                                <img className="max-w-[21.88px] h-[21.32px]" src={img_team5} alt="Previous" />
                            </button>
                        </div>

                        <p className="min-h-[105px] text-[14px] font-normal leading-[21px] tracking-[1.4px] text-[#8b8b8b] max-w-[555px] text-center">
                            {currentContent.content}
                        </p>

                        <div className="pt-[20px]">
                            <button onClick={handleNext} disabled={currentIndex === contentList.length - 1}>
                                <img className="max-w-[21.88px] h-[21.32px]" src={img_team6} alt="Next" />
                            </button>
                        </div>

                    </div>

                    <div className="flex max-w-[169px] mx-auto justify-between pt-[35px]">
                        {/* <img src={img_team7} alt="abc"></img>
                        <img src={img_team8} alt="abc"></img>
                        <img src={img_team9} alt="abc"></img>
                        <img src={img_team10} alt="abc"></img>
                        <img src={img_team11} alt="abc"></img> */}

                        {star_icon.map((star) => (
                            <img key={star.id} src={star.src} alt={star.alt} />
                        ))}
                    </div>

                </div>


            </div>

            </LayoutLanding1>

            {/* <Footer/> */}
            {/* <LayoutFooter></LayoutFooter> */}
        </>
    )
}

export default Team;