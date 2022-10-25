import React from 'react';
import PropTypes from 'prop-types';
import * as SC from '../Section/Section.styled';

export const Section = ({title ="", size, children}) => {
    return (
        <SC.Section>
            <SC.Title size={size}>{title}</SC.Title>
            {children}
        </SC.Section>)
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};