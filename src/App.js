import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseMemo from "./pages/UseMemo";
import UseReducer from "./pages/UseReducer";
import UseCallback from "./pages/UseCallback";
import UseRef from "./pages/UseRef";
import Home from "./pages/Home";
import UseContext from "./pages/UseContext";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/useRef' element={<UseRef />} />

          <Route path='/useMemo' element={<UseMemo />} />

          <Route path='/useReducer' element={<UseReducer />} />
          <Route path='/useContext' element={<UseContext />} />
          <Route path='/useCallback' element={<UseCallback />} />

          <Route path='/useRef' element={<useRef />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
