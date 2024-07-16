
// typography
export interface ITypoProps {
    size: "xs" | "sm" | "md" | "lg" | "xl" | 'jumbo';
    variant?: "primary" | "secondary" | "tertiary";
    weight?: "normal" | "medium" | "semibold" | "bold";
    isLink?: boolean;
    children: React.ReactNode;
    className?:string;
  }

//   text link
export interface ITextLinkProps {
    children: React.ReactNode
    link:string
    className?: string
}

// header text
export interface IHeaderTextProps {
  text: string;
  breadcrumbLinkTwo?:string;
  breadcrumbLinkThree?:string;
  breadHref?:string
}

// badge
export interface IBadgeProps {
  children:React.ReactNode
  variant: 'success' | 'decline' | 'pending'
  className?: string;
}

// upload image
export interface IUploadDocsProps {
  docName: string;
  size:string
}

// cards
export interface ICardProps {
  icon: string;
  label: string;
  numberView: string;
  trendNo?: string;
  totaling?: string;
}

// sidebar
export interface ILink {
  link: string;
  icon?: string;
  label: string;
  subLinks?:ILink[]
}
export interface ISection {
  textPlaceholder: string;
  links: ILink[];
}

export interface ISidebarProps {
  sections: ISection[];
}

export interface ISidebarProps {
  sections: {
    textPlaceholder: string;
    links: ILink[];
  }[];
}