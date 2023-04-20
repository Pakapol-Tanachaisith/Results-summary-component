import styled from "styled-components";

function Result() {
  return (
    <Wrapper>
      <h2 className="title">Your Result</h2>

      <div className="score-container">
        <div>
          <p className="score">76</p>
          <p>of 100</p>
        </div>
      </div>

      <div>
        <p className="verdict">Great</p>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-image: linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%));
  color: var(--light-lavender);
  text-align: center;
  padding: 2.5rem;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 400px;

  .title {
    font-size: 18px;
    margin-bottom: 10px;
    font-size: 1.25rem;
  }

  .score-container {
    margin: 1.5rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 150px;
    border-radius: 50%;

    background-image: linear-gradient(
      hsla(256, 72%, 46%, 1),
      hsla(241, 72%, 46%, 0)
    );

    .score {
      font-size: 3rem;
      font-weight: bold;
      color: white;
      margin-bottom: 4px;
    }
  }

  .verdict {
    font-size: 1.5rem;
    color: white;
    font-weight: bold;
    margin-bottom: 24px;
  }

  @media (width >= 375px) {
    border-radius: 35px;
    min-height: 450px;
  }
`;
export default Result;
