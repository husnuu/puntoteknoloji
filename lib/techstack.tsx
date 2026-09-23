import type { ComponentType } from "react";
import {
  HtmlLogo,
  CssLogo,
  JsLogo,
  ReactLogo,
  AngularLogo,
  VueLogo,
  NextjsLogo,
  NodeLogo,
  SanityLogo,
  ContentfulLogo,
  StoryblokLogo,
  CloudflareLogo,
  VercelLogo,
  NetlifyLogo,
  FirebaseLogo,
  AwsLogo,
} from "@/components/illustrations/TechLogos";

export type StackLogo = {
  Logo: ComponentType<{ className?: string }>;
  label: string;
};

export type StackGroup = {
  label: string;
  logos: StackLogo[];
};

export const STACK_GROUPS: StackGroup[] = [
  {
    label: "Essentials",
    logos: [
      { Logo: HtmlLogo, label: "HTML5" },
      { Logo: CssLogo, label: "CSS3" },
      { Logo: JsLogo, label: "JavaScript" },
      { Logo: ReactLogo, label: "React" },
      { Logo: AngularLogo, label: "Angular" },
      { Logo: VueLogo, label: "Vue.js" },
    ],
  },
  {
    label: "Data Sources",
    logos: [
      { Logo: SanityLogo, label: "Sanity" },
      { Logo: ContentfulLogo, label: "Contentful" },
      { Logo: StoryblokLogo, label: "Storyblok" },
    ],
  },
  {
    label: "Build",
    logos: [
      { Logo: NextjsLogo, label: "Next.js" },
      { Logo: ReactLogo, label: "React" },
      { Logo: NodeLogo, label: "Node.js" },
    ],
  },
  {
    label: "Deploy & CDN",
    logos: [
      { Logo: CloudflareLogo, label: "Cloudflare" },
      { Logo: VercelLogo, label: "Vercel" },
      { Logo: NetlifyLogo, label: "Netlify" },
      { Logo: FirebaseLogo, label: "Firebase" },
      { Logo: AwsLogo, label: "AWS" },
    ],
  },
];

export const TECH_COUNT = STACK_GROUPS.reduce((sum, group) => sum + group.logos.length, 0);
