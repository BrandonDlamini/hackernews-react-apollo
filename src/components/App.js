import React, {Component} from 'react'
import CreateLink from './CreateLink';
import Header from './Header';
import LinkList from './LinkList';
import Login from './Login';
import Search from './Search';
import { Switch,Route } from 'react-router-dom';



class App extends Component {
  render(){
    return (
      <div ClassName = "center w85">
        <Header/>
        <div className = "ph3 pv1 background-gray">
          <Switch>
            <Route exact path ="/" component = {LinkList}/>
            <Route exact path ="/create" component = {CreateLink}/>
            <Route exact path ="/login" component ={Login}/>
            <Route exact path ="/Search" component = {Search}/>
          </Switch>
        </div>
      </div>
    )
  }

}

export default App;
