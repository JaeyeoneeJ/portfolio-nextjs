import { useSetRecoilState } from "recoil";
import styled from "styled-components";
// import { IProjectData, projectData, projectState } from "../atoms";
// import ProgressiveImg from "../Components/ProgressiveImg";

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
  /* background-color: green; */
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

const projects = [
  {
    title: "개인 포트폴리오",
    src: "project_portfolio",
    description: "프론트엔드 개발자 포트폴리오 웹사이트 개발",
    overview:
      "프론트엔드 개발자로서의 첫 포트폴리오로 보드 느낌의 깔끔함을 메인 컨셉으로 잡은 프로젝트입니다.",
    experience: [
      "라이브러리 없이 React Hook을 활용하여 타이핑 모션(타이핑 및 삭제)으로 메인 페이지 구현",
      "외부 라이브러리 없이 리액트에서 이미지를 점진적으로 로드(프로그래시브 이미지)하는 기능 구현",
      "framer-motion을 사용하여 animation 구현",
      "Project의 사용 기술 스텍을 hsl로 채도와 명도를 고정해 hue 값만을 조절하여 랜덤한 컬러 구현",
      "Notion 느낌을 주기 위해 단어 블럭화",
    ],
    duration: "2023.02 ~ 2023.02(1주)",
    isTeam: undefined,
    skillStack: [
      "typescript",
      "react",
      "styled-components",
      "vercel",
      "recoil",
      "framer-motion",
    ],
    link: {
      website: "https://portfolio-jaeyeoneej.vercel.app/",
      github: "https://github.com/JaeyeoneeJ/portfolio",
      youtube: undefined,
    },
  },
  {
    title: "NETFLIX CLONE",
    src: "project_netflixClone",
    description: "animate에 중점을 두고 넷플릭스를 클론한 프로젝트",
    overview:
      "animate에 중점을 두고 넷플릭스를 클론한 프로젝트로 'the movie DB'에서 data를 fetching하고 framer-motion 라이브러리를 사용하여 animation을 구현하였습니다.",
    experience: [
      "fetching한 데이터를 캐싱하여 효율적으로 관리하기 위해 react-query를 적용",
      "Slider의 영화 등의 id가 중복되어 발생하는 문제(animate 오류 등)를 해결하기 위해 unique한 id를 새로 부여하고 라우팅 시 redirect하게 구현",
      "사용자의 브라우저 너비를 구독하여 슬라이더의 split을 동기적으로 변경하도록 구현",
    ],
    duration: "2023.02 ~ 2023.02(2주)",
    isTeam: undefined,
    skillStack: [
      "typescript",
      "react",
      "vercel",
      "recoil",
      "framer-motion",
      "react-query",
    ],
    link: {
      website: "https://netflix-clone-jaeyeoneej.vercel.app/",
      github: "https://github.com/JaeyeoneeJ/NETFLIX-CLONE",
      youtube: undefined,
    },
  },
  {
    title: "Drag with To Do List",
    src: "project_dragWithToDoList",
    description: "Trello의 일부 기능을 클론한 프로젝트",
    overview:
      "react-beautiful-dnd 라이브러리를 사용하여 drag 기능에 중점을 둔 프로젝트로 drag로 보드를 넘나들고 앱 하단 휴지통에 Card를 이동하여 삭제하는 기능을 구현했습니다.",
    experience: [
      "react-beautiful-dnd 라이브러리를 사용하여 drag 기능을 구현",
      "Mouse Drag를 통한 Card => 순번 변경 및 Board 간 이동",
      "앱 하단 휴지동에 Card를 이동하면 해당 Card 삭제 기능 구현",
      "새로고침 시 입력한 Data의 상태 관리를 위해 localStorage 사용",
    ],
    duration: "2023.01 ~ 2023.02(1주)",
    isTeam: undefined,
    skillStack: [
      "typescript",
      "react",
      "styled-components",
      "vercel",
      "recoil",
      "react-beautiful-dnd",
    ],
    link: {
      website: "https://trello-clone-eta-nine.vercel.app/",
      github: "https://github.com/JaeyeoneeJ/TO-DO-LIST-with-DRAG",
      youtube: undefined,
    },
  },
  {
    title: "떨면뭐하니",
    src: "project_dmmhn",
    description: "온라인 모의면접 제공 서비스",
    overview:
      "IT개발 분야 모의면접 서비스로 질문(텍스트)을 음성(보이스)으로 변환(text-to-speech)하여 AI 모의면접관이 직접 질문을 읽어주고, 각 질문의 소요시간을 측정하여 실제 면접처럼 긴장되는 모의면접을 체험할 수 있는 서비스입니다.",
    experience: [
      "팀 리더로 프로젝트 주도적으로 리드",
      "프로젝트 컨셉 및 와이어프레임 기획",
      "eslint, prettier를 통한 코딩 컨벤션의 지속적인 통한",
      "타입 처리 및 오류 체크, 자동 완성 기능을 위한 TypeScript 적용 / 에러 핸들링",
      "전역 상태관리를 위해 Recoil 적용",
      "이메일 인증 회원가입, 비밀번호 변경 구현",
      "텍스트 => 음성 변환: TTS(Text-to-speech) 및 모의면접 / 커스텀 질문 구현",
      "질문 소요시간 측정을 위한 타이머 구현",
      "api 통신 간 중복 렌더링 방지를 위한 로딩 컴포넌트 구현 및 연결",
      "CSS 반응형 웹 구현 및 일부 .ai 디자인",
      "AWS CloudFront, EC2, S3를 활용한 클라우드 배포",
    ],
    duration: "2022.11 ~ 2022.12(6주)",
    isTeam: {
      frontEnd: 3,
      backEnd: 4,
      designer: 1,
    },
    skillStack: [
      "typescript",
      "react",
      "styled-components",
      "recoil",
      "axios",
      "recordRTC",
      "react-hook-form",
      "AWS CloutFront",
      "AMASON S3",
      "CLOVA Voice",
    ],
    link: {
      website: "https://itterview.com/",
      github: "https://github.com/HH99-NO1/DMMHN-FE",
      youtube: "https://www.youtube.com/watch?v=aMmKTLddYnM",
    },
  },
  {
    title: "AIRBNB CLONE",
    src: "project_airbnbClone",
    description: "반응형 웹 구현에 중점을 두고 에어비앤비를 클론한 프로젝트",
    overview:
      "에어비앤비 클론코딩으로 미디어쿼리를 사용하여 반응형 웹을 구현하고 로그인/회원가입 기능, 숙소 Hosting/상세페이지 등에 중점을 둔 프로젝트입니다.",
    experience: [
      "팀 리더로 프로젝트 주도적으로 리드",
      "프로젝트 컨셉 및 와이어프레임 기획",
      "숙소 생성(Hosting) 및 상세페이지 구현",
      "좋아요 기능을 통한 카테고리 관리 기능 구현",
      "CSS 미디어쿼리 활용 반응형 웹 집중 구현",
    ],
    duration: "2022.11 ~ 2022.11(1주)",
    isTeam: {
      frontEnd: 2,
      backEnd: 3,
    },
    skillStack: [
      "javascript",
      "react",
      "styled-components",
      "vercel",
      "redux",
      "redux-toolkit",
      "axios",
      "react-hook-form",
    ],
    link: {
      website: "",
      github: "https://github.com/JaeyeoneeJ/DGBNB-FE",
      youtube: "https://www.youtube.com/watch?v=1brLZZskr3Q",
    },
  },
];

export default function Project() {
  // const setIsClickedProject = useSetRecoilState(projectState);
  // const setIsprojectData = useSetRecoilState(projectData);
  // const onProjectView = (file: IProjectData) => {
  //   setIsClickedProject(true);
  //   setIsprojectData(file);
  // };
  return (
    <Ctn>
      <Wrapper>
        {projects.map((project, index) => (
          <Card
            key={index}
            // onClick={() => onProjectView(project)}
          >
            <ImgBox>
              <Filter className="filter">
                {/* <ProgressiveImg
                  maxWidth="100%"
                  src={`img/projects/${project.src}.png`}
                  placeholderSrc={`img/projects/tiny_${project.src}.png`}
                /> */}
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
  );
}
