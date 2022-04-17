import React, { InputHTMLAttributes, ChangeEvent, ReactElement } from 'react'
import classNames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon/icon'

export type InputProps = InputHTMLAttributes<HTMLElement> & {
    disabled?: boolean,
    size?: 'lg' | 'sm',
    icon?: IconProp, // todo 需优化
    prepend?: string | ReactElement,
    append?: string | ReactElement,
    className?: string,
    onChange? : (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input:React.FC<InputProps> = (props) => {
    // 取出所有的属性
    const { disabled, size, icon, prepend, append, style, ...restProps } = props
    // 根据不同的属性计算className

    const classes = classNames('viking-input-wrapper', {
        [`input-size-${size}`]: size,
        'is-disabled': disabled,
        'input-group': prepend || append,
        'input-group-append': !!append,
        'input-group-prepend': !!prepend
    })

    const fixControlledValue = (value: any) => {
        if (typeof value === 'undefined' || value === null) {
        return ''
        }
        return value
    }

    if ('value' in props) {
        delete restProps.defaultValue
        restProps.value = fixControlledValue(props.value)
    }

    return (
        <div className={classes} style={style}>
            {prepend && <div className="viking-input-group-prepend">{prepend}</div>}
            {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`} /></div>}
            <input
            className="viking-input-inner"
            disabled={disabled}
            {...restProps}
            />
            {append && <div className="viking-input-group-append">{append}</div>}
        </div>
    )
}

Input.defaultProps = {
    disabled: false
}
export default Input