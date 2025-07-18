import type { Person } from "../types/Person.ts";

interface Props {
  person: Person;
}

export const PersonNode = ({ person }: Props) => {
  return (
    <div className="p-2 m-2 border rounded shadow">
      {person.name}
    </div>
  );
};
