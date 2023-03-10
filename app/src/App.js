
import './App.css';
import MainPage from './Router/MainPage';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './Redux/store';
function App() {
  return (
    
    <div>
      <BrowserRouter>
      <Provider store={store}>
      <MainPage/>
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
