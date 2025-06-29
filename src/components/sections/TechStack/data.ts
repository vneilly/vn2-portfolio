import { IconType } from "react-icons";
import { FiCode } from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiVuedotjs,
  SiNodedotjs,
  SiTypescript,
  SiWebpack,
  SiStorybook,
  SiPython,
  SiAmazon,
  SiMysql,
  SiJavascript,
  SiJquery,
  SiHtml5,
  SiCss3,
  SiFigma,
} from "react-icons/si";

export interface TechItem {
  id: number;
  name: string;
  Icon: IconType;
  category: keyof typeof TECH_CATEGORIES;
}

export const TECHNOLOGIES = {
  ang: "ANGULARJS",
  react: "REACT",
  web: "WEBPACK",
  next: "NEXT.JS",
  zust: "ZUSTAND",
  rdx: "REDUX",
  tw: "TAILWIND CSS",
  bs: "BOOTSTRAP",
  vue: "VUE.JS",
  vx: "VUEX",
  node: "NODE.JS",
  ts: "TYPESCRIPT",
  sb: "STORYBOOK",
  py: "PYTHON",
  amz: "AWS",
  sql: "MySQL",
  js: "JAVASCRIPT",
  jq: "JQUERY",
  html: "HTML",
  css: "CSS",
  fig: "FIGMA",
};

export const TECH_CATEGORIES = {
  Frontend: [
    TECHNOLOGIES.react,
    TECHNOLOGIES.next,
    TECHNOLOGIES.tw,
    TECHNOLOGIES.bs,
    TECHNOLOGIES.vue,
    TECHNOLOGIES.css,
    TECHNOLOGIES.html,
    TECHNOLOGIES.js,
    TECHNOLOGIES.jq,
    TECHNOLOGIES.ts,
  ],
  Backend: [
    TECHNOLOGIES.node,
    TECHNOLOGIES.py,
    TECHNOLOGIES.sql,
    TECHNOLOGIES.amz,
  ],
  State: [TECHNOLOGIES.zust, TECHNOLOGIES.rdx, TECHNOLOGIES.vx],
  Tools: [TECHNOLOGIES.web, TECHNOLOGIES.sb, TECHNOLOGIES.fig],
};

export const ALL_TECH_ITEMS: TechItem[] = [
  {
    id: 1,
    name: TECHNOLOGIES.react,
    Icon: SiReact,
    category: "Frontend",
  },
  {
    id: 2,
    name: TECHNOLOGIES.next,
    Icon: SiNextdotjs,
    category: "Frontend",
  },
  {
    id: 3,
    name: TECHNOLOGIES.zust,
    Icon: FiCode,
    category: "State",
  },
  {
    id: 4,
    name: TECHNOLOGIES.rdx,
    Icon: SiRedux,
    category: "State",
  },
  {
    id: 5,
    name: TECHNOLOGIES.tw,
    Icon: SiTailwindcss,
    category: "Frontend",
  },
  {
    id: 6,
    name: TECHNOLOGIES.bs,
    Icon: SiBootstrap,
    category: "Frontend",
  },
  {
    id: 7,
    name: TECHNOLOGIES.vue,
    Icon: SiVuedotjs,
    category: "Frontend",
  },
  {
    id: 8,
    name: TECHNOLOGIES.vx,
    Icon: FiCode,
    category: "State",
  },
  {
    id: 9,
    name: TECHNOLOGIES.node,
    Icon: SiNodedotjs,
    category: "Backend",
  },
  {
    id: 10,
    name: TECHNOLOGIES.ts,
    Icon: SiTypescript,
    category: "Frontend",
  },
  {
    id: 11,
    name: TECHNOLOGIES.web,
    Icon: SiWebpack,
    category: "Tools",
  },
  {
    id: 12,
    name: TECHNOLOGIES.sb,
    Icon: SiStorybook,
    category: "Tools",
  },
  {
    id: 13,
    name: TECHNOLOGIES.py,
    Icon: SiPython,
    category: "Backend",
  },
  {
    id: 14,
    name: TECHNOLOGIES.amz,
    Icon: SiAmazon,
    category: "Backend",
  },
  {
    id: 15,
    name: TECHNOLOGIES.sql,
    Icon: SiMysql,
    category: "Backend",
  },
  {
    id: 16,
    name: TECHNOLOGIES.js,
    Icon: SiJavascript,
    category: "Frontend",
  },
  {
    id: 17,
    name: TECHNOLOGIES.jq,
    Icon: SiJquery,
    category: "Frontend",
  },
  {
    id: 18,
    name: TECHNOLOGIES.html,
    Icon: SiHtml5,
    category: "Frontend",
  },
  {
    id: 19,
    name: TECHNOLOGIES.css,
    Icon: SiCss3,
    category: "Frontend",
  },
  {
    id: 20,
    name: TECHNOLOGIES.fig,
    Icon: SiFigma,
    category: "Tools",
  },
];
