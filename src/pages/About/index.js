// import Header from "../../components/Header";

import img_about from "../../assests/About/unsplash_DE6rYp1nAho.png"
import play_button from "../../assests/About/Play_button.png"

import Proteams from "../../components/Proteams";

import bg_slogan from "../../assests/Slogan/unsplash_Pe9IXUuC6QU.png"

import img_about1 from '../../assests/About/Illustration-1.png';
import img_about2 from '../../assests/About/Illustration-2.png';


import logo1 from '../../assests/Client/LOGO1.png'
import logo2 from '../../assests/Client/LOGO2.png'
import logo3 from '../../assests/Client/LOGO3.png'
import logo4 from '../../assests/Client/LOGO4.png'
import logo5 from '../../assests/Client/LOGO5.png'
import LayoutLanding1 from "../../components/LayoutLanding1/LayoutLanding1";

// import Footer from "../../components/Footer";

// import LayoutHeader from '../../layout/LayoutHeader'
// import LayoutFooter from '../../layout/LayoutFooter'


const clientLogos = [
    { id: 1, src: logo1, alt: "Logo 1" },
    { id: 2, src: logo2, alt: "Logo 2" },
    { id: 3, src: logo3, alt: "Logo 3" },
    { id: 4, src: logo4, alt: "Logo 4" },
    { id: 5, src: logo5, alt: "Logo 5" },
];


function About() {
    return (
        <>
        <LayoutLanding1>
            <div className="">
                <div className="max-w-screen-2xl font-poppins mx-auto">
                    {/* <Header /> */}
                    {/* <LayoutHeader></LayoutHeader> */}
                </div>

                <div className="max-w-[1188px] pl-[24px] pr-[24px] mx-auto pt-[117px] max-h-[976px]
                
                ">
                    <div className="max-w-[732px] 2xl:max-w-none 2xl:text-center">
                        <h4 className="font-semibold text-[16px] text-[#FF64AE] leading-[20px] max-md:text-[14px]">About</h4>
                        <h1 className="font-semibold text-[36px] text-[#091156] leading-[45px] pt-[12px] -tracking-[0.1px] max-md:text-[33px]">We are a leading beauty clinic that has been around since 2002</h1>
                        <p className="font-normal text-[16px] text-[#8B8B8B] leading-[24px] tracking-[1.6px] max-w-[680px] pt-[20px] max-md:text-[14px]
                        2xl:max-w-none 2xl:text-center
                        ">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                    </div>

                    <div className="pt-[16px]">
                        <div className=" relative">
                            <img className=" max-w-none -ml-[73px] object-cover
                            max-xxl:max-w-full max-xxl:ml-0
                            2xl: m-0 2xl:m-auto
                            " src={img_about} alt="abc"></img>
                            <img className=" absolute top-[46%] left-1/2 w-12 h-12 transform -translate-x-1/2 -translate-y-1/2 w-[7.5%] h-auto" src={play_button} alt="abc"></img>
                        </div>
                    </div>
                </div>

                <div className="mt-[19px] pb-[151px]">
                    <Proteams />
                </div>

                <div className="text-center pt-[162px] pb-[175px] bg-no-repeat 2xl:bg-cover
                
                 max-ssm:pt-[100px]
                "

                    style={{ backgroundImage: `url(${bg_slogan})` }}
                >
                    <div className="max-w-[1188px] pl-[24px] pr-[24px] mx-auto">
                    <h4 className="font-semibold text-[16px] leading-[20px] text-[#ABB4FF]">Business Slogan</h4>
                    <h1 className="font-semibold text-[36px] leading-[45px] text-[#FFFFFF] -tracking-[0.1px] max-w-[620px] m-0 m-auto pt-[10px]">Best responsibility and service for our customers</h1>
                    <p className="font-normal text-[16px] leading-[24px] text-[#CACACA] tracking-[1.6px] max-w-[680px] m-0 m-auto pt-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                    </div>
                </div>

                <div className='max-w-[1185px] font-poppins mx-auto flex justify-between pt-[126px] pl-[24px] pr-[24px]
                 max-lg:flex-col max-lg:items-center
                 max-md:pt-[20px]
                '>
                    <div className="pt-[28px] pl-[54px]
                    max-lg:pl-0
                    ">
                        <img className="w-[98%] h-[235.06px]" src={img_about1} alt="abc"></img>
                    </div>

                    <div className='w-[42%]
                    max-lg:w-full max-lg:text-center max-lg:pt-[30px]
                    '>
                        <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae]'>Our Vision</h4>
                        <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] pt-[14px]  '>Be the best and go international</h1>
                        <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] max-w-[480px] pt-[11px] max-lg:max-w-none'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.</p>
                        <p className="text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] max-w-[480px] pt-[25px] max-lg:max-w-none"> Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</p>

                    </div>
                </div>


                <div className='max-w-[1185px] font-poppins flex mx-auto justify-between pt-[140px] pl-[24px] pr-[24px]
                 max-lg:flex-col max-lg:items-center
                 max-md:pt-[20px]
                '>

                    <div className='w-[46%]
                     max-lg:w-full max-lg:text-center max-lg:pt-[30px]
                    '>
                        <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae]'>Our Mission</h4>
                        <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] pt-[12px] -tracking-[0.2px] '>Special & premium service to any clients</h1>
                        <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] max-w-[480px] pt-[13px] max-lg:max-w-none'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.</p>
                        <p className="text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] max-w-[480px] pt-[25px] max-lg:max-w-none"> Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</p>

                    </div>

                    <div className="w-[44%] pl-[21px] -mt-[10px]
                      max-lg:pl-0 max-lg:w-full
                    ">
                        <img className="w-[100%] h-[310.71px]
                        max-md:w-auto max-md:m-0 max-md:m-auto
                        " src={img_about2} alt="abc"></img>
                    </div>
                </div>

                <div className="max-w-[1188px] pl-[24px] pr-[24px] pt-[126px] pb-[52px] mx-auto">
                    <div className="max-w-[848px] text-center m-0 m-auto pr-[24px]
                    max-lg:pr-0
                    " >
                        <h4 className="font-semibold text-[16px] leading-[20px] text-[#FF64AE]">Our Clients</h4>
                        <h1 className="font-semibold text-[36px] leading-[45px] text-[#091156] pt-[11px] -tracking-[0.2px]">Well-known agencies</h1>
                        <p className="font-normal text-[16px] leading-[24px] tracking-[1.6px] text-[#8B8B8B] pt-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>

                    <div className="flex justify-center max-w-[962px] m-0 m-auto gap-[57px] pt-[104px]
                     max-lg:flex-wrap
                    ">
                        {/* <img src={logo1} alt="abc"></img>
                        <img src={logo2} alt="abc"></img>
                        <img src={logo3} alt="abc"></img>
                        <img src={logo4} alt="abc"></img>
                        <img src={logo5} alt="abc"></img> */}

                        {clientLogos.map((logo) => (
                            <img key={logo.id} src={logo.src} alt={logo.alt} />
                        ))}
                    </div>
                </div>



            </div>

            {/* <Footer/> */}
            {/* <LayoutFooter></LayoutFooter> */}
            </LayoutLanding1>
        </>
    )
}

export default About;