import { memo } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { ITheme } from 'styled-components';

import AskQuestionItem from './components/AskQuestionItem';
import AskQuestionItem1 from './components/AskQuestionItem.Item1';
import AskQuestionItem2 from './components/AskQuestionItem.Item2';
import AskQuestionItem3 from './components/AskQuestionItem.Item3';
import AskQuestionItem4 from './components/AskQuestionItem.Item4';
import AskQuestionItem5 from './components/AskQuestionItem.Item5';
import AskQuestionItem6 from './components/AskQuestionItem.Item6';

const Styled = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: row;

  .title {
    text-align: center;
  }

  .leftView {
    display: flex;
    flex: 1;
    flex-direction: column;

    .title {
      text-align: left;
    }
  }

  .rightView {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSmall`
      flex-direction: column;
  `}

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
      flex-direction: column;
  `}
`;

const ValidatorAskedQuestion = () => {
  const history = useHistory();
  return (
    <Styled>
      <div className="leftView">
        <p className="title fw-medium main-title-text">Frequently Asked Questions</p>
        <p className="sub-title sub-title-text">See all question</p>
      </div>
      <div className="rightView">
        <AskQuestionItem
          title="What does it mean for Nodes to power privacy?"
          subItem={<AskQuestionItem1 />}
        />
        <AskQuestionItem
          title="How do Nodes make money?"
          subItem={<AskQuestionItem2 />}
        />
        <AskQuestionItem
          title="What does it mean for Nodes to power privacy?"
          subItem={<AskQuestionItem1 />}
        />
        <AskQuestionItem
          title="In which currency do Nodes earn?"
          subItem={<AskQuestionItem3 />}
        />

        <AskQuestionItem
          title="Is overstaking permitted?"
          subItem={<AskQuestionItem4 />}
        />

        <AskQuestionItem
          title="What does the lifecycle of a Node look like?"
          subItem={<AskQuestionItem5 />}
        />
        <AskQuestionItem
          title="Is there slashing on the network?"
          subItem={<AskQuestionItem6 />}
        />
      </div>
    </Styled>
  );
};

export default memo(ValidatorAskedQuestion);
