import { useEffect, useState } from 'react'

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState();
    useEffect(() => {
        const handeler = setTimeout(() => {
            setDebounceValue(value)
        }, delay)
        return ()=>{
            clearTimeout(handeler)
        }
    }, [value, delay])
    return debounceValue;
}

export default useDebounce