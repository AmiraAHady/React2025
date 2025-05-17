import { Component } from "react";
import "./navbar.css";
import NavLink from "../navlink/navlink";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
// import { BsAlarm } from "@react-icons/all-files/bs/BsAlarm";
import { BsAirplaneFill } from "react-icons/bs";
export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      name: "omar",
      navlinks: [
        {
          content: "Home",
          url: "goole.com",
        },
        {
          content: "Products",
          url: "Products.com",
        },
        {
          content: "About",
          url: "About.com",
        },
        {
          content: "Contact US",
          url: "contact.com",
        },
      ],
    };
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
        {/* <h2>
          <BsAirplaneFill />
        </h2> */}
        <ul>
          {this.state.navlinks.map((item) => {
            return <NavLink content={item.content} url={item.url}/>;
          })}

          {/* <NavLink content="Home" url="www.google.com" />
          <NavLink content="Products" url="www.amazon.com" />
          <NavLink content="About Us" url="www.facebook.com" />
          <NavLink content="Contact us" url="www.google.com" /> */}
        </ul>
        <h3 className="title">{this.state.name}</h3>
        <label htmlFor="userName">userName</label>
        <input type="text" name="userName" />
        <img />
        <button onClick={this.handelchange}>change Name</button>
      </>
      //   </React.Fragment>
    );
  }
}
