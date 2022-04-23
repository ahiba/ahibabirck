import { FC } from 'react';
import { UploadFile } from './upload';
export interface UploadListProps {
    fileList: UploadFile[];
    onRemove?: (fileItem: UploadFile) => void;
}
declare const UploadList: FC<UploadListProps>;
export default UploadList;
