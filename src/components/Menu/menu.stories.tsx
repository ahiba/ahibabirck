import React from 'react' 
import { action } from '@storybook/addon-actions'
import { addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Menu from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'


const styles:React.CSSProperties = {
  textAlign: 'center'
}

const CenterDecoration = (storyFn:Function) => <div style={styles}>{storyFn()}</div>

export default {
    title: 'ahibabrick/Menu',
    component: Menu,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
    // parameters: {
    //     info: {
    //         text: `
    //             this is a very nice component
    //             ~~~s
    //             const a = 'hello'
    //             ~~~
    //         `,
    //         inline: true,
    //     },
    // },
  };
  
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template = (args) =>  (
    <Menu 
      {...args}
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
  )
;
  
  export const 菜单 = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  菜单.args = {

  };

