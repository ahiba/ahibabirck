import React from 'react'

import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

import './styles/index.scss'


function App() {
  return (
    <div className="App">
      <Button disabled>Hello</Button>
      <Button >Hello</Button>
      <Button  href="http://baidu.com">baidu link</Button>
      <Menu defaultIndex={'0'} onSelect={(index) => {alert(index)}} mode="vertical" defaultOpenSubMenus={['4-1']}>
        <MenuItem>122</MenuItem>
        <MenuItem disabled>122</MenuItem>
        <MenuItem>3</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>122</MenuItem>
          <MenuItem disabled>122</MenuItem>
          <MenuItem>3</MenuItem>
        </SubMenu>
      </Menu>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
