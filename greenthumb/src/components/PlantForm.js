import React, { Component } from 'react';
//TODO: BUG when date is submited it's transformed and is messing up 
//the countdown functionality 
let date = new Date()


console.log(date)
class PlantForm extends Component{
constructor(props){
    super(props)
    this.state = {
        name: '',
        img_url: 'https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80',
        last_watered: date,
        duration: 0
    }
}
handleChange = (e) => {
    
    let input = e.target.name
    //converts str to int for duration
    if(input == 'duration'){
        let target =  parseInt(e.target.value)
        console.log(target)
        this.setState({
            [input]: target,   
        })
    }else {
        this.setState({
            [input]: e.target.value,   
        })
    
    }
      

}
handleSubmit = (e) => {
    e.preventDefault(); 
 
    console.log(this.state)
    this.props.createNewPlant(this.state)
}

render(){
    return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
          <input type="text" name="img_url"value={this.state.image}  onChange={this.handleChange}/>
          <input type="number" name="duration"value={this.state.duration}  onChange={this.handleChange}/>
          {/* TODO: Add last watered input that uses a calander */}
  
          <input type="submit" value="Add New Plant" />
        </form>
      );
}

}

export default PlantForm;