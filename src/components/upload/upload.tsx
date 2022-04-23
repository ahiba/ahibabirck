import React, { FC, useRef, useState, ChangeEvent } from 'react'
import axios from 'axios'

import Button from '../Button/button'
import UploadList from './uploadList'
import Dragger from './dragger'

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'
export interface UploadFile {
    uid: string;
    size: number;
    name: string;
    status?: UploadFileStatus;
    percent?: number;
    raw?: File;
    response?: any;
    error?: any;
}
export interface UploadProps {
    action: string;
    defaultFileList?: UploadFile[],
    beforeUpload?: (file: File) => boolean | Promise<File>;
    onProgress?: (percentage: number, file: File) => void;
    onSuccess?: (data: any, file: File) => void;
    onError?: (err:any, file:File) => void;
    onChange?: (file:File) => void;
    onRemove?: (file: UploadFile) => void;
    headers?: {[key:string]: any};
    name?: string;
    data?: {[key:string]: any};
    withCredentials?: boolean;
    accept?: string;
    multiple?: boolean;
    drag?: boolean;
}

const Upload:FC<UploadProps> = (props) => {
    const {
        action,
        defaultFileList,
        beforeUpload,
        onProgress,
        onSuccess,
        onError,
        onChange,
        onRemove,
        headers,
        name,
        data,
        withCredentials,
        accept,
        multiple,
        children,
        drag,
    } = props
    const [ fileList, setFileList ] = useState<UploadFile[]>([])
    const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
        setFileList(prevList => {
            return prevList.map(file => {
                if (file.uid === updateFile.uid) {
                    return {
                        ...file,
                        ...updateObj,
                    }
                } else {
                    return file
                }
            })
        })
    }
    const fileInput = useRef<HTMLInputElement>(null)
    const handleClick = () => {
        if (fileInput.current) {
            fileInput.current.click()
        }
    }
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files 
        if (!files) {
            return 
        }
        uploadFiles(files)
        if (fileInput.current) {
            fileInput.current.value = ''
        }
    }
    const uploadFiles = (files: FileList) => {
        let postFiles = Array.from(files)
        postFiles.forEach(file => {
            if (!beforeUpload) {
                post(file) 
            } else {
                const result = beforeUpload(file)
                if (result && result instanceof Promise) {
                    result.then(processedFile => {
                        post(processedFile)
                    })
                } else if (result !== false) {
                    post(file)
                }
            }
          
        })
    }
    const post = (file:File) => {
        let _file: UploadFile = {
            uid: Date.now() + 'upload-file',
            status: 'ready',
            name: file.name,
            size: file.size,
            percent: 0,
            raw: file,
        }
        // setFileList([_file, ...fileList])
        setFileList((prevList) => {
            return [_file, ...prevList]
        })
        const formData = new FormData()
            formData.append(name || 'file', file)
            if (data) {
                Object.keys(data).forEach(key => {
                    formData.append(key, data[key])
                })
            }
            axios.post(action, formData, {
                headers: {
                    ...headers,
                    'Content-Type': 'nultipart/form-data'
                },
                withCredentials,
                onUploadProgress: (e) => {
                    let percentage = Math.round((e.loaded * 100) / e.total) || 0
                    if (percentage < 100) {
                        updateFileList(_file, { percent: percentage, status: 'uploading'})
                        if (onProgress) {
                            onProgress(percentage, file)
                        }
                    }
                }
            }).then(res => {
                console.log(res)
                updateFileList(_file, { status: 'success', response: res.data })
                if (onSuccess) {
                    onSuccess(res.data, file)
                }
                if (onChange) {
                    onChange(file)
                }
            }).catch(err => {
                updateFileList(_file, { status: 'error', response: err })
                console.log(err)
                if (onError) {
                    onError(err, file)
                }
                if (onChange) {
                    onChange(file)
                }
            })
    }
    return (
        <div
            role="upload"
            className="viking-upload-component"
            style={{ display: 'inline-block' }}
            onClick={handleClick}
        >

            {drag ?
                <Dragger
                    onFile={(files) => {
                        uploadFiles(files)
                    }}
                >
                    {children}
                </Dragger>
                :
                children
            }
            <input 
                role="fileInput"
                className="viking-file-input"
                style={{ display: 'none' }}
                ref={fileInput}
                type="file"
                onChange={handleFileChange}
                accept={accept}
                multiple={multiple}
            />
                <UploadList
                    fileList={fileList}
                    onRemove={fileItem => {
                        console.log(fileItem)
                        // 删除这一项
                        setFileList(fileList.filter(item => item.uid !== fileItem.uid))
                        onRemove && onRemove(fileItem)
                    }}
                ></UploadList>
        </div>
    )
}

Upload.defaultProps = {
    name: 'file'
}

export default Upload