import React, {Component} from 'react';
import {axiosCalls} from './axiosCalls';

class AddServiceForm extends Component {

  constructor(props){
    super(props)
    this.state = { name:'', url:''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault();
    axiosCalls.addServiceToDb(this.state)
    this.resetForm();
  }

  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  resetForm = () => {
    this.setState({
        ...this.state,
        name: '',
        url: ''
    })
 }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="form">
          <div>
            <label htmlFor={'name'}>Service</label>
            <input 
              type="text" 
              name="name"
              placeholder="service" 
              value = {this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
          <label htmlFor={'url'}>Url</label>
          <input 
            type="text" 
            name="url"
            placeholder="url"
            value={this.state.url}
            onChange={this.handleChange}  
          />
          </div>
          <div>
            <button>Add Service</button>
          </div>
        </form>
      </div>
    )
  }   
}

export default AddServiceForm;