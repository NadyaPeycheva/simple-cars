import { Route } from "react-router-dom";
import SingIn from "./components/singIn/SingIn";
import SingUp from "./components/singUp/SingUp";
// import Background from "./pages/Background";

function App() {
  return (
    <main>
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
