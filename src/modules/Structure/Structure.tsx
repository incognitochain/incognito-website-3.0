import Section1 from '@modules/Structure/features/Structure.section1';
import React from 'react';

import { Styled } from './Structure.styled';

const Structure = () => {
  return (
    <Styled>
      <Section1 />
    </Styled>
  );
};

export default React.memo(Structure);
