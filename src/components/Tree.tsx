import type { Person } from "../types/Person.ts";
import { PersonNode } from "./PersonNode";

interface Props {
  root: Person;
}

export const Tree = ({ root }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <PersonNode person={root} />
      {root.children && (
        <div className="flex gap-4">
          {root.children.map(child => (
            <Tree key={child.id} root={child} />
          ))}
        </div>
      )}
    </div>
  );
};
