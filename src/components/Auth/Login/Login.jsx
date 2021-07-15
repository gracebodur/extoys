import React, { Component } from 'react'
import { StyledFormWrapper, StyledForm, StyledInput, StyledButton, StyledMessage } from '../../../styles/FormStyle'

export default class Login extends Component {
    render() {
        return (
            <StyledFormWrapper>
                <StyledForm>
                    <StyledInput name="email"
                        placeholder="Email Address"
                        type="email">
                    </StyledInput>

                    <StyledInput name="password"
                        placeholder="Password"
                        type="password">
                    </StyledInput>
                    <StyledButton>Submit</StyledButton>
                    <StyledMessage>Don't have an account? Register</StyledMessage>
                </StyledForm>
            </StyledFormWrapper>
        )
    }
}
