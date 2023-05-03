import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {

  constructor(props){
    super(props);
    this.state = {
      mode: 'light',
    };
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#212529';
  } 
  handleMode = () => {
    if (this.state.mode === 'light') {
    this.setState({
      mode: 'dark',
    });
    document.body.style.backgroundColor = '#212529'
    document.body.style.color = '#ffffff';
    }
    else if (this.state.mode === 'dark') {
    this.setState({
      mode: 'light'
      });
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#212529';
    }
    
  }

  capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  } //captalizes 1st letter
  
  
  render() {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${this.state.mode}` }>
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">NewsMonkey</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/technology">Technology</Link>
              </li>
            </ul>
          <div class="form-check form-switch">
            <input className="form-check-input" onClick={this.handleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" for="flexSwitchCheckDefault">{`${this.capitalize(this.state.mode)} Mode`}</label>
          </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar