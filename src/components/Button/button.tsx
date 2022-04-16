import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm',
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link',
}

interface BaseButtonProps {
    /** Buttons background color */
    className?: string;
    /** 设置Button的禁用 */
    disabled?: boolean;
     /** 设置Button的大小 */
    size?: ButtonSize;
    btnType?: ButtonType;
    children: ReactNode;
    href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>


export const Button:FC<ButtonProps> = (props) => {
    const { 
        btnType,
        className,
        disabled,
        size,
        children,
        href,
        ...resetProps
     } = props

     // btn, btn-lg, btn-primary
     const classes = classNames('btn', className, {
         [`btn-${btnType}`]: btnType,
         [`btn-${size}`]: size,
         'disabled': (btnType === ButtonType.Link) && disabled
     })

     if (btnType === ButtonType.Link && href) {
         return (
             <a
                className={classes}
                href={href}
                {...resetProps}
             >
                 {children}
             </a>
         )
     } else {
         return (
             <button
                className={classes}
                disabled={disabled}
                {...resetProps}
             >
                 {children}
             </button>
         )
     }
}

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}
export default Button