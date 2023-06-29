import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Userlogin from './components/UserLogin';
import Professionallogin from './components/Professionallogin';
import Createacntuser from './components/createacntuser';
import Createacntprofessional from './components/createacntprofessional';
import Forgotpassword from './components/Forgotpassword';

function App() {
  return (
    <>
      <div className="App">
          <Router>
            <Routes>
              <Route exact path='/' Component={Userlogin}/>
              <Route path='/Userlogin' Component={Userlogin}/>
              <Route path='/Professionallogin' Component={Professionallogin}/>
              <Route path='/Createacntuser' Component={Createacntuser}/>
              <Route path='/Createacntprofessional' Component={Createacntprofessional}/>
              <Route path='/Forgotpassword' Component={Forgotpassword}/>
            </Routes>
          </Router>
        {/* <Userlogin/> */}
        {/* <Professionallogin/> */}
      </div>
    </>
  );
}

export default App;
