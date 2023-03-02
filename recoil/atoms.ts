import { atom } from "recoil";

// project의 project 모달 관련
export const projectState = atom({
  key: "projectState",
  default: false,
});

export interface IProjectData {
  title: string;
  src: string;
  description: string;
  overview: string;
  experience?: string[];
  duration: string;
  isTeam?:
    | {
        frontEnd?: number | undefined;
        backEnd?: number | undefined;
        designer?: number | undefined;
      }
    | undefined;
  skillStack?: string[] | undefined;
  link: {
    website: string | undefined;
    github: string | undefined;
    youtube: string | undefined;
  };
}

export const projectData = atom<IProjectData>({
  key: "projectData",
  default: {
    title: "",
    src: "",
    description: "",
    overview: "",
    duration: "",
    link: {
      website: undefined,
      github: undefined,
      youtube: undefined,
    },
  },
});
