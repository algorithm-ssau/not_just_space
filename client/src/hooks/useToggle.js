import { useState } from 'react';

export const useToggle = () => {
    const [isTrue, setIsTrue] = useState(false);

    function toggle() {
        setIsTrue(!isTrue);
    }

    return [
        isTrue,
        toggle,
    ]
};