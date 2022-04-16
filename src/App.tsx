import React from 'react'

import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'
import Button from './components/Button/button'

import './styles/index.scss'


function App() {
  return (
    <div className="App">
      <Button disabled>Hello</Button>
      <Button >Hello</Button>
      <Button href="http://baidu.com">baidu link</Button>
      <Menu 
        defaultIndex={'0'} 
        onSelect={(index) => {alert(index)}} 
        defaultOpenSubMenus={['2']}
      >
        <MenuItem>
          cool link
        </MenuItem>
        <MenuItem disabled>
          cool link 2
        </MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>
            dropdown 1
          </MenuItem>
          <MenuItem>
            dropdown 2
          </MenuItem>
        </SubMenu>
        <MenuItem>
          cool link 3
        </MenuItem>
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
