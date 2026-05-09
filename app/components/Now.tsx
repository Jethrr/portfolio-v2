import { achievements } from "../data";
import { Card, CardBody, CardEyebrow } from "./Card";
import { TrophyIcon } from "./Icons";

export function Now() {
  return (
    <Card className="col-span-12 lg:col-span-5">
      <CardEyebrow>Achievements</CardEyebrow>
      <CardBody className="gap-4">
        <ul className="flex flex-col gap-3 text-sm text-neutral-300">
          {achievements.map((a) => (
            <li key={a.title} className="flex items-start gap-3">
              <TrophyIcon className="mt-0.5 h-4 w-4 flex-none text-amber-300" />
              <span>
                <span className="font-medium text-neutral-100">{a.title}</span>
                <span className="text-neutral-400"> — {a.detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}
