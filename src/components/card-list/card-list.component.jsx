import './card-list.styles.css';

import React from 'react';

export const CardList = props => {
  return <div className='card-list'> {props.children} </div>;
};
