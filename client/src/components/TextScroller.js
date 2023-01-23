/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import styled from "styled-components";

const MovingText = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    background-color: var(--black);
    font-weight: 700;
    font-size: 30px;
    -webkit-text-stroke: 1px white;

    & .bold {
        color: var(--white);
    }
`;

export const TextScroller = ({ children }) => {
    return (
        <MovingText>
            <marquee scrollamount="10">{children}</marquee>
        </MovingText>
    );
};
