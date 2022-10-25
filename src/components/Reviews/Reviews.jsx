import React from 'react';
import { Section } from '../../constants/Section.styled';
import {Title} from '../../constants/Title.styled'
import { Wrapper, GoodBtn, NeutralBtn, BadBtn } from './Reviews.styled';

export const Reviews = () => {
    return (
            <Section>
                <Title as='h2' level='l'>Please leave feedback</Title>
                <Wrapper>
                    <GoodBtn>Good</GoodBtn>
                    <NeutralBtn>Neutral</NeutralBtn>
                    <BadBtn>Bad</BadBtn>
                </Wrapper>
            </Section>
    );
}