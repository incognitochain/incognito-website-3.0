import Section1 from '@modules/Structure/features/Structure.section1';
import Section3 from '@modules/Structure/features/Structure.section3';
import { Styled } from '@modules/Structure/Structure.styled';
import { CircleList } from '@src/components';
import { structureTranslateSelector } from '@src/configs';
import React from 'react';
import { useSelector } from 'react-redux';

const Structure = () => {
  const structureTrs = useSelector(structureTranslateSelector);

  const Factory = React.useMemo(
    () => [
      {
        title: '15M\nPRV',
        content: structureTrs.mintToDate,
        className: 'circle-margin-right',
      },
      {
        title: '2,000',
        content: structureTrs.validatorsAcross,
        className: 'circle-margin-right',
      },
      {
        title: '1,750\nPRV',
        content: structureTrs.smallFixed,
      },
    ],
    [structureTrs],
  );
  return (
    <Styled>
      <Section1 />
      <Section3 />
      <CircleList
        grid={{
          xs: 2,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 3,
        }}
        data={Factory}
      />
    </Styled>
  );
};

export default React.memo(Structure);
