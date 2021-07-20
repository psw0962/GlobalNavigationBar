import React from "react";
import styled from "styled-components";
import Container from "../../../component/Container";
import * as Text from "../../../component/Text";

// Images
import search from "../../../static/images/search.svg";
import bell from "../../../static/images/bell.svg";
import menu from "../../../static/images/menu.svg";

const MobileGlobalNavigationBar = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Container style={{ marginTop: "20px", display: "flex", justifyContent: "space-around" }}>
          <Categorybox>
            <div>
              <CategoryText>탐색</CategoryText>
            </div>

            <div>
              <CategoryText>커리어 성장</CategoryText>
            </div>

            <div>
              <CategoryText>직군별 연봉</CategoryText>
            </div>
          </Categorybox>

          <IconBox>
            <img src={search} alt="search" style={{ cursor: "pointer" }} />
            <img src={bell} alt="bell" style={{ cursor: "pointer" }} />
            <img src={menu} alt="bell" style={{ cursor: "menu" }} />
          </IconBox>
        </Container>
      </div>
    </>
  );
};

export default MobileGlobalNavigationBar;

const Categorybox = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 30px;
  margin-top: 5px;
`;

const CategoryText = styled(Text.FontSize18)`
  color: black;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
  cursor: pointer;
`;

const IconBox = styled.div`
  display: inline-flex;
  justify-content: space-around;
  width: 160px;
  height: 30px;
`;
