import React, { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState('');

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
    
        return () => {
          clearTimeout(debounceTimer);
        };
    }, [value, delay]);
    
    return debouncedValue;
}

export default useDebounce;