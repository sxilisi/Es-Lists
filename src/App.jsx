import "./App.css";
import Colors from "./assets/components/Colors";

function App() {
  return (
    <div>
      <Colors
        colors={[
          { id: 1, name: "rosso" },
          { id: 2, name: "giallo" },
          { id: 3, name: "verde" },
          { id: 4, name: "blu" },
          { id: 5, name: "bianco" },
        ]}
      />
    </div>
  );
}

export default App;
