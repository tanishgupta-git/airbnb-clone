import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SearchPage from './components/SearchPage/SearchPage';
import Footer from './components/Footer/Footer';
import { Switch,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
    <Route path='/search' component={SearchPage} />
    <Route path="/" component={Home}/>
    </Switch>
    <Footer />
    </div>
  );
}

export default App;
