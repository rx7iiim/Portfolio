export type SectionId = "home" | "work" | "skills" | "projects" | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
  icon: React.ReactNode;
}

export interface SocialLink {
  icon: React.ReactNode;
  url: string;
}
