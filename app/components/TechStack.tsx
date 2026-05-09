import { stack } from "../data";
import { Card, CardBody, CardEyebrow } from "./Card";
import { Pill } from "./Pill";

export function TechStack() {
  return (
    <Card className="col-span-12 lg:col-span-8">
      <CardEyebrow>Tech Stack</CardEyebrow>
      <CardBody className="gap-5">
        <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
          {stack.map((group) => (
            <div key={group.label} className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Pill key={item} variant="accent">
                    {item}
                  </Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
