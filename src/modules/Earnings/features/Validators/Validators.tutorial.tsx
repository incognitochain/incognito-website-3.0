import { memo } from 'react';
import styled from 'styled-components';

const Styled = styled.div`
  margin-top: 140px;
  display: flex;
  flex-direction: column;

  .title {
    text-align: center;
  }

  .sub {
    color: white;
    margin-top: 15px;
    text-align: center;
  }

  .video {
    margin-top: 20px;
    border-radius: 16px;
    width: 100%;
    height: 700px;
    max-height: 700px;
  }
`;

const ValidatorTutorial = () => {
  return (
    <Styled>
      <p className="title fw-medium main-title-text">Tutorial</p>
      <p className="description sub">Incognito Youtube chanel</p>

      {/* The easiest way to get the correct link is to right-click on the YouTube video and select copy embed code. */}
      <iframe
        title="Incognito"
        className="video"
        src="https://www.youtube.com/embed/Vz7cm01SiEk"
      />
    </Styled>
  );
};

export default memo(ValidatorTutorial);
