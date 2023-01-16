import { Redirect, Route } from "react-router-dom";
import SingIn from "./components/singIn/SingIn";
import SingUp from "./components/singUp/SingUp";
import Catalog from "./pages/Catalog";

import { useContext } from "react";
import UserContext from "./store/context/user-contex";


function App() {
  const {user}=useContext(UserContext);
  return (
    <main>
     
      <Route path="/" exact>
        {user&&<Redirect to='/catalog'/>}
        {!user&&<Redirect to='/singIn'/>}
      </Route>
      <Route path="/catalog">
        <Catalog/>
      </Route>
   <Route path='/singUp'>
    <SingUp/>
   </Route>
   {!user&& <Route path='/singIn'>
    <SingIn/>
   </Route>}
   </main>
  );
}

export default App;
