// import Header from "../../components/Header";

import bg_blog from "../../assests/Blog/unsplash_QA9fRIi6sFw.png"

import img_blog_2 from '../../assests/Blog/actor3.png'
import img_blog from '../../assests/Blog/actor1.png'
import img_blog_1 from '../../assests/Blog/actor2.png'
import img_folder from '../../assests/Blog/folder.png'
import img_right from '../../assests/Blog/caret-right.png'

import img_search from '../../assests/Blog/search.png'

import img_blog_3 from '../../assests/Blog/unsplash_xayCTz6N2nM.png'
import img_blog_4 from '../../assests/Blog/unsplash_DiJKOYIiNmQ.png'
import img_blog_5 from '../../assests/Blog/unsplash_yfmjALh1S6s.png'

import contact1 from '../../assests/Blog/facebook-f.png';
import contact5 from '../../assests/Blog/twit.png';
import contact3 from '../../assests/Blog/insta.png';
import contact2 from '../../assests/Blog/linkedin-in.png';
// import LayoutLanding1 from "../../components/LayoutLanding1/LayoutLanding1"

// import circle from '../../assests/Blog/Ellipse.png'
// import Footer from "../../components/Footer";

import LayoutHeader from '../../layout/LayoutHeader'
import LayoutFooter from '../../layout/LayoutFooter'


function Blog() {
    return (
        <>

        {/* <LayoutLanding1> */}
            <div className="">
                <div className="max-w-screen-2xl font-poppins mx-auto pb-[28px]">
                    {/* <Header /> */}
                    <LayoutHeader></LayoutHeader>
                </div>

                <div className="h-[285px] bg-no-repeat 2xl:bg-cover" style={{ backgroundImage: `url(${bg_blog})` }}>
                    <div className="max-w-[1190px] mx-auto flex justify-between pt-[122px] pl-[24px] pr-[24px]
                    ">
                        <h1 className="font-semibold text-[36px] leading-[45px] text-[#ffffff]">Blog</h1>
                        <h5 className="font-medium text-[16px] leading-[24px] tracking-[1.6px] text-[#D9D9D9] pt-[10px]">Home • Blog</h5>
                    </div>
                </div>

                <div className="flex flex-wrap max-w-[1188px] mx-auto justify-between pl-[24px] pr-[24px]
                 max-xl:justify-center
                ">
                    <div className=" pt-[108px]">
                        <div className="max-w-[730px] min-h-[953px] bg-[#F2F4FF] rounded-[50px]">
                            <img className="" src={img_blog} alt="abc"></img>

                            <div className="max-w-[578px] mx-auto pt-[55.5px]
                            max-lg:pl-[30px] max-lg:pr-[30px]
                            ">
                                <div className="flex max-w-[146px] justify-between">
                                    <img src={img_folder} alt="abc"></img>
                                    <h4 className="font-semibold text-[16px] text-[#FF64AE] leading-[20px] pt-[5px]">Consultation</h4>
                                </div>

                                <h1 className="font-semibold text-[36px] text-[#091156] leading-[45px] pt-[20px] -tracking-[0.1px]">
                                    How much does a consultation cost at our clinic?
                                </h1>
                                <p className="text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] pt-[20px]">
                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…
                                </p>

                                <div className="pt-[35px] flex">
                                    <button className="w-[39%] h-[59px] font-medium text-[16px] leading-[24px] tracking-[1.6px] text-[#ffffff] border-[1px] border-[#FFFFFF] bg-[#FF64AE] rounded-[50px] flex items-center justify-center pl-[19px]">
                                        Read More
                                        <img className="w-[25px] h-[25px] pl-[5px]" src={img_right} alt="abc"></img>

                                    </button>
                                </div>

                            </div>


                        </div>


                        <div className="max-w-[730px] min-h-[953px] bg-[#F2F4FF] rounded-[50px] mt-[133px]">
                            <img className="" src={img_blog_1} alt="abc"></img>

                            <div className="max-w-[578px] mx-auto pt-[55.5px]
                            max-lg:pl-[30px] max-lg:pr-[30px]
                            ">
                                <div className="flex max-w-[98px] justify-between">
                                    <img src={img_folder} alt="abc"></img>
                                    <h4 className="font-semibold text-[16px] text-[#FF64AE] leading-[20px] pt-[5px]">Beauty</h4>
                                </div>

                                <h1 className="font-semibold text-[36px] text-[#091156] leading-[45px] pt-[20px] -tracking-[0.1px]">
                                    Watch out! don't choose the wrong beauty product
                                </h1>
                                <p className="text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] pt-[20px]">
                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…
                                </p>

                                <div className="pt-[35px] flex">
                                    <button className="w-[39%] h-[59px] font-medium text-[16px] leading-[24px] tracking-[1.6px] text-[#ffffff] border-[1px] border-[#FFFFFF] bg-[#FF64AE] rounded-[50px] flex items-center justify-center pl-[19px]">
                                        Read More
                                        <img className="w-[25px] h-[25px] pl-[5px]" src={img_right} alt="abc"></img>

                                    </button>
                                </div>

                            </div>


                        </div>

                        <div className="max-w-[730px] min-h-[953px] bg-[#F2F4FF] rounded-[50px] mt-[133px]">
                            <img className="" src={img_blog_2} alt="abc"></img>

                            <div className="max-w-[578px] mx-auto pt-[55.5px]
                            max-lg:pl-[30px] max-lg:pr-[30px]
                            ">
                                <div className="flex max-w-[135px] justify-between">
                                    <img src={img_folder} alt="abc"></img>
                                    <h4 className="font-semibold text-[16px] text-[#FF64AE] leading-[20px] pt-[5px]">Treatments</h4>
                                </div>

                                <h1 className="font-semibold text-[36px] text-[#091156] leading-[45px] pt-[20px] -tracking-[0.1px]">
                                    About skin care you need to know
                                </h1>
                                <p className="text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] pt-[20px]">
                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…
                                </p>

                                <div className="pt-[35px] flex">
                                    <button className="w-[39%] h-[59px] font-medium text-[16px] leading-[24px] tracking-[1.6px] text-[#ffffff] border-[1px] border-[#FFFFFF] bg-[#FF64AE] rounded-[50px] flex items-center justify-center pl-[19px]">
                                        Read More
                                        <img className="w-[25px] h-[25px] pl-[5px]" src={img_right} alt="abc"></img>

                                    </button>
                                </div>

                            </div>
                        </div>

                        
                            <div className="max-w-[110px]  ml-auto  flex justify-between pt-[105px] mr-[97px]">


                                <p className="font-semibold text-[16px] leading-[20px] text-center text-[#C7C7C7]">1</p>
                                <p className="font-semibold text-[16px] leading-[20px] text-center text-[#C7C7C7]">2</p>
                                <p className="font-semibold text-[16px] leading-[20px] text-center text-[#C7C7C7]">3</p>


                            </div>
                        
                    </div>

                    <div className="pt-[108px] max-xl:flex max-xl:justify-between max-xl:flex-wrap 
                    max-xl:justify-center
                    max-xl:gap-[30px]
                    ">
                        <div className="relative max-xl:mx-auto">
                            <input className="w-[350px] h-[65px] rounded-[25px] border-[1px] border-[#D9DDFE] pl-[26px] pb-[2px]
                            max-md:w-[250px]
                            " type="number" placeholder='Search here ...'></input>
                            <div className='top-0 right-0 absolute w-[76px] h-[65px] bg-[#172176] rounded-r-[40px] '>
                                <img className='m-0 m-auto pt-[18px]' src={img_search} alt='abc'>

                                </img>
                            </div>
                        </div>

                        <div className="pt-[0px] max-xl:flex  max-xl:flex-wrap 
                    max-xl:justify-center
                    max-xl:gap-[30px]
                    ">

                        <div className="max-w-[350px] min-h-[471px] bg-[#F2F4FF] rounded-[25px] mt-[76px]
                        max-xl:min-w-[300px]">
                            <div className="max-w-[290px] mx-auto pt-[59px] pl-[18px]">
                                <h3 className="font-semibold text-[16px] leading-[20px] text-[#091156]">Recent Posts</h3>

                                <div className="flex  justify-between pt-[26px]">
                                    <img className="pt-[4px]" src={img_blog_3} alt="abc"></img>
                                    <div className="pl-[26px]">
                                        <h5 className="font-semibold text-[14px] leading-[21px] tracking-[1.6px] text-[#FF64AE]">01 jan 2021</h5>
                                        <p className="font-normal text-[12px] leading-[18px] tracking-[1.6px] text-[#8B8B8B] pt-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                    </div>
                                </div>

                                <div className="flex  justify-between pt-[22px]">
                                    <img className="pt-[4px]" src={img_blog_4} alt="abc"></img>
                                    <div className="pl-[26px]">
                                        <h5 className="font-semibold text-[14px] leading-[21px] tracking-[1.6px] text-[#FF64AE]">01 jan 2021</h5>
                                        <p className="font-normal text-[12px] leading-[18px] tracking-[1.6px] text-[#8B8B8B] pt-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                    </div>
                                </div>

                                <div className="flex  justify-between pt-[22px]">
                                    <img className="pt-[4px]" src={img_blog_5} alt="abc"></img>
                                    <div className="pl-[26px]">
                                        <h5 className="font-semibold text-[14px] leading-[21px] tracking-[1.6px] text-[#FF64AE]">01 jan 2021</h5>
                                        <p className="font-normal text-[12px] leading-[18px] tracking-[1.6px] text-[#8B8B8B] pt-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        
                        <div className="max-w-[350px] min-h-[250px] rounded-[25px] bg-[#F2F4FF] mt-[83px] pt-[58px] pl-[50px]
                        max-xl:pl-[10px]
                        max-xl:min-w-[300px]
                        ">
                            <h5 className="font-semibold text-[16px] leading-[20px] text-[#091156] max-xl:text-center">Categories</h5>

                            <div className="pt-[22px]   max-xl:text-center">
                                <p className="font-normal text-[14px] leading-[21px] tracking-[1.4px] text-[#8B8B8B]">Consultation</p>
                                <p className="font-normal text-[14px] leading-[21px] tracking-[1.4px] text-[#8B8B8B] pt-[5px]">Beauty</p>
                                <p className="font-normal text-[14px] leading-[21px] tracking-[1.4px] text-[#8B8B8B] pt-[5px]">Treatments</p>
                                <p className="font-normal text-[14px] leading-[21px] tracking-[1.4px] text-[#8B8B8B] pt-[5px]">News</p>
                            </div>
                        </div>

                        <div className="max-w-[350px] min-h-[274px] rounded-[25px] bg-[#F2F4FF] mt-[83px]
                        max-xl:min-w-[300px]
                        ">
                            <h5 className="font-semibold text-[16px] leading-[20px] text-[#091156] pt-[58px] pl-[50px]">Cloud Tags</h5>

                            <div className="flex max-w-[262px] mx-auto justify-between pt-[25px]">
                                <div className="min-w-[82px] bg-[#EEF0FF] rounded-[50px]">
                                    <p className="font-normal text-[14px] leading-[20px] tracking-[1.6px] text-[#8B8B8B] text-center">beauty</p>
                                </div>

                                <div className="min-w-[82px] bg-[#EEF0FF] rounded-[50px]">
                                    <p className="font-normal text-[14px] leading-[20px] tracking-[1.6px] text-[#8B8B8B] text-center">cute</p>
                                </div>

                                <div className="min-w-[82px] bg-[#EEF0FF] rounded-[50px]">
                                    <p className="font-normal text-[14px] leading-[20px] tracking-[1.6px] text-[#8B8B8B] text-center">skin</p>
                                </div>
                            </div>

                            <div className="flex max-w-[262px] mx-auto justify-between pt-[25px]">
                                <div className="min-w-[82px] bg-[#EEF0FF] rounded-[50px]">
                                    <p className="font-normal text-[14px] leading-[20px] tracking-[1.6px] text-[#8B8B8B] text-center">glow</p>
                                </div>

                                <div className="min-w-[82px] bg-[#EEF0FF] rounded-[50px]">
                                    <p className="font-normal text-[14px] leading-[20px] tracking-[1.6px] text-[#8B8B8B] text-center">style</p>
                                </div>

                                <div className="min-w-[82px] bg-[#EEF0FF] rounded-[50px]">
                                    <p className="font-normal text-[14px] leading-[20px] tracking-[1.6px] text-[#8B8B8B] text-center">clinic</p>
                                </div>
                            </div>

                            <div className="flex max-w-[262px] mx-auto justify-between pt-[25px]">
                                <div className="min-w-[82px] bg-[#EEF0FF] rounded-[50px]">
                                    <p className="font-normal text-[14px] leading-[20px] tracking-[1.6px] text-[#8B8B8B] text-center">style</p>
                                </div>

                                <div className="min-w-[82px] bg-[#EEF0FF] rounded-[50px]">
                                    <p className="font-normal text-[14px] leading-[20px] tracking-[1.6px] text-[#8B8B8B] text-center">great</p>
                                </div>

                                <div className="min-w-[82px] bg-[#EEF0FF] rounded-[50px]">
                                    <p className="font-normal text-[14px] leading-[20px] tracking-[1.6px] text-[#8B8B8B] text-center">cute</p>
                                </div>
                            </div>


                        </div>

                       

                        <div className="max-w-[350px] min-h-[213px] rounded-[25px] bg-[#F2F4FF] mt-[83px]
                        max-xl:min-w-[300px]
                        
                        ">
                            <h5 className="font-semibold text-[16px] leading-[20px] text-[#091156] pt-[58px] pl-[48px]">Social Connect</h5>

                            <div className="flex pl-[54px] pt-[38px] gap-[39px]
                            max-xl:mx-auto
                           
                            ">

                                <img className="" src={contact1} alt="abc"></img>

                                <img src={contact5} alt="abc"></img>
                                <img src={contact3} alt="abc"></img>
                                <img src={contact2} alt="abc"></img>
                            </div>
                        </div>
                        </div>
                        </div>


                    </div>
                </div>

                <div className="-mt-[7px]">
                    <LayoutFooter></LayoutFooter>
                </div>
           
                {/* </LayoutLanding1> */}

        </>
    )
}

export default Blog;