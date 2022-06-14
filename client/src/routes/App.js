import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/home/Home.jsx';
import ClientInput from '../Pages/checkin/ClientInput.jsx';
import Kitchen from '../Pages/kitchen/Kitchen.jsx'
import('./app.css');

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/clientInput" element={<ClientInputRoute/>}/>
          <Route path="/kitchen" element={<KitchenRoute />} />
        </Route>
      </Routes>
    </div>
  );
}

function HomeRoute() {
  return (
    <>
      <Home/>
    </>
  )
}

function ClientInputRoute() {
  return (
    <>
      <ClientInput/>
    </>
  )
}

function KitchenRoute() {
  return (
    <>
      <Kitchen/>
    </>
  )
}

export default App;
