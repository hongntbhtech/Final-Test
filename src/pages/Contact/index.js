// import Header from "../../components/Header";
import img_contact from "../../assests/Contact/Contact_Animations1.png"
import "./Contact.css";

import map from "../../assests/Contact/map.png"

import img_contact1 from "../../assests/Contact/map-marker-alt.png"
import img_contact2 from "../../assests/Contact/phone-alt.png"
import img_contact3 from "../../assests/Contact/mail-bulk.png"

// import Footer from "../../components/Footer"

import bg_contact1 from "../../assests/Contact/bg_contact1.png"
import LayoutLanding1 from "../../components/LayoutLanding1/LayoutLanding1";

// import LayoutHeader from '../../layout/LayoutHeader'
// import LayoutFooter from '../../layout/LayoutFooter'
function Contact(){
    return(
        <>

        <LayoutLanding1>
        <div className="">
        <div className="max-w-screen-2xl font-poppins mx-auto">
            {/* <Header/> */}
            {/* <LayoutHeader></LayoutHeader> */}

            </div>
            <div className="bg-no-repeat bg-cover w-full" style={{ backgroundImage: `url(${bg_contact1})` }}>
            <div className="max-w-[1188px] mx-auto pt-[117px] pl-[24px] pr-[24px]">
                <div className=" mx-auto flex justify-between 
                max-lg:flex-col max-lg:text-center max-lg:items-center
            
                ">
                    <div className="max-w-[615px]
                    
                    ">
                        <h4 className="font-semibold text-[16px] text-[#FF64AE] leading-[20px] max-md:text-[14px]">Contact Us</h4>
                        <h1 className="font-semibold text-[36px] text-[#091156] leading-[45px] pt-[12px] -tracking-[0.1px] max-md:text-[33px]">Contact service for our customers</h1>
                    </div>

                    <div className="max-w-[427px] pt-[30px]">
                        <p className="font-normal text-[16px] text-[#8B8B8B] leading-[24px] tracking-[1.6px] max-md:text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                    </div>
                </div>

                <div className="max-w-[1140.33px] mx-auto flex justify-between
                 max-lg:flex-col max-lg:text-center max-lg:items-center
                ">
                    <div className="pt-[133px]">
                        <img className="" src={img_contact} alt="abc"></img>
                    </div>

                    <div className="min-w-[520px]
                    max-md:min-w-[320px]
                    ">
                    <form className='pt-[58px]
                    max-lg:pl-[15px] max-lg:pr-[15px]
                    '>
                        <div className='flex justify-between max-w-[520px]'>
                            <input className='w-[46.4%] h-[60px] rounded-[15px] border border-solid border-[#D9DDFE] pl-[23px]' type="text" placeholder="First name"></input>
                            <input className='w-[46.4%] h-[60px] rounded-[15px] border border-solid border-[#D9DDFE] pl-[25px]' type="text" placeholder="Last name"></input>
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
            </div>

            <div className="pt-[112px] 2xl:m-0 2xl:m-auto flex justify-center">
                <img src={map} alt="abc"></img>
            </div>

            <div className="max-w-[1188px] mx-auto pt-[114px] pb-[54px] pl-[24px] pr-[24px]">
                <div className="text-center max-w-[680px] mx-auto">
                    <h4 className="font-semibold text-[16px] text-[#FF64AE] leading-[20px]">Get in Touch</h4>
                    <h1 className="font-semibold text-[36px] text-[#091156] leading-[45px] pt-[12px] -tracking-[0.1px]">Get direct handling by us</h1>
                    <p className="font-normal text-[16px] text-[#8B8B8B] leading-[24px] tracking-[1.6px] pt-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                </div>

                <div className="max-w-[1038px] mx-auto flex justify-between pt-[98px]
                 max-lg:flex-col max-lg:text-center max-lg:items-center
                ">
                    <div className="max-w-[270px] min-h-[252px] text-center hover:shadow-custom-hover hover:min-w-[424px] min-h-[402px] rounded-[42px] hover:max-sssm:min-w-[320px]">
                        <img className="m-0 m-auto pt-[79px]" src={img_contact1} alt="abc"></img>
                        <h4 className="font-semibold text-[16px] text-[#FF64AE] leading-[20px] pt-[47px]">Address</h4>
                        <h1 className="font-semibold text-[24px] text-[#091156] leading-[30px] pt-[12px] -tracking-[0.2px]">101 Baker Street, NY</h1>
                        <p className="font-normal text-[14px] text-[#8B8B8B] leading-[21px] tracking-[1.6px] pt-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
                    </div>

                    <div className="max-w-[270px] min-h-[252px] text-center hover:shadow-custom-hover hover:min-w-[424px] min-h-[402px] rounded-[42px] hover:max-sssm:min-w-[320px]">
                        <img className="m-0 m-auto pt-[79px]" src={img_contact2} alt="abc"></img>
                        <h4 className="font-semibold text-[16px] text-[#FF64AE] leading-[20px] pt-[47px]">Phone</h4>
                        <h1 className="font-semibold text-[24px] text-[#091156] leading-[30px] pt-[12px] -tracking-[0.2px]">+896 120 5889</h1>
                        <p className="font-normal text-[14px] text-[#8B8B8B] leading-[21px] tracking-[1.6px] pt-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
                    </div>

                    <div className="max-w-[270px] min-h-[252px] text-center hover:shadow-custom-hover hover:min-w-[424px] min-h-[402px] rounded-[42px] hover:max-sssm:min-w-[320px]">
                        <img className="m-0 m-auto pt-[79px]" src={img_contact3} alt="abc"></img>
                        <h4 className="font-semibold text-[16px] text-[#FF64AE] leading-[20px] pt-[47px]">Mail</h4>
                        <h1 className="font-semibold text-[24px] text-[#091156] leading-[30px] pt-[12px] -tracking-[0.2px]">mail@company.com</h1>
                        <p className="font-normal text-[14px] text-[#8B8B8B] leading-[21px] tracking-[1.6px] pt-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
                    </div>
                    
                </div>
            </div>

            
        </div>

        {/* <Footer/> */}
        {/* <LayoutFooter></LayoutFooter> */}
        </LayoutLanding1>
        </>
    )
}

export default Contact;