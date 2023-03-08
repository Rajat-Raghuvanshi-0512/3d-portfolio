export type FadeInType = {
  direction: "left" | "right" | "up" | "down";
  type: string;
  delay: number;
  duration: number;
};
export type ServiceCardType = { index: number; title: string; icon: string };
export type ExperienceCardType = {
  experience: {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
  };
};
export type ProjectCardType = {
  index: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
  live_url: string;
};
export type FeedbackCardType = {
  index: number;
  name: string;
  image: string;
  testimonial: string;
  designation: string;
  company: string;
};
