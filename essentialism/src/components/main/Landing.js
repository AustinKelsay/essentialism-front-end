import styled from "styled-components";
import React from "react";
import { Link, Redirect } from "react-router-dom";

export const LandingContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    background: #8FCB9B;
    width: 500px;
    height: 500px;
    border-radius: 250px;
    margin: 7% auto;
`;

export const LandingTitle = styled.h1`
    font-size: 6.5rem;
    font-family: 'Vibur', cursive;
    color: #F8F8FF;
    width: 100%;
    letter-spacing: 2px;
    padding: 50px;
`;

export const ButtonLink = styled.a`
    width: 25%;
    margin: 0% 1% 10% 1%;
`;

export const LandingButton = styled.button`
    width: 100%;
    font-family: 'Vibur', cursive;
    font-size: 2rem;
    background-color: #F8F8FF;
    border: 1px solid white;
    border-radius: 20px;
    padding: 5px;
    color: #8FCB9B;

    &:hover{
        color: #5B9279;
        background-color: white;
    }
`;

const Landing = props => {
    return (
        <LandingContainer>
            <LandingTitle>essentialism</LandingTitle>
            <ButtonLink href="/login">
                <LandingButton>login</LandingButton>
            </ButtonLink>
            <ButtonLink href="/register">
                <LandingButton>register</LandingButton>
            </ButtonLink>
        </LandingContainer>
    );
};

export default Landing;