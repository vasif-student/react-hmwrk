// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Event from './components/Event'
import Form from './components/Form'

function App() {
    return ( 
        <div className = "App" >
             <Navbar />
             <Event />
             <Form />
        </div>
    );
}

export default App;