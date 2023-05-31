import React, { useState } from 'react';
import { api } from '../services/api';

export const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [cars, setCars] = useState([]);

    const fetchCars = () => {
        setIsError(false)
        setIsLoading(true);
        api('/carros')
            .then(function (response) {
                if (response.status == 200) {
                    setCars(response.data);
                }
            })
            .catch(function () {
                setIsError(true)
            })
            .then(function () {
                setIsLoading(false);
            });
    }

    return {
        isLoading,
        isError,
        cars,
        fetchCars
    }

};