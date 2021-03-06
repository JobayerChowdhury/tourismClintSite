import { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://peaceful-escarpment-51902.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services, setServices];
};

export default useServices;