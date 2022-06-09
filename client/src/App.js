import { Routes, Route, Link } from 'react-router-dom';
import Main from './Pages/main/Main.jsx';
import AddPratos from './Pages/addPpratos/AddPratos.jsx';
import('./app.css');

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/addpratos" element={<AddPratosRoute/>}/>
        </Route>
      </Routes>
    </div>
  );
}

function HomeRoute() {
  return (
    <>
      <Main/>
    </>
  )
}

function AddPratosRoute() {
  return (
    <>
      <AddPratos/>
    </>
  )
}

export default App;
