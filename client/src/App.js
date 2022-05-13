import BarraInf from './modules/barra inferior/BarraInf';
import Nodes from './modules/nodes/Nodes';
import('./app.css');

function App() {
  return (
    <div className="App">
      <Nodes />
      <BarraInf />
    </div>
  );
}

export default App;
