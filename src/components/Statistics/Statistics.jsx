import React from 'react';
// import React, { Component } from 'react';
import { Section } from '../../constants/Section.styled';
import {Title} from '../../constants/Title.styled'
import { List, Item,ItemGeneral } from './Statistics.styled';

export const Statistics = ({good, neutral, bad, total, positive}) => {
    return (
            <Section>
                <Title as='h2' level='l'>Statistics</Title>
                <List>
                    <Item>Good: {good}</Item>
                    <Item>Neutral: {neutral}</Item>
                    <Item>Bad: {bad}</Item>
                    <ItemGeneral>Total: {total}</ItemGeneral>
                    <ItemGeneral>Positive feedback: {positive}</ItemGeneral>
                </List>
            </Section>
    );
}

// export class Statistics extends Component {
//     static defaultProps = {
//         good: 0,
//         neutral: 0,
//         bad: 0,
//         initialValue: 0,
//     };

//     state = {
//         good: this.props.good,
//         neutral: this.props.neutral,
//         bad: this.props.bad,
//     }

//     handleGoodReviews = () => {
//         this.setState(prevState => ({
//             good: prevState.good +1,
//         }))
//     }

//     handleNeutralReviews = () => {
//         this.setState(prevState => ({
//             neutral: prevState.neutral +1,
//         }))
//     }

//     handleBadReviews = () => {
//         this.setState(prevState => ({
//             bad: prevState.bad +1,
//         }))
//     }

//     render() {
//         const { good, neutral, bad } = this.props;
//         return (
//             <Section>
//                 <Title as='h2' level='l'>Statistics</Title>
//                 <List>
//                     <Item>Good: {good}</Item>
//                     <Item>Neutral: {neutral}</Item>
//                     <Item>Bad: {bad}</Item>
//                     <ItemGeneral>Total:</ItemGeneral>
//                     <ItemGeneral>Positive feedback:</ItemGeneral>
//                 </List>
//             </Section>
//         );
//     }
// }