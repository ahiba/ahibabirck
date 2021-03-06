import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group'
import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Tabs from './components/Tabs/tabs'
import TabItem from './components/Tabs/tabItem'
import Icon from './components/Icon/icon'
import Transition from './components/Transition/transition'
import Input from './components/Input/input'
import Upload from './components/upload/upload'

import './styles/index.scss'

library.add(fas)


function App() {
  const [inProp, setInProp] = useState(false);
  const [ show, setShow ] = useState(false)
  return (
    <div className="App">
      <Upload 
        drag
        action="https://jsonplaceholder.typicode.com/posts"
        onProgress={(percentage) => {
          console.log('当前的percentage', percentage)
        }}
      />

      <Input icon="coffee" prepend="www" />
      <Icon icon="coffee" theme="primary" size="lg" />
      <Icon icon="arrow-down" theme="info" size="lg" />
      <Button disabled>Hello</Button>
      <Button >Hello</Button>
      <Button  href="http://baidu.com">baidu link</Button>
      <Button onClick={() => setShow(!show)}>
        toggle
      </Button>
      <Transition
        in={show}
        timeout={300}
        animation="zoom-in-right"
      >
        <div>
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
        </div>
      </Transition>
      <Transition
        in={show}
        timeout={300}
        animation="zoom-in-right"
        wrapper
      >
          <Button>a large button</Button>
      </Transition>
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
