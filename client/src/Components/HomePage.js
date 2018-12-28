import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Title = styled.div`
height: 100%vh;
font-size: 1.5em;
text-align: center;
color: white
`

class HomePage extends Component {
    render() {
        return(
            <Title>
                <h1>Welcome To Your Weather App</h1>
                <button>Click Here to Enter</button>
            </Title>
        )
    }
}

export default HomePage