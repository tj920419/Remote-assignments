import React from 'react';
import logo from './logo.svg';
import './App.css';

function Newbox(props) {
  return <div class="content-box">{props.name}</div>;
};



class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      msg: "Welcome to my page!"
    };
  }
  handleClick(words) {
    this.setState({ msg: words });
  }
  render() {
  return (
    <div className="App">
              <header>
            
            <h5 class="title">Week4 Assignment</h5>
            <ul class="ul-items"> 
                <li class="items">Item 1</li><li class="items">Item 2</li><li class="items">Item 3</li><li class="items">Item 4</li>        
            </ul>
            <img src={require('./Img/Menu_Line-256.png')} alt="Background" class="catalog" />

			<div id = "mySidenav" class = "sidenav">
				<a href = "javascript:void(0)" class = "closebutton" >X</a>
				<a href = "#">Home</a>
				<a href = "#">Project</a>
				<a href = "#">About</a>
				<a href = "#">Contact</a>
			</div>

        </header>
        
        <nav>
            <h1 class="welcome-message" id='welcome'  onClick={() => this.handleClick("Have a nice day!")}>{this.state.msg}</h1>
        </nav>

            <h2 class="section-title">Section Title</h2>

        <div class="content-box-group">
            <Newbox name="Content box 1" />
            <Newbox name="Content box 2" />
        </div>
            
        <div class="content-box-group">
            <Newbox name="Content box 3" />
            <Newbox name="Content box 4" />
        </div>

        <main>
                <div class="content-box-group">
                    <div class="content-box">Content box 5</div>
                    <div class="content-box">Content box 6</div>
                </div>
            
                <div class="content-box-group">
                    <div class="content-box">Content box 7</div>
                    <div class="content-box">Content box 8</div>
                </div>
        </main> 

                <div class="call-to-action" onclick = "opencontentbox()">Call to Action</div>   

                <div class="content-box-group-2 content-box-group-hide" id="call-to-action-hide">
                    <div class="content-box-2 content-box-hide" id="call-to-action-hide">Content box 5</div>
                    <div class="content-box-2 content-box-hide" id="call-to-action-hide">Content box 6</div>
                </div>
            
                <div class="content-box-group-2 content-box-group-hide" id="call-to-action-hide">
                    <div class="content-box-2 content-box-hide" id="call-to-action-hide">Content box 7</div>
                    <div class="content-box-2 content-box-hide" id="call-to-action-hide">Content box 8</div>
                </div>
        
        <footer>           
        </footer>

{/*
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
*/}
    </div>
  );
}
}

export default App;
