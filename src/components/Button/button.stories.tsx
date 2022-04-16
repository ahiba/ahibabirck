import React from 'react' 
import { action } from '@storybook/addon-actions'
import { addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Button, { ButtonSize, ButtonType } from './button'


const styles:React.CSSProperties = {
  textAlign: 'center'
}

const CenterDecoration = (storyFn:Function) => <div style={styles}>{storyFn()}</div>

export default {
    title: 'ahibabrick/Button',
    component: Button,
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
  const Template = (args) => <Button onClick={action('clicked')} {...args}>{args.children}</Button>;
  
  export const Primary = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  Primary.args = {
    btnType: ButtonType.Primary,
    children: 'default button'
  };

  export const Link = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
 Link.args = {
    btnType: ButtonType.Link,
    size: ButtonSize.Large,
    children: 'baidu',
    href: 'http://www.baidu.com',
  };

  export const 不同尺寸button = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  不同尺寸button.args = {
    size: ButtonSize.Large,
    btnType: ButtonType.Danger,
    children: 'Large Danger'
  };
