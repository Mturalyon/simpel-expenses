import { useEffect, useState } from 'react';
import axios from 'axios';

const GetExpenses = ({fetchedData}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/data');
                fetchedData(response.data)
                console.log (response.data)

            } catch(error) {
                setError('There seems to be an Error');
            } finally {
                setLoading(false);
            }
        };

        getData();

    }, [fetchedData]);

    if(loading) {
        return <p>Loading...</p>
    }

    if(error) {
        return <p>{error}</p>
    }

    return null;
}

export default GetExpenses;