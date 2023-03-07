import styled from "styled-components";
import { AiFillTrophy, AiFillBulb, AiOutlineFileImage } from "react-icons/ai";
import { useSetRecoilState } from "recoil";
import { IImgName, imgName, imgState } from "../recoil/atoms";
import { awardsData, careersData, educationsData } from "@/data/data";

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
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.gray.lighter};
  &:last-child {
    border-bottom: none;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media screen and (max-width: 500px) {
    flex-direction: row;
  }
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
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
  @media screen and (max-width: 500px) {
    width: auto;
  }
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
  flex-wrap: wrap;
  gap: 5px;
`;

const BorderBoxContent = styled.p<{ color: string }>`
  background-color: ${(props) => props.color};
  width: auto;
  border-radius: 5px;
  padding: 2px 6px;
  color: gray;
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

interface IProps {
  isCareer: boolean;
  isAwards: boolean;
  isEducation: boolean;
}

const careers = careersData;
const awards = awardsData;
const educations = educationsData;

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
            <LeftBox>
              <Duration>{career.duration}</Duration>
            </LeftBox>
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
            <LeftBox>
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
            </LeftBox>
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
            <LeftBox>
              <Duration>{education.duration}</Duration>
            </LeftBox>
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
