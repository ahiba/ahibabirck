import React from 'react'
import { render, screen, RenderResult, fireEvent, cleanup } from '@testing-library/react'

import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'

const testProps:MenuProps = {
    defaultIndex: 0,
    onSelect: jest.fn(),
    classname: 'test',
}
const testVerProps: MenuProps = {
    defaultIndex: 0,
    mode: 'vertical'
}
const NiceMenu = (props) => {

}

const generateMenu = (props) => {
    return (
        <Menu {...props}>
            <MenuItem index={0}>active</MenuItem>
            <MenuItem index={1} disabled>disabled</MenuItem>
            <MenuItem index={2} >2</MenuItem>
        </Menu>
    )
}

let wrapper:RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement


describe('test menu and menuitem component', () => {
    beforeEach(async () => {
        render(generateMenu(testProps))
        menuElement = await screen.findByRole('test-menu')
        activeElement = await screen.queryByText('active')
        disabledElement = await screen.queryByText('disabled')
    })
    it('should render correct Menu and MenuItem based on default props', () => {
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('viking-menu test')
        expect(menuElement.getElementsByTagName('li').length).toEqual(3)
        expect(activeElement).toHaveClass('menu-item is-active')
        expect(disabledElement).toHaveClass('menu-item is-disabled')
    })
    it('click items should change active and call the right callback' , () => {
        const thirdItem = screen.getByText('2')
        fireEvent.click(thirdItem)
        expect(thirdItem).toHaveClass('is-active')
        expect(activeElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).toHaveBeenCalledWith(2)
        fireEvent.click(disabledElement)
        expect(disabledElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).not.toHaveBeenCalledWith(1)
    })
    it('should render vertical mode when mode is set to vertical' , async() => {
        cleanup()
        render(generateMenu(testVerProps))
        const menuElement2 = await screen.findByRole('test-menu')
        expect(menuElement2).toHaveClass('menu-vertical')
    })
})