import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Switch, Route } from 'react-router-dom';
import Keg from './components/Keg'
import KegList from './components/KegList';
import About from './components/About';
import NavigationBar from './components/NavigationBar';
import Error404 from './components/Error404';
import NewKegForm from './components/NewKegForm';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg){
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  render(){
    return (
      <div>
        <Header/>
        <NavigationBar/>

        <Switch>

          <Route exact path="/" component={ Welcome } />
          <Route path='/kegs' component={KegList} />
          <Route path='/about' component={About} />

          <Route path='/signin' component={SignIn} />
          <Route component={Error404} />
          <Route path='/newKeg' render={()=><NewKegForm
               onNewKegCreation={this.handleAddingNewKegToList} />} />

        </Switch>
        <Footer/>
      </div>
    );
  }
}



export default App;
