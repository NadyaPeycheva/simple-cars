import { Redirect, Route } from "react-router-dom";
import SingIn from "./components/singIn/SingIn";
import SingUp from "./components/singUp/SingUp";
import CustomPaginationActionsTable from "./components/Tab";
import Catalog from "./pages/Catalog";

function App() {
  return (
    <main>
      <Route path="/tab">
        <CustomPaginationActionsTable/>
      </Route>
      <Route path="/" exact>
        <Redirect to='/catalog'/>
      </Route>
      <Route path="/catalog">
        <Catalog/>
      </Route>
   <Route path='/singUp'>
    <SingUp/>
   </Route>
   <Route path='/singIn'>
    <SingIn/>
   </Route>
   </main>
  );
}

export default App;
