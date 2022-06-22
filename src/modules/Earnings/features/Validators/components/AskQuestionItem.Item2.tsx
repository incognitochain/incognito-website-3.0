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

const AskQuestionItem2 = () => {
  return (
    <Styled>
      <p className="description">
        Incomes of a Node consist of 2 parts:
        <br /> - Block rewards: earn by performing consensus work, including verifying
        transactions and adding new blocks.
        <br /> - Transaction fees: earn from the transactions in a specific shard that
        Node is assigned to.
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

export default AskQuestionItem2;
