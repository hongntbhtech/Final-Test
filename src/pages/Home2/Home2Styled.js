/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import styled from '@emotion/styled';


export const ServiveBoxMain = styled.div`
${tw`max-w-[261px] min-h-[303px] rounded-[22px] pl-[35px] border-[1px] border-[#E2E2E2] border-solid`}

&:hover {
    border-color: #9BA2E0; /* Thay đổi màu viền khi hover */
  }
`;

export const ImgBox = styled.img`
${tw`pt-[29px]`}
`;

export const Heading = styled.h3`
${tw`text-[18px] font-semibold leading-[22.5px] text-[#091156]  pt-[24px] -tracking-[0.2px]`}
`;

export const Paragraph = styled.p`
${tw`text-[14px] font-normal leading-[21px] text-[#8b8b8b] tracking-[1.4px] pt-[15px] `}
`;

export const Paragraph1 = styled.p`
${tw`text-[14px] font-semibold leading-[17.5px] text-[#FF64AE] pt-[16px] `}


 &::after {
    content: '>>'; /* Use Unicode arrows if needed */
    font-size: 18px; /* Adjust the size of the arrow */
    color: #FF64AE; /* Adjust color to match text */
    padding-left: 5px;
  }
`;


export const BlogBoxMain = styled.div`
${tw`max-w-[347px] min-h-[543px] rounded-[25px]`}


&:hover {
    box-shadow: 0px 0px 50px 25px #f6f7ff;
  }
`;

export const ImgBoxBlog = styled.img`
${tw`w-[100%]`}

`;


export const HeadingBlog = styled.h3`
${tw`text-[18px] font-semibold leading-[22.5px] text-[#091156]  pt-[56px] pl-[37px] pr-[10px] text-left`}

`;


export const ParagraphBlog = styled.p`
${tw`text-[14px] font-normal leading-[21px] text-[#8b8b8b] tracking-[1.4px] pt-[14px] pl-[37px] pr-[37px] text-left`}

`;

export const Button = styled.button`
${tw`text-[14px] font-semibold leading-[17.5px] text-[#FF64AE] pt-[24px]`}


 &::after {
    content: '>>'; /* Use Unicode arrows if needed */
    font-size: 18px; /* Adjust the size of the arrow */
    color: #FF64AE; /* Adjust color to match text */
    padding-left: 5px;
  }
`;