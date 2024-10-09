/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import styled from '@emotion/styled';


export const List = styled.li`
${tw`pt-[10px]`}

padding: 5.5px 0;

padding-left:5px;

&::before{

    content: "";
    border-color: transparent #d7dbff;
    border-style: solid;
    border-width: 0.25em 0 0.25em 0.25em;
    display: inline-block;
    margin-right: 12px;
}
`;


export const List1 = styled.li`
// ${tw`pt-[10px]`}

padding: 5.5px 0;

padding-right:10px;



&::before{

    content: "";
    border-color: transparent #d7dbff;
    border-style: solid;
    border-width: 0.25em 0 0.25em 0.25em;
    display: inline-block;
    margin-right: 12px;
}
`;