import React from 'react';
import { Section } from '../../constants/Section.styled';
import {Title} from '../../constants/Title.styled'
import { List, Item,ItemGeneral } from './Statistics.styled';

export const Statistics = () => {
    return (
            <Section>
                <Title as='h2' level='l'>Statistics</Title>
                <List>
                    <Item>Good:</Item>
                    <Item>Neutral:</Item>
                    <Item>Bad:</Item>
                    <ItemGeneral>Total:</ItemGeneral>
                    <ItemGeneral>Positive feedback:</ItemGeneral>
                </List>
            </Section>
    );
}