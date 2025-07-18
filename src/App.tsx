import { Tree } from "./components/Tree";
import { familyTree } from "./data/family";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Árbol Familiar</h1>
      <Tree root={familyTree} />
    </div>
  );
}

export default App;
