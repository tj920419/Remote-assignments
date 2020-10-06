import React from 'react';
import logo from './logo.svg';
import './App.css';

function Newbox(props) {
  return <div className="content-box">{props.name}</div>;
};



class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.showlist = this.showlist.bind(this);
    this.show = this.show.bind(this);
    this.state = {
      msg: "Welcome to my page!",
      listStatus: false,
      isLoggedIn: false,
    };
  }

  handleClick(words) {
    this.setState({ msg: words });
  }
  showlist(bool) {
    this.setState({ listStatus: bool})
  }
  show() {
    this.setState({ isLoggedIn: true });
  }


  render() {
    


  return (
    <div className="App">
              <header>
            
            <h5 className="title">Week4 Assignment</h5>
            <ul className="ul-items"> 
                <li className="items">Item 1</li><li className="items">Item 2</li><li className="items">Item 3</li><li className="items">Item 4</li>        
            </ul>
            <img src={require('./Img/Menu_Line-256.png')} alt="Background" className="catalog" onClick={() => this.showlist(true)}/>
      
      {this.state.listStatus &&

          <div id = "mySidenav" className = "sidenav">
            <a href = "javascript:void(0)" className = "closebutton" onClick={() => this.showlist(false)}>X</a>
            <a href = "#">Home</a>
            <a href = "#">Project</a>
            <a href = "#">About</a>
            <a href = "#">Contact</a>
          </div>
       }

        </header>
        
        <nav>
            <h1 className="welcome-message" id='welcome'  onClick={() => this.handleClick("Have a nice day!")}>{this.state.msg}</h1>
        </nav>

            <h2 className="section-title">Section Title</h2>

        <main>
        <div className="content-box-group">
            <Newbox name="Content box 1" />
            <Newbox name="Content box 2" />
        </div>
            
        <div className="content-box-group">
            <Newbox name="Content box 3" />
            <Newbox name="Content box 4" />
        </div>
        </main> 

                <div className="call-to-action" onClick={() => this.show()}>Call to Action</div>   

                <div className="content-box-group-2 content-box-group-hide" id="call-to-action-hide">
                    <div className="content-box-2 content-box-hide" id="call-to-action-hide">Content box 5</div>
                    <div className="content-box-2 content-box-hide" id="call-to-action-hide">Content box 6</div>
                </div>
            
                <div className="content-box-group-2 content-box-group-hide" id="call-to-action-hide">
                    <div className="content-box-2 content-box-hide" id="call-to-action-hide">Content box 7</div>
                    <div className="content-box-2 content-box-hide" id="call-to-action-hide">Content box 8</div>
                </div>

                {this.state.isLoggedIn &&

                  <div>
                      <div className="content-box-group">
                          <Newbox name="Content box 5" />
                          <Newbox name="Content box 6" />
                      </div>

                      <div className="content-box-group">
                          <Newbox name="Content box 7" />
                          <Newbox name="Content box 8" />
                      </div>
                  </div>

                }
        
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
