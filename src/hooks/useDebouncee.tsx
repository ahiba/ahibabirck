import React, { useState, useEffect } from 'react'

function useDebouncee (value: any, delay = 300) {
    const [ debouncedValue, setDebouncedValue ] = useState(value)
    useEffect(() => {
        const handler = window.setTimeout(() => {
            setDebouncedValue(value)
        }, delay)
        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])
    return debouncedValue
}

export default useDebouncee