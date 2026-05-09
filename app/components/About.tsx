import { profile } from "../data";
import { Card, CardBody, CardEyebrow } from "./Card";

export function About() {
  return (
    <Card className="col-span-12 lg:col-span-7">
      <CardEyebrow>About</CardEyebrow>
      <CardBody>
        <p className="text-balance text-base leading-relaxed text-neutral-300 sm:text-lg">
          {profile.summary}
        </p>
      </CardBody>
    </Card>
  );
}
