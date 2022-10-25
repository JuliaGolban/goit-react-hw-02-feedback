import styled from 'styled-components';
import { theme } from './theme';

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: ${props => getHeadingStyles(props.level)};
  font-weight: 700;
  color: rgb(0, 0, 0);
`;

const getHeadingStyles = (level = theme.fontSizes.m) => {
  return theme.fontSizes[level];
};
