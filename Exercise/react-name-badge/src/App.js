import React, {Component} from 'react'
import { numberLiteralTypeAnnotation, numericLiteral } from '@babel/types';

class Form extends React.Component {       
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            birthPlace: '',
            phone: numericLiteral,
            favFood: '',
            tellUs: ''
        }
    }
    
        handleChange = event => {
        event.preventDefault ()
        this.setState( prevState => {
        const person = {
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }
        return {}
        })
    }
    

    render() {
        return (
            <div>
                            <form action="" onSubmit={this.handleSubmit}>



                            </form>














                        </div>








        )
            







    }






        









}





   






















}
















export default App