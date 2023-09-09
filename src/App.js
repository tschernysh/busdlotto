import logo from './logo.svg';
import 'App.css';
import { BrowserRouter } from 'react-router-dom';
import { Header } from 'Components/Header/Header';
import { Footer } from 'Components/Footer/Footer';
import { ApplicationRoutes } from 'Routes/ApplicationRoutes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ApplicationRoutes />
      <Footer />

    </BrowserRouter>
  );
}

export default App;
