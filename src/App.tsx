import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import { GlobalStyle } from './components/Style/globalStyles';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
