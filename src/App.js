import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import Hoc from './Hoc'


const Test=Hoc(Movie)

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={isLoding:false}
  }
 
 componentDidMount() {
            setTimeout(() => 
                this.setState({ isLoading: true })

            , 4000);
        }

  



  render()
  {return (
    <div className="App">
  <Test isLoading={this.state.isLoading}/>
    </div>
  );}
}

export default App;
