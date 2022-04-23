import { FC, ReactElement } from 'react';
import { InputProps } from '../Input/input';
interface DataSourceObject {
    value: string;
}
export declare type DataSourceType<T = {}> = T & DataSourceObject;
declare type AutoCompleteProps = Omit<InputProps, 'onSelect'> & {
    fetchSuggestions: (keyword: string) => (DataSourceType[] | Promise<DataSourceType[]>);
    onSelect: (item: DataSourceType) => void;
    renderOption?: (item: DataSourceType) => ReactElement;
};
declare const AutoComplete: FC<AutoCompleteProps>;
export default AutoComplete;
