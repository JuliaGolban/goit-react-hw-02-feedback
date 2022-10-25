import React from 'react';
import { Section } from '../../constants/Section.styled';
import {Title} from '../../constants/Title.styled'
import { Wrapper, GoodBtn, NeutralBtn, BadBtn } from './Reviews.styled';

export const Reviews = ({onGoodBtnClick, onNeutralBtnClick, onBadBtnClick}) => {
    return (
            <Section>
                <Title as='h2' level='l'>Please leave feedback</Title>
                <Wrapper>
                    <GoodBtn onClick={onGoodBtnClick}>Good</GoodBtn>
                    <NeutralBtn onClick={onNeutralBtnClick}>Neutral</NeutralBtn>
                    <BadBtn onClick={onBadBtnClick}>Bad</BadBtn>
                </Wrapper>
            </Section>
    );
}