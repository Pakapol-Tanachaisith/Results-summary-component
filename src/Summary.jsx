import styled from "styled-components";
import { data } from "./data";
import SummaryItem from "./SummaryItem";

function Summary() {
  return (
    <Wrapper>
      <h2>Summary</h2>

      <ul>
        {data.map((item) => (
          <SummaryItem key={item?.category} {...item} />
        ))}
      </ul>

      <div className="btn-container">
        <button>Continue</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1.5rem;
  color: hsl(224, 30%, 27%);
  background-color: white;
  border-radius: 35px;

  h2 {
    font-weight: 800;
    font-size: 1.25rem;
  }

  ul {
    list-style: none;
  }

  .btn-container {
    margin: 2.5rem 0;

    button {
      width: 100%;
      background-color: hsl(224, 30%, 27%);
      color: white;
      border-radius: 35px;
      padding: 16px 0;
      cursor: pointer;
    }
  }
`;
export default Summary;
