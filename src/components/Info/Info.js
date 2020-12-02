import React from 'react';
import Container from '../Container/Container';
import {pages} from '../../data/dataStore';
import Hero from '../Hero/Hero.js';
import {listData} from '../../data/dataStore';

class Info extends React.Component {
  render() {
    const {title, image} = listData;
    const {titlePage, descriptionPage} = pages.info;
    return (
      <Container>
        <h2>{titlePage}</h2>
        <Hero titleText={title} image={image}/>
        <p>{descriptionPage}</p>
      </Container>

    );
  }
}
export default Info;
