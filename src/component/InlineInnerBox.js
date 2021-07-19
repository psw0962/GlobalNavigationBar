import styled from "styled-components";

const InlineInnerBox = styled.div`
  display: inline-flex;
  justify-content: space-around;

  @media (min-width: 0px) and (max-width: 768px) {
    width: calc(100% - 28px);
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    width: 720px;
  }
  @media (min-width: 1280px) {
    width: 1200px;
  }
`;

export default InlineInnerBox;
