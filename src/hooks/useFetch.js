import React, { useState } from 'react';
import { api } from '../services/api';

export const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [cars, setCars] = useState();

    const fetchCars = () => {
        setIsError(false)
        setIsLoading(true);
        api('/carros')
            .then((response) => {
                if (response.status == 200) {
                    setCars(response.data);
                }
                else {
                    setIsError(true);
                }
            })
            .catch(() => setIsError(true))
            .then(() => setIsLoading(false));
    }

    return {
        isLoading,
        isError,
        cars,
        fetchCars
    }
};