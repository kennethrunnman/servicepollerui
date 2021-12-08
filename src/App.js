import React, { Component} from 'react';
import Services from './Services';
import AddServiceForm from './AddServiceForm';

class App extends Component{
  render() {
    return (
      <div className="service-poller-app container">
        <h1>Service Poller</h1>
        <Services/>
        <AddServiceForm/>
      </div>
    );
  }
}

export default App;
