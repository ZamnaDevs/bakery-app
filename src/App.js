
import './App.css';

import {BrowserRouter as Router,
Switch,
Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';





function App() {
  return (
   <Router>
     <Navbar />
     <Switch>
      <Route path='/' component={Inicio}/>
     </Switch>
   </Router>
  );
}

export default App;
