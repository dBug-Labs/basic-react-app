import { ColorChanger } from "./components/ColorChanger";
import { Counter } from "./components/Counter";
import { TabView } from "./components/TabView";

function App() {
  return (
    <div className="App">
      <Counter />
      <ColorChanger />
      <TabView />
    </div>
  );
}

export default App;
