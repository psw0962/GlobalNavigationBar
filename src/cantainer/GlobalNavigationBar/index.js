import React from "react";
import styled from "styled-components";
import Container from "../../component/Container";
import InlineInnerBox from "../../component/InlineInnerBox";

const GlobalNavigationBar = () => {
  return (
    <NavContainer>
      <InlineInnerBox style={{ display: "inline-flex", justifyContent: "space-around" }}>
        <div style={{ width: "100px" }}>wanted</div>

        <Categorybox>
          <div>탐색</div>
          <div>커리어 성장</div>
          <div>직군별 연봉</div>
          <div>이력서</div>
          <div>매치업</div>
          <div>프리랜서</div>
        </Categorybox>

        <IconBox>
          <div>돋보기</div>
          <div>알림</div>
          <div>마이페이지</div>
        </IconBox>

        <EnterpriseServiceButton>기업서비스</EnterpriseServiceButton>
      </InlineInnerBox>
    </NavContainer>
  );
};

export default GlobalNavigationBar;

const NavContainer = styled(Container)`
  margin-top: 30px;
`;

const Categorybox = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 300px;
`;

const IconBox = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 200px;
`;

const EnterpriseServiceButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 200px;
`;
