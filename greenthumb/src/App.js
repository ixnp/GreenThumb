import React,{Component} from 'react';
import './App.css';
import PlantList from './components/PlantList'
//TODO database, fake data in db json
const API = "http://localhost:3000/plants"
export default class App extends Component {
  constructor(){
    super()
    this.state = {
      plants:[]
    }
  }
  componentDidMount(){
    this.fetchPlants()
  }
  fetchPlants = () => {
   return fetch(API)
    .then(res => res.json())
    .then(data => {
      return this.setState({plants:data})
    })
  }
  
  render(){
    return (
      <div>
        <PlantList plants={this.state.plants}/>
      </div>
     );
  }
}

