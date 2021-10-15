import { BrowserRouter } from 'react-router-dom';
import { Main } from './components/MainComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Main />
        <ToastContainer theme='dark' />
      </div>
    </BrowserRouter>
  );
}

export default App;
