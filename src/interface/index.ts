export interface INavLink {
  id: string;
  title: string;
}
export interface IFeature {
  id: string;
  icon: string;
  title: string;
  content: string;
}
export interface IFeedback {
  id: string;
  content: string;
  name: string;
  title: string;
  img: string;
}
export interface IStat {
  id: string;
  title: string;
  value: string;
}

interface Link {
  name: string;
  link: string;
}

export interface IFooterSection {
  title: string;
  links: Link[];
}

export interface ISocialMediaLink {
  id: string;
  icon: string;
  link: string;
}
export interface IClient {
  id: string;
  logo: string;
}
export interface IStyles {
  boxWidth: string;
  heading2: string;
  paragraph: string;
  flexCenter: string;
  flexStart: string;
  paddingX: string;
  paddingY: string;
  padding: string;
  marginX: string;
  marginY: string;
}

export interface ILayout {
  section: string;
  sectionReverse: string;
  sectionImgReverse: string;
  sectionImg: string;
  sectionInfo: string;
}
