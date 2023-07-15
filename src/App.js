import './App.css';
import Read from '../src/component/Read';
import Update from '../src/component/Update';
import Create from '../src/component/Create';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <h2>CRUD Operation</h2>
      <BrowserRouter>
        <Routes>
          <Route exact path='/create' element={<Create/>} />
        </Routes>
        <Routes>
          <Route exact path='/read' element={<Read/>} />
        </Routes>
        <Routes>
          <Route exact path='/update' element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
