export interface FooterCardInfoInterface {
  id: number;
  iconSrc: string;
  text: string;
}

export interface FooterNavGroupInterface {
  id: number;
  title: string;
  links: { href: string; text: string }[];
}

export interface FooterCopyRightLinkInterface {
  id: number;
  href: string;
  text: string;
}

export interface FooterSocialLinkInterface {
  id: number;
  href: string;
  iconSrc: string;
}
