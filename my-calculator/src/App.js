//Styles
import './styles/core/Reset.scss';
//Components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Header/>
      <main className='main'>
      <Main/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
