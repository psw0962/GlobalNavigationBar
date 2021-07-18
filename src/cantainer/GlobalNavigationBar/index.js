import React, { useState } from "react";
import styled from "styled-components";

// Components
import Container from "../../component/Container";
import * as Text from "../../component/Text";
import InlineInnerBox from "../../component/InlineInnerBox";
import SearchTab from "./SearchTab";

// Images
import logo from "../../static/images/logo.svg";
import search from "../../static/images/search.svg";
import bell from "../../static/images/bell.svg";

const GlobalNavigationBar = () => {
  const [searchCategory, setSearchCategory] = useState("none");

  return (
    <>
      {/* GlobalNavBar */}
      <Container style={{ marginTop: "20px" }}>
        <InlineInnerBox style={{ width: "1200px" }}>
          <img src={logo} alt="logo" style={{ width: "90px" }} />

          <Categorybox>
            <SearchCategoryDiv onMouseEnter={() => setSearchCategory("inline-block")} onMouseLeave={() => setSearchCategory("none")}>
              <CategoryText>탐색</CategoryText>
            </SearchCategoryDiv>

            <CategoryDiv>
              <CategoryText>커리어 성장</CategoryText>
            </CategoryDiv>

            <CategoryDiv>
              <CategoryText>직군별 연봉</CategoryText>
            </CategoryDiv>

            <CategoryDiv>
              <CategoryText>이력서</CategoryText>
            </CategoryDiv>

            <CategoryDiv>
              <CategoryText>매치업</CategoryText>
            </CategoryDiv>

            <CategoryDiv>
              <CategoryText>프리랜서</CategoryText>
            </CategoryDiv>
          </Categorybox>

          <div style={{ display: "inline-flex", justifyContent: "space-around", marginTop: "5px" }}>
            <IconBox>
              <img src={search} alt="search" style={{ cursor: "pointer" }} />
              <img src={bell} alt="bell" style={{ cursor: "pointer" }} />
              <MypageDiv style={{ cursor: "pointer" }} />
            </IconBox>

            <PartitionDiv />
            <EnterpriseServiceButton>기업 서비스</EnterpriseServiceButton>
          </div>
        </InlineInnerBox>
      </Container>

      {/* Search Tab */}
      <SearchTab searchCategory={searchCategory} />
    </>
  );
};

export default GlobalNavigationBar;

const Categorybox = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 30px;
  margin-top: 5px;
`;

const IconBox = styled.div`
  display: inline-flex;
  justify-content: space-around;
  width: 160px;
  height: 30px;
`;

const EnterpriseServiceButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100px;
  height: 30px;
  margin-left: 10px;
  border: 1px solid #e5e6e7;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 400;
  background-color: white;
`;

const MypageDiv = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #ecedee;
  border-radius: 15px;
`;

const PartitionDiv = styled.div`
  display: block;
  content: "";
  width: 1px;
  height: 13px;
  background-color: #e1e2e3;
  margin: 10px 20px 10px 20px;
}
`;

const CategoryDiv = styled.div`
  :hover {
    border-bottom: solid #3366ff;
  }
`;

const SearchCategoryDiv = styled.div`
  :hover {
    border-bottom: solid #3366ff;
  }
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
