import logo from './logo.svg';
import './App.css';
// import Navbar from './navbar/navbar';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Navbarone from './navbarone/navbarone';
import Content from './Content/Content';
import Footer from './Footer/Footer.js';
import Article from './articles/Article.js';

function App() {
  return (
    <div className="App">
       <Navbarone/>
       <Content/>
       <Article/>
       <Footer/>
    </div>
  );
}

export default App;
