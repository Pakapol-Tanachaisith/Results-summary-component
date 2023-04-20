import styled from "styled-components";
import Result from "./Result";
import Summary from "./Summary";

function App() {
  return (
    <Wrapper>
      <div className="container">
        <Result />
        <Summary />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  max-width: 850px;
  margin: auto;

  .container {
    display: grid;
    grid-template-columns: 1fr;
    background-color: white;
    border-radius: 35px;
  }

  @media (width > 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    .container {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
export default App;
