import { useEffect, useState } from 'react';

const useResorts = () => {
    const [resorts, setResorts] = useState([])
    useEffect(() => {
        fetch('https://peaceful-escarpment-51902.herokuapp.com/resorts')
            .then(res => res.json())
            .then(data => setResorts(data))
    }, [])
    return [resorts, setResorts];
};

export default useResorts;