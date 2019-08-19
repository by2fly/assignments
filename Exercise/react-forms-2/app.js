import React, {Component} from 'react';
class Form extends Component {
    constructor(){
        super()
        
        this.state = {
            fullName: '',
            age: '',
            favColor: '',
            diet: [],
            value: 'Pepsi'
        }
    }
    handleChange = (event) => {
        let {name, value, type} = event.target
        if(name === 'diet'){
            const dietArr = [...this.state.diet]
            //if else statement
            if(dietArr.includes(value)){
                dietArr.splice(dietArr.indexOf(value), 1)
            }else {
                dietArr.push(value)
            }
            // Ternary
            // dietArr.includes(value) ? dietArr.splice(dietArr.indexOf(value), 1) : dietArr.push(value)
            // condition ? result (if the condition is true) : result (if the condition is false)
            this.setState({diet: dietArr})
        }else if(type === 'select-one'){
            this.setState({value: event.target.value })
        }else {
            this.setState({[name]: value})
        }
        
    }
    handleSubmit = (e) => {
        e.preventDefault()
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                    name="fullName" 
                    value={this.state.fullName}
                    onChange={this.handleChange}
                    placeholder='Full Name'
                    />
                <input type="number" 
                    name="age" 
                    value={this.state.age}
                    onChange={this.handleChange}
                    placeholder='Age'
                    />
                    <br/>
                <input type="radio" name="favColor" onChange={this.handleChange} value="Blue" />Blue
                <input type="radio" name="favColor" onChange={this.handleChange} value="Orange" />Orange
                <input type="radio" name="favColor" onChange={this.handleChange} value="Yellow" />Yellow
                <br />
                <input type="checkbox" name="diet" value="Gluten Free" checked={this.state.diet.includes("Gluten Free")} onChange={this.handleChange} />Gluten Free
                <input type="checkbox" name="diet" value="Vegetarian" checked={this.state.diet.includes("Vegetarian")} onChange={this.handleChange} />Vegetarian
                <input type="checkbox" name="diet" value="Dairy Free" checked={this.state.diet.includes("Dairy Free")} onChange={this.handleChange} />Dairy Free
                <br />
                Select your favorite Drink
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="Pepsi">Pepsi</option>
                    <option value="Old English">Old English</option>
                    <option value="Coke">Coke</option>
                </select>
                <button>Submit</button>  
            </form>
        );
    }
};
export default Form;