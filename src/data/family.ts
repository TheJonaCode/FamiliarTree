import type { Person } from "../types/Person.ts";

export const familyTree: Person = {
  id: "1",
  name: "Juan",
  children: [
    {
      id: "2",
      name: "Ana",
      children: [
        { id: "4", name: "Carlos" },
        { id: "5", name: "Elena" }
      ]
    },
    {
      id: "3",
      name: "Luis"
    }
  ]
};
