import React, {Component} from 'react';
import './styles.css';

class App extends Component {
    constructor(){
        super()
        this.state= {
            fName: "",
            lName: "",
            names: []
        }
    }

    handleChange = (e) => {
        // event.preventDefault ()
        const {name, value} = e.target
        // const target = event.target;
        // const name = target.name;
        // const value = target.value;
        // console.log(e.target.name)
        // console.log(e.target.value)
        this.setState({
                [name]: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault ();
    // console.log(this.state.name)
        const newName = {fName: this.state.fName, lName: this.state.lName }
        // const newName = `${this.state.fName} ${this.state.lName}`

        this.setState(prevState => {
            return {
                names: [...prevState.names, newName],
                // fName: "", 
                // lName: ""
            }
        })
    }
    
    render(){

        const mappedNames = this.state.names.map((name, i) => {
            return <h1>{name.fName} {name.lName}</h1>
        })
        
        return <div> 
                    <form action = "" onSubmit={this.handleSubmit}>
                    <input type='text'name='fName' value={this.state.fName}
                    onChange={this.handleChange}/>
                    <input type='text'name='lName' value={this.state.lName}
                    onChange={this.handleChange}/>
                   <button> click here </button>
                    </form>
                    <div>
                        { mappedNames }
                    </div>
                </div>

    }    


}
export default App 