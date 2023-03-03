import styled from "styled-components";
import { AiFillTrophy, AiFillBulb, AiOutlineFileImage } from "react-icons/ai";
import { useSetRecoilState } from "recoil";
import { IImgName, imgName, imgState } from "../recoil/atoms";

const Wrapper = styled.div`
  overflow-y: auto;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  height: calc(100% - 125px);
  @media screen and (max-width: 1180px) {
    height: calc(100% - 105px);
  }
`;

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.gray.lighter};
  &:last-child {
    border-bottom: none;
  }
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const FlexRow = styled(FlexCol)`
  flex-direction: row;
  justify-content: space-between;
`;

const Duration = styled.p`
  width: 150px;
  text-align: center;
  background-color: ${(props) => props.theme.gray.lighter};
  border-radius: 5px;
  padding: 2px 6px;
  color: tomato;
  height: 20px;
`;

const Explain = styled.div`
  color: ${(props) => props.theme.black.lighter};
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 2px 6px;
`;

const Experience = styled.p`
  font-weight: 600;
`;

const UnderLine = styled.div`
  display: flex;
  gap: 5px;
`;

const BorderBoxContent = styled.p<{ color: string }>`
  background-color: ${(props) => props.color};
  width: auto;
  border-radius: 5px;
  padding: 2px 6px;
  color: gray;
  height: 20px;
`;

const Category = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const ImgIcon = styled(Category)`
  cursor: pointer;
`;

const careers = [
  {
    duration: "2020.05 ~ 2022.07",
    experience: "법인 설립 및 경영/브랜딩/마케팅 컨설팅",
    position: "대리",
    company: "다울사회적협동조합",
    location: "경기 오산시",
  },
  {
    duration: "2018.11 ~ 2020.03",
    experience: "법인 판로지원 및 도시/청년정책 연구",
    position: "연구원",
    company: "사회적협동조합 공동체세움",
    location: "충남 공주시",
  },
  {
    duration: "2017.08 ~ 2018.11",
    experience: "공모전 모음 플랫폼 '콘테스트크루' 웹서비스 런칭",
    position: "대표",
    company: "에프앤잇",
    location: "세종시",
  },
];

const awards = [
  {
    category: "activity",
    duration: "2017.08 ~ 2017.12",
    experience: "디자인융합벤처창업학교 청년창업팀 선정",
    subject: "공모전 모음 플랫폼 - 콘테스트크루",
    host: "한국디자인진흥원",
    file: {
      category: "activity",
      duration: "2017.08 ~ 2017.12",
      src: "activity_contestcrew",
      title: "Contest Crew",
      explain: "대학생 및 취업준비생의 공모전 준비를 위한 웹서비스",
    },
  },
  {
    category: "activity",
    duration: "2016.11",
    experience: "추계 학술대회 감성소재부품 심포지엄 세션 발표",
    subject: "한지의 재발견 - 캘리스톤",
    host: "대한금속재료공학회",
    file: undefined,
  },
  {
    category: "activity",
    duration: "2016.05 ~ 2016.11",
    experience: "한지 상품개발 공모전 최종선정",
    subject: "한지 신소재 개발 - 캘리스톤",
    host: "한국공예디자인문화진흥원",
    file: undefined,
  },
  {
    category: "award",
    duration: "2016.11",
    experience: "구미시 공공디자인 공모전 입선 수상",
    subject: "사고율을 줄이기 위한 중앙분리대 디자인 - Tracer",
    host: "경북 구미시",
    file: undefined,
  },
  {
    category: "award",
    duration: "2015.10",
    experience: "캡스톤디자인 경진대회 우수상",
    subject: "인지적 사용성을 고려한 전기 콘센트의 공학적 설계",
    host: "대한인간공학회",
    file: undefined,
  },
  {
    category: "award",
    duration: "2015.10",
    experience: "구미시 공공디자인 공모전 동상 수상",
    subject: "교통량을 반영한 육교 디자인 - Mobius Strip",
    host: "경북 구미시",
    file: {
      category: "award",
      duration: "2015.10",
      src: "award_mobiusStrip",
      title: "MOBIUS STRIP",
      explain:
        "구미 IC 네거리의 모습을 뫼비우스의 띠 모양으로 교통의 원활한 움직임과 미적으로 아름다움을 주는 형태의 공공디자인",
    },
  },
  {
    category: "award",
    duration: "2015.10",
    experience: "어린이디자인대상 동상 수상",
    subject: "함께 자라는 가구 - O'Tree",
    host: "대한민국어린이디자인대상",
    file: {
      category: "award",
      duration: "2015.10",
      src: "award_oTree",
      title: "O'Tree",
      explain:
        "성장기 아동을 위해 아이의 눈높이에 맞게 점점 자라나는 형태의 옷장",
    },
  },
];

const educations = [
  {
    duration: "2020.09 ~ 2022.12",
    experience: "스파르타코딩클럽 항해99, 9기",
    host: "팀스파르타",
    position: "Front-End(React)",
  },
  {
    duration: "2011.02 ~ 2017.08",
    experience: "산업공학부 디자인공학전공",
    host: "금오공과대학교",
    position: "학점 3.14",
  },
];

interface IProps {
  isCareer: boolean;
  isAwards: boolean;
  isEducation: boolean;
}

const TimelineContents = ({ isCareer, isAwards, isEducation }: IProps) => {
  const setIsClickedImg = useSetRecoilState(imgState);
  const setIsImgName = useSetRecoilState(imgName);
  const onImgView = (file: IImgName) => {
    setIsClickedImg(true);
    setIsImgName(file);
  };
  return (
    <Wrapper>
      {isCareer &&
        careers.map((career, index) => (
          <Card key={index}>
            <Duration>{career.duration}</Duration>
            <Explain>
              <Experience>{career.experience}</Experience>
              <UnderLine>
                <BorderBoxContent color="#fcf29b">
                  {career.position}
                </BorderBoxContent>
                <BorderBoxContent color="#d0e4a7">
                  {career.company}
                </BorderBoxContent>
                <BorderBoxContent color="#fcd09b">
                  {career.location}
                </BorderBoxContent>
              </UnderLine>
            </Explain>
          </Card>
        ))}
      {isAwards &&
        awards.map((award, index) => (
          <Card key={index}>
            <FlexCol>
              <Duration>{award.duration}</Duration>
              <FlexRow>
                <Category>
                  {award.category === "award" ? (
                    <AiFillTrophy size={18} color="#ffb004" />
                  ) : (
                    <AiFillBulb size={18} color="#efe702" />
                  )}
                </Category>
                {award.file && (
                  <ImgIcon onClick={() => onImgView(award.file)}>
                    <AiOutlineFileImage size={20} />
                  </ImgIcon>
                )}
              </FlexRow>
            </FlexCol>
            <Explain>
              <Experience>{award.experience}</Experience>
              <UnderLine>
                <BorderBoxContent color="#fcf29b">
                  {award.subject}
                </BorderBoxContent>
                <BorderBoxContent color="#d0e4a7">
                  {award.host}
                </BorderBoxContent>
              </UnderLine>
            </Explain>
          </Card>
        ))}
      {isEducation &&
        educations.map((education, index) => (
          <Card key={index}>
            <Duration>{education.duration}</Duration>
            <Explain>
              <Experience>{education.experience}</Experience>
              <UnderLine>
                <BorderBoxContent color="#fcf29b">
                  {education.host}
                </BorderBoxContent>
                <BorderBoxContent color="#d0e4a7">
                  {education.position}
                </BorderBoxContent>
              </UnderLine>
            </Explain>
          </Card>
        ))}
    </Wrapper>
  );
};

export default TimelineContents;
