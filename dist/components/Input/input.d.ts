import React, { InputHTMLAttributes, ChangeEvent, ReactElement } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
export declare type InputProps = InputHTMLAttributes<HTMLElement> & {
    disabled?: boolean;
    size?: 'lg' | 'sm';
    icon?: IconProp;
    prepend?: string | ReactElement;
    append?: string | ReactElement;
    className?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
declare const Input: React.FC<InputProps>;
export default Input;
