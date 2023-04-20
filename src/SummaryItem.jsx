import styled from "styled-components";

function SummaryItem({ icon, category, score, color, bgColor }) {
  return (
    <Wrapper bgColor={bgColor} textColor={color}>
      <div className="label">
        <img src={icon} alt="" role="presentation" />
        <p className="category">{category}</p>
      </div>
      <p className="score">
        <span>{score} </span>
        <span> /100</span>
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  background-color: ${(props) => props?.bgColor || "white"};
  color: ${(props) => props?.textColor || "white"};
  padding: 1rem;
  border-radius: 12px;

  .label {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .score {
    color: hsl(224, 30%, 27%);

    span:first-child {
      font-weight: 700;
    }

    span:last-child {
      opacity: 0.5;
    }
  }
`;

export default SummaryItem;
