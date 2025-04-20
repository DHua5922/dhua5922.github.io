interface ProjectType {
  name: string;
  imgName: string;
  links: { href: string; children: string }[];
  description: string;
}

type ScrollIdType = "about" | "portfolio" | "contact";

export type { ProjectType, ScrollIdType };
