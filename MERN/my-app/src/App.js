import "./App.css";
import {BrowserRouter as Router,Routes,Route, useLocation} from 'react-router-dom'
import Home from './components/Home'
import About from "./components/About";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

import Reg from "./components/Reg";
import Singlebook from './components/Singlebook';
import DashboardLayout from "./components/dashboard/DashboardLayout";
import {Manage} from "./components/dashboard/Manage";
import {Upload} from "./components/dashboard/Upload";
function Main() {
  const location = useLocation()
  const hideroutes = ["/login","/reg"]
  return (
    <>
    {!hideroutes.includes(location.pathname) && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={ <About />  }/>
        <Route path="/login" element={ <Login />  }/>
        <Route path="/reg" element={ <Reg />  }/>
        <Route path="/singlebook/:id" element={<Singlebook/> }/>
        <Route path="/admin/dashboard" element={<DashboardLayout/>}>
          <Route path="/admin/dashboard/manage" element={<Manage/>}/>
          <Route path="/admin/dashboard/upload" element={<Upload/>}/>
        </Route>
      </Routes>
    
      </>
  );

}
function App(){
  return(
    <Router>
      <Main />
    </Router>
  )
}

export default App;
