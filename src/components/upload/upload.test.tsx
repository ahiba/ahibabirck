import "@testing-library/jest-dom/extend-expect"
import React from 'react'
import { render, fireEvent, screen, RenderResult, waitFor } from '@testing-library/react'
import axios from 'axios'

import Upload, { UploadProps } from './upload'
import { WatchIgnorePlugin } from "webpack"

jest.mock('../Icon/icon', () => {
    return ({ icon }) => {
        return <span>{icon}</span>
    }
})
jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>
const testProps:UploadProps = {
    action: 'fakerurl.com',
    onSuccess: jest.fn(),
    onChange: jest.fn(),
}
let wrapper: any, fileInput: any, uploadArea: any
const testFile = new File(['xyz'], 'test.png', { type: 'image/pgn' })

describe('test upload component', () => {
    beforeEach(() => {
        render(<Upload {...testProps}>click to upload</Upload>)
        wrapper = screen.findByRole('upload')
        fileInput = screen.findByRole('fileInput')
        uploadArea = screen.findByText('click to upload')
    })
    it('uplad proces should works fine', async () => {
        const {  queryByText} = wrapper
        // mockedAxios.post.mockImplementation(() => {
        //     return Promise.resolve({
        //         'data': 'cool'
        //     })
        // })
        mockedAxios.post.mockResolvedValue({ 'data': 'cool' })
        // expect(uploadArea).toBeInTheDocument()
        // expect(fileInput).not.toBeVisible()
        fireEvent.change(fileInput, { target: { files: [testFile ]}})
        expect(queryByText('spinner')).toBeInTheDocument()
        await waitFor(() => {
            expect(queryByText('test.png')).toBeInTheDocument()
            expect(queryByText('check-cicle')).toBeInTheDocument()
            expect(testProps.onSuccess).toHaveBeenCalledWith('cool', testFile)
            expect(testProps.onChange).toHaveBeenCalledWith(testFile)
        })
    })
})
