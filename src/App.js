import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabletop from 'tabletop';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1_f0LP10YhzHRqcaDv3rXprQfFR_0wDjWKn-cDJwZ1JU',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }

  render() {

    const { data } = this.state
    return (
     
        <div id="employee-details">
          {
            data.map(obj => {
              return (
                <div key={obj.employee}>
                  <p>{obj.employee}</p>
                  <p>{obj.favpet}</p>
                  <img alt={obj.favpet} src={obj.image} />
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;