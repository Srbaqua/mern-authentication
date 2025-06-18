import {Route,Routes} from "react-router-dom";
import Header from  "./pages/header/header";
import Login from "./pages/auth/login/login";
import Signup from "./pages/auth/signup/signup";
import Dashboard from "./pages/dashboard/dashboard";


function App() {
  return (
   <>
   
   <Header></Header>
   <Routes>
    <Route path = "/login" element = {<Login> </Login>}> </Route>
    <Route path = "/signup" element = {<Signup> </Signup>}> </Route>
    <Route path = "/dashboard" element = {<Dashboard> </Dashboard>}></Route>

   </Routes>
   </>

  );
}

export default App;
