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

const AskQuestionItem3 = () => {
  return (
    <Styled>
      <p className="description">
        Nodes will earn block rewards and transaction fees which is paid in PRV.
      </p>
      <div
        className="read-more description"
        onClick={() => {
          console.log('TO DO ');
        }}>
        Read more on Sharding
      </div>
    </Styled>
  );
};

export default AskQuestionItem3;