import styled from 'styled-components';

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  .read-more {
    margin-top: 15px;
    color: white;
    :hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
`;

const AskQuestionItem6 = () => {
  return (
    <Styled>
      <p className="description">
        Yes, there is a slashing mechanism to help increase reliability and stablability
        for the network. Inoperative and misbehaving nodes in the committee will get
        slashed and be replaced with better nodes. If a node is slashed, the original
        1,750 staked PRV would be returned back to the node operator and they can re-stake
        it at a later time. Also, rewards from slashed nodes will be distributed to
        remaining nodes in a committee
      </p>
      <div
        className="read-more description"
        onClick={() => {
          window.open(
            'https://we.incognito.org/t/introducing-slashing-v2/13578',
            '_blank',
          );
        }}>
        Read more on Sharding
      </div>
    </Styled>
  );
};

export default AskQuestionItem6;
