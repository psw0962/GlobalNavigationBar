import styled from "styled-components";

// Components
import Container from "../../component/Container";
import InlineInnerBox from "../../component/InlineInnerBox";
import ColumnInnerBox from "../../component/ColumnInnerBox";

// Images
import angle from "../../static/images/angle.svg";

const SearchTab = ({ searchCategory }) => {
  const sales = ["기업영업", "외부영업", "영업 관리자", "기술영업", "주요고객 담당자", "솔루션 컨설턴트", "해외영업"];
  const media = ["콘텐츠 크리에이터", "PD", "영상 편집가", "에디터", "비디오 제작", "작가", "출판 기획자"];
  const hr = ["인사담당", "리크루터", "조직문화", "평가/보상", "헤드헌터", "HRD", "HRBP"];
  const gameProduction = ["게임 기획자", "게임 그래픽 디자이너", "모바일 게임 개발자", "게임 클라이언트 개발자", "게임 아티스트", "유니티 개발자", "게임 서버 개발자"];
  const finance = ["회계담당", "재무 담당자", "IR", "투자/증권", "재무 분석가", "애널리스트", "내부통제 담당자"];
  const etc = ["엔지니어링/설계", "물류/무역", "제조/생산", "의료/제약/바이오", "교육", "법률/법집행기관", "식/음료", "건설/시설", "공공/복지"];

  return (
    <>
      <CustomContainer style={{ display: searchCategory ? "inline-block" : "none" }}>
        <InlineInnerBox style={{ width: "1200px" }}>
          {/* sales */}
          <CustomColumnInnerBox>
            <CustomUl>
              <UlTitle>
                영업
                <img src={angle} alt="angle" />
              </UlTitle>

              {sales.map((v) => (
                <CustomLi>{v}</CustomLi>
              ))}
              <ViewMoreDiv>
                <div>더보기</div>
                <img src={angle} alt="angle" />
              </ViewMoreDiv>
            </CustomUl>
          </CustomColumnInnerBox>

          {/* media */}
          <CustomColumnInnerBox>
            <CustomUl>
              <UlTitle>
                미디어
                <img src={angle} alt="angle" />
              </UlTitle>

              {media.map((v) => (
                <CustomLi>{v}</CustomLi>
              ))}
              <ViewMoreDiv>
                <div>더보기</div>
                <img src={angle} alt="angle" />
              </ViewMoreDiv>
            </CustomUl>
          </CustomColumnInnerBox>

          {/* hr */}
          <CustomColumnInnerBox>
            <CustomUl>
              <UlTitle>
                인사
                <img src={angle} alt="angle" />
              </UlTitle>

              {hr.map((v) => (
                <CustomLi>{v}</CustomLi>
              ))}
              <ViewMoreDiv>
                <div>더보기</div>
                <img src={angle} alt="angle" />
              </ViewMoreDiv>
            </CustomUl>
          </CustomColumnInnerBox>

          {/* gameProduction */}
          <CustomColumnInnerBox>
            <CustomUl>
              <UlTitle>
                게임 제작
                <img src={angle} alt="angle" />
              </UlTitle>

              {gameProduction.map((v) => (
                <CustomLi>{v}</CustomLi>
              ))}
              <ViewMoreDiv>
                <div>더보기</div>
                <img src={angle} alt="angle" />
              </ViewMoreDiv>
            </CustomUl>
          </CustomColumnInnerBox>

          {/* finance */}
          <CustomColumnInnerBox>
            <CustomUl>
              <UlTitle>
                금융
                <img src={angle} alt="angle" />
              </UlTitle>

              {finance.map((v) => (
                <CustomLi>{v}</CustomLi>
              ))}
              <ViewMoreDiv>
                <div>더보기</div>
                <img src={angle} alt="angle" />
              </ViewMoreDiv>
            </CustomUl>
          </CustomColumnInnerBox>

          {/* etc */}

          <CustomUl>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {etc.map((v) => (
                <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", fontWeight: "bold" }}>
                  {v}
                  <img src={angle} alt="angle" />
                </li>
              ))}
            </div>
          </CustomUl>
        </InlineInnerBox>
      </CustomContainer>
    </>
  );
};

export default SearchTab;

const CustomContainer = styled(Container)`
  margin-top: 20px;
`;

const CustomColumnInnerBox = styled(ColumnInnerBox)`
  width: 90px;
`;

const CustomUl = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const CustomLi = styled.li`
  margin-bottom: 7px;
  color: #b3b3b3;
  font-size: 14px;
  font-weight: bold;
`;

const UlTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: bold;
`;

const ViewMoreDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7px;
  color: #b3b3b3;
  font-size: 12px;
  font-weight: bold;
`;
