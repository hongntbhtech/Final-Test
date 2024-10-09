// import Header from "../../components/Header";

import img_gallery1 from "../../assests/Gallery/unsplash_FVh_yqLR9eA.png"
import img_gallery2 from "../../assests/Gallery/unsplash_3ewkNkfJj2k.png"
import img_gallery3 from "../../assests/Gallery/unsplash_xayCTz6N2nM.png"
import img_gallery4 from "../../assests/Gallery/unsplash_Pe9IXUuC6QU.png"
import img_gallery5 from "../../assests/Gallery/unsplash_fvInY-Gh7sc.png"
import img_gallery6 from "../../assests/Gallery/unsplash_HEde-a_T4E8.png"
import img_gallery7 from "../../assests/Gallery/unsplash_9Wa1HgE1XlA.png"
import img_gallery8 from "../../assests/Gallery/unsplash_PqyzuzFiQfY.png"
import img_gallery9 from "../../assests/Gallery/unsplash_4SUyx4KQ5Ik.png"

import bg_gallery from "../../assests/Gallery/unsplash_eflLpWC1Geo.png"
import play_button from "../../assests/Slider/play_button.png"
import LayoutLanding1 from "../../components/LayoutLanding1/LayoutLanding1"
// import Footer from "../../components/Footer";

// import LayoutHeader from '../../layout/LayoutHeader'
// import LayoutFooter from '../../layout/LayoutFooter'

function Gallery() {
    return (
        <>
         <LayoutLanding1>
            <div className="">
            <div className="max-w-screen-2xl font-poppins mx-auto">
                {/* <Header /> */}
                {/* <LayoutHeader></LayoutHeader> */}
                </div>

                <div className="max-w-[1188px] mx-auto pt-[118px] pb-[124px] pl-[24px] pr-[24px]">
                    <div className="flex justify-between max-w-[1120px]
                       max-lg:flex-col max-lg:items-center max-lg:max-w-none
                   ">
                        <div className="max-w-[615px] max-lg:text-center">
                            <h4 className="font-semibold text-[16px] leading-[20px] text-[#FF64AE]">Our Gallery</h4>
                            <h1 className="font-semibold text-[36px] leading-[45px] text-[#091156] pt-[11px] -tracking-[0.2px]">Check out the collection pictures from our clinic</h1>
                        </div>
                        <div className="max-w-[407px]
                        max-lg:max-w-none max-lg:text-center
                        ">
                            <p className="text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8B8B8B] pt-[30px] ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between pt-[90px]
                       max-xl:justify-center
                       max-xl:gap-[30px]
                   
                    ">
                        <img src={img_gallery1} alt="abc"></img>
                        <img src={img_gallery2} alt="abc"></img>
                        <img src={img_gallery3} alt="abc"></img>
                    </div>

                    <div className="flex flex-wrap justify-between pt-[38px]
                       max-xl:justify-center
                       max-xl:gap-[30px]
                   
                    ">
                        <img src={img_gallery4} alt="abc"></img>
                        <img src={img_gallery5} alt="abc"></img>
                        <img src={img_gallery6} alt="abc"></img>
                    </div>

                    <div className="flex flex-wrap justify-between pt-[38px]
                       max-xl:justify-center
                       max-xl:gap-[30px]
                   
                    ">
                        <img src={img_gallery7} alt="abc"></img>
                        <img src={img_gallery8} alt="abc"></img>
                        <img src={img_gallery9} alt="abc"></img>
                    </div>

                    <div className="max-w-[660px] pt-[65px]
                     max-lg:flex-col max-lg:items-center max-lg:max-w-none
                       max-lg:pl-[15px] max-lg:pr-[15px]
                    ">
                        <p className="font-normal text-[16px] leading-[24px] tracking-[1.6px] text-[#8B8B8B]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim, <span className="font-semibold text-[16px] leading-[24px] tracking-[1.6px] text-[#091156]">our teams</span>.</p>
                    </div>
                </div>

                <div className="h-[628px] bg-no-repeat 2xl:bg-cover" style={{ backgroundImage: `url(${bg_gallery})` }}>
                    <div className="max-w-[1188px] pl-[24px] pr-[24px] text-center mx-auto pt-[174px]
                  max-lg:pl-[15px] max-lg:pr-[15px]
                    ">
                        <h1 className="font-semibold text-[36px] leading-[45px] text-[#ffffff]">Watch the video tour</h1>
                        <p className="font-normal text-[16px] leading-[24px] tracking-[1.6px] text-[#CACACA] pt-[18px] max-w-[555px] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                    </div>
                    <div className="flex justify-center items-center pt-[31px]">
                        <img src={play_button} alt="abc"></img>
                    </div>
                </div>

                <div className="max-w-[1188px] flex justify-between mx-auto pt-[122px] pb-[30px] pl-[24px] pr-[24px]
                 max-lg:flex-col max-lg:items-center max-lg:max-w-none
                ">
                    <div className="max-w-[642px]
                     max-lg:flex-col max-lg:items-center max-lg:max-w-none max-lg:text-center
                    ">
                        <h4 className="font-semibold text-[16px] leading-[20px] text-[#FF64AE]">Get The Quota</h4>
                        <h1 className="font-semibold text-[36px] leading-[45px] text-[#091156] pt-[12px] -tracking-[0.2px]">Want to be handled by our professional team immediately?</h1>
                        <p className="font-normal text-[16px] leading-[24px] tracking-[1.6px] max-w-[561px] pt-[22px] max-lg:max-w-none">Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</p>
                    </div>

                    <div className="pr-[56px] pt-[66px]
                    max-md:pr-0
                    ">
                        <button className="w-[316px] h-[58px]  font-semibold text-[16px] leading-[24px] tracking-[1.6px] text-[#ffffff] bg-[#FF64AE]  rounded-[50px]
                        max-md:w-[200px]
                        
                        ">
                            Make an Appointment
                        </button>
                    </div>
                </div>

                
            </div>

            </LayoutLanding1>
            
        </>
    )
}

export default Gallery;