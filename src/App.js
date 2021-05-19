import './main.css';
import Goal from './components/Goal';
import Agreement from './components/Agreement';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Goal} />
        <Route path='/agreement' component={Agreement} />
      </Switch>
    </div>
  );
}

export default App;
