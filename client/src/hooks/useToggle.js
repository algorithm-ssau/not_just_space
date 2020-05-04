import { useState } from 'react';

export const useToggle = () => {
    const [isTrue, setIsTrue] = useState(false);

    function toggle() {
        console.log(isTrue)
        setIsTrue(!isTrue);
    }

    return [
        isTrue,
        toggle,
    ]
};