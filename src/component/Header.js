import { render } from "@testing-library/react"
import React,{Component} from "react"

// const Header = () => {
//     return <h1>Header</h1>
// }

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        setInterval(()=> this.tick(),1000)
    }

    tick(){
        this.setState({date: new Date()});
    }
   

    render() {
        return (
            <div>{this.state.date.toLocaleTimeString()}</div>
        ) 
    }
}
export default Header