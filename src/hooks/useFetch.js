import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { mockCars } from '../server/cars';

const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [cars, setCars] = useState(null);

    const fetchCars = async () => {
        setIsLoading(true);
        api('carros')
            .then((response) => {
                if (response.status === 200) {
                    setCars(response.data);
                } else {
                    setCars(mockCars);
                }
            })
            .catch(() => { setCars(mockCars); })
            .then(() => { setIsLoading(false); });
    };

    useEffect(() => {
        fetchCars();
    }, []);

    return {
        isLoading,
        cars,
        fetchCars,
    };
};

export default useFetch;
