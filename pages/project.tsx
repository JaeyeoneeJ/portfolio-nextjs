import ProgressiveImg from "@/components/ProgressiveImg";
import ProjectModal from "@/components/ProjectModal";
import Seo from "@/components/Seo";
import { projectsData } from "@/data/data";
import { IProjectData, projectData, projectState } from "@/recoil/atoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";

const Ctn = styled.div`
  position: relative;
  overflow-y: auto;
  height: calc(100% - 73px);
  @media screen and (max-width: 1180px) {
    height: calc(100% - 53px);
  }
`;

const Wrapper = styled.div`
  overflow-y: auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media screen and (max-width: 1180px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 880px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  border-radius: 10px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover {
    .filter {
      scale: 1.05;
      -webkit-filter: grayscale(0);
      filter: grayscale(0);
    }
  }
`;

const ImgBox = styled.div`
  overflow: hidden;
  border-bottom: 1px solid ${(props) => props.theme.gray.lighter};
  img {
    aspect-ratio: 16/9;
    width: 100%;
    object-fit: cover;
    display: block;
  }
`;

const Filter = styled.div`
  transition: all 0.3s;
  width: 100%;
  height: 100%;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
`;

const Textarea = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Text = styled.p<{ fontSize?: string }>`
  text-align: ${(props) => (props.fontSize ? "center" : "inherits")};
  color: ${(props) => (props.fontSize ? props.theme.pointColor : "inherits")};
  font-weight: ${(props) => (props.fontSize ? 600 : 400)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  @media screen and (max-width: 1180px) {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
  }
`;

const projects = projectsData;

export default function Project() {
  const [isClickedProject, setIsClickedProject] = useRecoilState(projectState);
  const setIsprojectData = useSetRecoilState(projectData);
  const onProjectView = (file: IProjectData) => {
    setIsClickedProject(true);
    setIsprojectData(file);
  };
  return (
    <>
      <Seo title="project" />
      {isClickedProject && <ProjectModal />}
      <Ctn>
        <Wrapper>
          {projects.map((project, index) => (
            <Card key={index} onClick={() => onProjectView(project)}>
              <ImgBox>
                <Filter className="filter">
                  <ProgressiveImg
                    maxWidth="100%"
                    src={`img/projects/${project.src}.png`}
                    placeholderSrc={`img/projects/tiny_${project.src}.png`}
                  />
                </Filter>
              </ImgBox>
              <Textarea>
                <Text fontSize="20px">{project.title}</Text>
                <Text>{project.description}</Text>
              </Textarea>
            </Card>
          ))}
        </Wrapper>
      </Ctn>
    </>
  );
}
