import { Component } from "react";
import './navbar.css'
import NavLink from "../navlink/navlink";
export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      name: "omar",
    };
    console.log("hello from constructor");
  }
  handelchange = () => {
    this.setState({ name: this.state.name == "Ali" ? "Omar" : "Ali" });
    // this.state.name='Ali'
    // console.log(this.state.name);
  };

  componentDidMount() {
    console.log("hello from componentDidMount()");
  }
  componentDidUpdate() {
    console.log("hello from componentDidUpdate()");
  }

  componentWillUnmount() {
    //clean up
  }
  render() {
    console.log("hello from Render");
    return (
      //   <React.Fragment>
      <>
        <ul>
          <NavLink  content='Home' url='www.google.com'/>
          <NavLink content='Products' url='www.amazon.com'/>
          <NavLink content='About Us' url='www.facebook.com'/>
          <NavLink content='Contact us' url='www.google.com'/>
        </ul>
        <h3 className='title'>{this.state.name}</h3>
        <label htmlFor="userName">userName</label>
        <input type="text" name="userName"/>
        <img />
        <button onClick={this.handelchange}>change Name</button>
      </>
      //   </React.Fragment>
    );
  }
}
