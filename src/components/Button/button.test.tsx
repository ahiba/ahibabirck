import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Button from './button'
import { iterator } from 'core-js/library/es6/symbol'


describe('test Button component', () => {
    it('should render the correct default button', () => {
        render(<Button>Nice</Button>)
        const element = screen.queryByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-default')
    })

    it('should render the correct component based on defferent props', () => {

    })

    it('should render a link when btnType equals link and href is provided', () => {

    })

    it('should render disabled whten disabled set to true', () => {

    })
})