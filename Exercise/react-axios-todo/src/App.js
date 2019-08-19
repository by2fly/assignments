
import React, { Component } from 'react'
// import ToDoContainer from '.import { log } from 'util';
// /ToDoContainer'
import axios from 'axios'



class App extends Component {
    constructor () {
        super ()
        this.state = {
            todos: []
        }

    }

    componentDidMount(){
        axios.get("https://api.vschool.io/brian/todo/")
        // .then(res => console.log(res.data))    TRY THESE FIRST TO CONFIRM DATA RESPONSE AND SPECIFIC KEY NAMES
        // .catch(err => console.log(err))
        .then(res => {
            this.setState({todos: res.data}) 

            })
        }
    }

    render() {
        const mappedToDos = this.state.todos.map(todo => {
// console.log(this.state)
        })
        return (
            <div>
            <mappedToDos/>
            </div>

        )

    }




}

export default App
























// export default App = () => {
//     return (
//         <div>
//             <ToDoContainer />
//         </div>


//     )

// }
