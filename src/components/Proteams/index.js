import React from 'react';
import actor1 from '../../assests/Proteams/unsplash_pTrhfmj2jDA.png';
import actor2 from '../../assests/Proteams/unsplash_FVh_yqLR9eA.png';
import actor3 from '../../assests/Proteams/unsplash_mEZ3PoFGs_k.png';
import icon1 from '../../assests/Proteams/Twitter.png';
import icon2 from '../../assests/Proteams/Facebook.png';
import icon3 from '../../assests/Proteams/Instagram.png';
import { ProteamsBoxMain, ImgBox, Heading, Heading1, Para, SocialMedia } from './ProteamsStyled'


const icon_address = [
    { id: 1, src: icon1, alt: "Icon 1" },
    { id: 2, src: icon2, alt: "Icon 2" },
    { id: 3, src: icon3, alt: "Icon 3" },
];
function Proteams() {
    return (
        <>
            <div className='max-w-[1188px] mx-auto font-poppins pl-[24px] pr-[24px] -mt-[17px]'>
                <div className='text-center pt-[71px] max-w-[850px] m-0 m-auto'>
                    <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae]
                    max-md:text-[14px]'>Professional Teams</h4>
                    <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] pt-[12px]
                    max-md:text-[40px] max-sm:text-[37px] max-ssm:text-[33px]
                    '
                    >The Professional expert</h1>
                    <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] pt-[20px]
                    max-md:text-[14px] max-md:text-[12px]
                    '>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                </div>

                <div className='flex flex-wrap justify-between max-w-[1085px] m-0 m-auto pt-[114px]
                 max-xl:justify-center
                 max-xl:gap-[30px]
                '>
                    <ProteamsBoxMain className='hover:shadow-custom-hover hover:min-w-[424px] rounded-[42px] max-md:hover:shadow-none max-md:hover:min-w-[initial]'>
                        <ImgBox src={actor1} alt='abc'></ImgBox>
                        <Heading>Surgeon</Heading>
                        <Heading1>Briyan Nevalli</Heading1>
                        <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</Para>
                        <SocialMedia className='social-media'>
                            {icon_address.map((icon) => (
                                <img key={icon.id} src={icon.src} alt={icon.alt} />
                            ))}
                        </SocialMedia>
                    </ProteamsBoxMain>

                    <ProteamsBoxMain className='hover:shadow-custom-hover hover:min-w-[424px] rounded-[42px] max-md:hover:shadow-none max-md:hover:min-w-[initial]'>
                        <ImgBox src={actor2} alt='abc'></ImgBox>
                        <Heading>Dermatologist</Heading>
                        <Heading1>Bella sebastian</Heading1>
                        <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</Para>
                        <SocialMedia className='social-media'>
                           
                            {icon_address.map((icon) => (
                                <img key={icon.id} src={icon.src} alt={icon.alt} />
                            ))}

                        </SocialMedia>
                    </ProteamsBoxMain>

                    <ProteamsBoxMain className='hover:shadow-custom-hover hover:min-w-[424px] rounded-[42px] max-md:hover:shadow-none max-md:hover:min-w-[initial]'>
                        <ImgBox src={actor3} alt='abc'></ImgBox>
                        <Heading>Stylist expert</Heading>
                        <Heading1>Lilly Adams</Heading1>
                        <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</Para>
                        <SocialMedia className='social-media-right'>
                            {icon_address.map((icon) => (
                                <img key={icon.id} src={icon.src} alt={icon.alt} />
                            ))}
                        </SocialMedia>
                    </ProteamsBoxMain>
                </div>
            </div>
        </>
    )
}

export default Proteams;