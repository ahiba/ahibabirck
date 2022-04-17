import React from 'react'

import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Tabs from './components/Tabs/tabs'
import TabItem from './components/Tabs/tabItem'

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
      <Tabs  styleType="outline" >
        <TabItem label="card1">this is on card1</TabItem>
        <TabItem label="card2">
          <div style={{ width: '100px', height: '100px', background: 'red' }}>
            花红袄 绿头巾
          </div>
        </TabItem>
        <TabItem label="card3">this is on card3</TabItem>
        <div>55555</div>
      </Tabs>
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
