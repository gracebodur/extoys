import React, { Component } from 'react'
import { StyledFormWrapper, StyledForm, StyledInput, StyledButton, StyledMessage } from '../../../styles/FormStyle'

export default class Register extends Component {
    render() {
        return (
            <StyledFormWrapper>
                <StyledForm>
                    <StyledInput name="username"
                        placeholder="Username"
                        type="text">
                    </StyledInput>

                    <StyledInput name="email"
                        placeholder="Email Address"
                        type="email">
                    </StyledInput>

                    <StyledInput name="password"
                        placeholder="Password"
                        type="password">
                    </StyledInput>

                    <StyledInput name="passwordConfirmation"
                        placeholder="Confirm Password"
                        type="password">
                    </StyledInput>

                    <StyledButton>Submit</StyledButton>
                    <StyledMessage>Already have an account? Login</StyledMessage>
                </StyledForm>
            </StyledFormWrapper>
        )
    }
}
