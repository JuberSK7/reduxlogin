import './App.css';
import Login from './Component/Login';
import Logout from './Component/Logout';
import {useSelector} from 'react-redux'  
import { selectUser } from './features/userSlice';

function App() {
  const employe = useSelector(selectUser)
  return (
    <div>
      {
        employe ? <Logout/>: <Login/>
      }
      
    </div>
  );
}

export default App;
