import React, { Fragment } from 'react';
import SectionWrapper from '../../components/common/section_wrapper';
import NavbarFooter from '../../components/common/navbar_footer';
import { Heading } from 'react-bulma-components';
import Favorites from '../../components/favorites';

const FavoritesScreen = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <Heading className='has-text-centered has-text-white'>Favoritos</Heading>
        <Favorites />
      </SectionWrapper>
      <NavbarFooter />
    </Fragment>
  );
}
export default FavoritesScreen;