import React,{Component} from 'react';
import './App.css';
import PlantList from './components/PlantList'
import PlantForm from './components/PlantForm'
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

  createNewPlant = (data) => {
    console.log('hi',data)
    // TODO: secure post
    return fetch(API, {
      method: 'POST', 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
  })
  .then(res =>  res.json())
  .then(data => {
    console.log(data)
    return  this.fetchPlants()
  })
  }

  updatePlant = (data) =>{
    console.log('hi',data.id)
    // TODO: secure patch
    return fetch(API+'/'+data.id, {
      method: 'PATCH', 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
  })
  }
  
  render(){
    return (
      <div>
        <PlantForm  createNewPlant={this.createNewPlant}/>
        <PlantList plants={this.state.plants} updatePlant={this.updatePlant}/>
      </div>
     );
  }
}

