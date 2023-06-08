import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { mockCars } from '../server/cars';

const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [cars, setCars] = useState(null);

    const fetchCars = async () => {
        setIsLoading(true);
        api('carros')
        .then(function(response) {
                if (response.status == 200) {
                    setCars(response.data);
                }
                else {
                    setCars(mockCars);
                }
            })
            .catch(function () { setCars(mockCars) })
            .then(function() { setIsLoading(false) });
        /* try {
            const response = await axios.get(
                'https://overseas-7xnx.onrender.com/carros',
                {
                    auth: {
                        username: 'root@root.com',
                        password: 'rootroot'
                    },
                },
            )
            if (response.status == 200) {
                setCars(response.data);
            }
            else {
                setIsError(JSON.stringify(response));
            }
        }
        catch (err) {
            setIsError(JSON.stringify(err));
        }
        finally {
            setIsLoading(false);
        } */
        /* return fetch('https://overseas-7xnx.onrender.com/carros', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + btoa('root@root.com:rootroot'),
                'Accept': 'application/json',
                'Content-type': 'application/json',
            }
        })
            .then((response) => {
                var contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    return response.json().then(function (json) {
                        // process your JSON further
                    });
                } else {
                    console.log("Oops, we haven't got JSON!");
                }
                if (response.status == 200) {
                    setCars(response);
                }
                else {
                    setIsError(response);
                }
            })
            .catch((err) => setIsError(err))
            .then(() => setIsLoading(false)); */
        /* try {
            const response = await fetch(
                'https://overseas-7xnx.onrender.com/carros',
                {
                    headers: {
                        Authorization: "Basic " + base64.encode('root@root.com:rootroot'),
                        'Accept': 'application/json',
                        'Content-type': 'application/json',
                    },
                }
            );
            data = await response.json();
            setCars(data);
            return data;
        } catch (error) {
            setIsError(error);
        } finally {
            setIsLoading(false);
        } */
       
    }


    useEffect(() => {
        fetchCars();
    }, []);

    return {
        isLoading,
        cars,
        fetchCars
    }
};

export default useFetch;