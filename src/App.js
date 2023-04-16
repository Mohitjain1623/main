import logo from './logo.svg';
import style from "./style.module.css"
import Navbar from './Navbar';
import Text from './Text';
import Search_bar from './Search_bar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './Layout';
import Details from './components/Details';
import Summary from './components/Summary';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Search_bar />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="summary/:id" element={<Summary />}/>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
