import { BrowserRouter } from 'react-router-dom';
import { GolbalCss } from './styles';
import { Header } from './Components/Header';

import { Router } from './Routes';
import { Footer } from './Components/Footer';
import { Provider } from 'react-redux';
import { store } from './store';
import { Cart } from './Components/Cart';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GolbalCss />
        <Header />
        <Router />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
