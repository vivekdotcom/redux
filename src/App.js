import 'bootstrap/dist/css/bootstrap.min.css';
import User from "./cmp/User";
import storage from './storage';
import { Provider } from 'react-redux';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={storage}>
        <h1 align="center">React-Redux</h1>
         <User />
      </Provider>
    </div>
  );
}

export default App;
