import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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