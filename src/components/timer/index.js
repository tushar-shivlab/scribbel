import { useEffect, useState } from 'react';

const Timer = () => {
    const [second, setSecond] = useState(50);
    useEffect(() => {
        if (second > 0) {
            setTimeout(() => setSecond(second - 1), 1000);
        } else {
            setTimeout(() => setSecond(50), 5000);
        }
    }, [second]);
    return <p>{second}</p>;
};
export default Timer;
