import linkImg from '@images/link-icon.png';
import structure1 from '@images/structure-1.png';
import structure2 from '@images/structure-2.png';
import structure3 from '@images/structure-3.png';
import structure4 from '@images/structure-4.png';
import { structureTranslateSelector } from '@src/configs';
import { Col, Row } from 'antd';
import React from 'react';
import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';
import { Image } from 'rebass';
import styled, { ITheme } from 'styled-components';

interface IFactory {
  title: string;
  desc: string;
  linkText: string;
  image: any;
  isRevert?: boolean;
  link: string;
}

const Styled = styled(Row)`
  padding-top: 120px;
  padding-bottom: 60px;
  .title {
    font-weight: 600;
    font-size: 40px;
    line-height: 54px;
    letter-spacing: 0.01em;
  }
  .desc {
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.01em;
    margin-top: 16px;
  }
  .link-text {
    color: ${({ theme }) => theme.text3};
    cursor: pointer;
    margin-top: 24px;
    text-align: left;
  }
  .section3-item {
    padding-bottom: 60px;
  }
  .section3-title {
    font-size: 64px;
    line-height: 70px;
    white-space: pre-wrap;
    text-align: center;
    margin-bottom: 60px;
    width: 100%;
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        padding-top: 40px;
        .title {
            text-align: center;
            font-weight: 600;
            font-size: 28px;
            line-height: 38px;
        }
        .desc {
            text-align: center;
            font-size: 16px;
            line-height: 24px;
        }
        .link-text {
            text-align: center;
            font-size: 16px;
            line-height: 24px;
        }
        .section3-title {
            font-size: 34px;
            line-height: 44px;
            white-space: pre-wrap;
            margin-bottom: 40px;
        }
  `}
`;

const Item = React.memo(({ image, title, desc, linkText, isRevert, link }: IFactory) => {
  const _Image = React.useMemo(
    () => (
      <Col xs={24} lg={8}>
        <Image className="image" src={image} alt="structure" />
      </Col>
    ),
    [],
  );
  const _Content = React.useMemo(
    () => (
      <Col xs={24} xxl={10} lg={12}>
        <p className="title">{title}</p>
        <p className="desc text2">{desc}</p>
        <a className="link-text fs-supermedium" href={link}>
          {` ${linkText}`}
          <img
            src={linkImg}
            style={{ width: 18, height: 'auto', marginLeft: 5 }}
            alt="link-icon"
          />
        </a>
      </Col>
    ),
    [],
  );
  if (isMobile) {
    return (
      <Row justify="space-between" align="middle" className="section3-item">
        {_Image}
        {_Content}
      </Row>
    );
  }
  return (
    <Row justify="space-between" align="middle" className="section3-item">
      {isRevert ? _Content : _Image}
      {isRevert ? _Image : _Content}
    </Row>
  );
});

const Section3 = () => {
  const structureTrs = useSelector(structureTranslateSelector);

  const Factory = React.useMemo<IFactory[]>(
    () => [
      {
        title: structureTrs.privacyByDesign,
        desc: structureTrs.privacyByDesignDesc,
        linkText: structureTrs.privacyByDesignMore,
        image: structure1,
        isRevert: false,
        link: 'https://we.incognito.org/t/sending-cryptocurrencies-confidentially-ring-signature-homomorphic-commitment-and-zero-knowledge-range-proofs/170',
      },
      {
        title: structureTrs.privacyForEvery,
        desc: structureTrs.privacyForEveryDesc,
        linkText: structureTrs.privacyForEveryMore,
        image: structure2,
        isRevert: true,
        link: 'https://we.incognito.org/t/shielding-cryptocurrencies-turning-any-cryptocurrency-into-a-privacy-coin/83',
      },
      {
        title: structureTrs.privacyAtScale,
        desc: structureTrs.privacyAtScaleDesc,
        linkText: structureTrs.privacyAtScaleMore,
        image: structure3,
        isRevert: false,
        link: 'https://we.incognito.org/t/scaling-blockchain-privacy-with-dynamic-sharding/169',
      },
      {
        title: structureTrs.privacyFuel,
        desc: structureTrs.privacyFuelDesc,
        linkText: structureTrs.privacyFuelMore,
        image: structure4,
        isRevert: true,
        link: 'https://we.incognito.org/t/network-incentive-privacy-prv-mining-distribution/172',
      },
    ],
    [],
  );

  return (
    <Styled align="middle" justify="space-between" className="default-padding-horizontal">
      <p className="fw-medium section3-title">
        {`Privacy infrastructure\n for the digital economy.`}
      </p>
      {Factory.map((item) => (
        <Item key={item.title} {...item} />
      ))}
    </Styled>
  );
};

export default React.memo(Section3);
