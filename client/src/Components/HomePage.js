import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';


const Title = styled.div`
height: 100vh;
font-size: 1.5em;
text-align: center;
color: white
`

class HomePage extends Component {
    render() {
        return(
            <Title>
                <h1>Welcome To Your Weather App</h1>
                <Button variant='contained' color='primary'><Link to='/user'>Click Here to Enter</Link></Button>
            </Title>
        )
    }
}

export default HomePage