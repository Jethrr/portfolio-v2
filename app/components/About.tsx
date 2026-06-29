import { profile } from "../data";
import { OutputBlock } from "./terminal/OutputBlock";

export function AboutPanel() {
  return (
    <OutputBlock prefix="" className="!pl-0 text-sm leading-relaxed sm:text-base">
      {profile.summary}
    </OutputBlock>
  );
}

export function About() {
  return <AboutPanel />;
}
