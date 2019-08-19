import React, {Component } from 'react'
import Axios from 'axios';

class Form extends Component {
    constructor() {
        super()

        this.state = {
            title: '',
            description: '',
            price: '',
            imgUrl: ''
        }
    }
    handleChange = (e) => {
        let {name, value} = e.target>
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        Axios.post('https://api.vschool.io/brian/todo/', this.state)
    }
    render () {
        return (
            <form onSubmit={this.handleSubmit} className="formContainer">
                <input type='text' name='title' value={} placeholder="Title" onChange={this.handleChange} required />
                <input type='text' name='description' value={} placeholder="Description" onChange={this.handleChange} required />
                <input type='number' name='price' value={} placeholder="Price" onChange={this.handleChange}/>
                <input type='text' name='imgUrl' value={} placeholder="imgUrl" onChange={this.handleChange}/>
                <button>Submit</button>
            </form>
        )
    }











}
export default Form