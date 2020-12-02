import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {listData} from '../../data/dataStore';
import {pages} from '../../data/dataStore';
class Faq extends React.Component {

  render() {
    const {title, image} = listData;
    const {titlePage, descriptionPage} = pages.faq;
    return (
      <Container>
        <h2>{titlePage}</h2>
        <Hero titleText={title} image={image}/>
        <p>{descriptionPage}</p>
      </Container>

    );
  }
}
export default Faq;
