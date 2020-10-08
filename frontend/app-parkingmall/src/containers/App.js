import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import Login from '../components/Login';
import ScanQR from '../containers/ScanQR';
import HeaderAndFooter from '../containers/HeaderAndFooter';


const App = () => (
    
        <BrowserRouter>
        
            <Route exact path="/login" component={Login} />
            <Route exact path="/ScanQR" component={ScanQR} />
            <Route exact path="" component={HeaderAndFooter} />

        
        </BrowserRouter>
    
);


export default App;
//ReactDOM.render(<App />, document.getElementById('root'))
