  import React, {Component} from 'react'


 const ThemeContext = React.createContext(   //a context variable   Returns a PROVIDER & CONSUMER

 )
 
class ThemeProvider extends Component {
    constructor(){
        super()
        this.state = {
            theme: 'light'
        }
    }

    changeTheme = () => {
        this.setState(prevState => ({
            theme: prevState.theme === 'light' ? 'dark' : 'light' 
      }))
    }
    render () {
        return (
            <ThemeContext.Provider        //The PROVIDER
                value={{                  // what is being transfered in
                    theme: this.state.theme,
                    changeTheme: this.changeTheme
                }
                }>
                { this.props.children } 

            </ThemeContext.Provider>

        )

    }
       


}
//make the consumer
export const withTheme = C => props => (
    <ThemeContext.Consumer>
        {value => <C {...value} {...props}/>}
    </ThemeContext.Consumer>
)

export default ThemeProvider
