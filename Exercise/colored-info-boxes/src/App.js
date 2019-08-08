import React from 'react';
import Box from './Box';
import './styles.css';


const App = () => {
    return (
        <div className="containerX">
            <Box title='1' subtitle="moja" info='mo-JAH' backgroundColor= 'lightgrey' />
            <Box title='2' subtitle='mbili' info='m-bee-lee' backgroundColor= 'darkgrey'  />
            <Box title='3' subtitle='tatu' info='ta-too' backgroundColor='red' />
            <Box title='4' subtitle='nne' info='n-nay' backgroundColor= 'orange' />
            <Box title='5' subtitle='tano' info='tah-no' backgroundColor= 'yellow' />
            <Box title='6' subtitle='sita' info='see-tah' backgroundColor= 'green' />
            <Box title='7' subtitle='saba' info='sah-bah' backgroundColor= 'cyan' />
            <Box title='8' subtitle='nane' info='nah-nay' backgroundColor= 'blue' />
            <Box title='9' subtitle='tisa' info='tee-sah' backgroundColor= 'indigo' />
            <Box title='10' subtitle='kumi' info='coo-me' backgroundColor= 'violet' />
        </div>
    ) 
}

export default App