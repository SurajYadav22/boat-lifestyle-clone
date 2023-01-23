import LeftSection from "./LeftSection";
import RightSection from "../CartPage/RightSection";
import styled from 'styled-components';

const Container = styled.div`
   height: 1674px;
   & > div {
       height: 1674px;
   }
`;

export default function Payment () {
    return (
        <>
            <LeftSection />
            <Container>
                 <RightSection/>
            </Container>  
        </>
    );
}