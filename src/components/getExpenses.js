import { useEffect } from 'react';
import axios from 'axios';

const GetExpenses = ({fetchedData}) => {

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/data');
                fetchedData(response.data)

            } catch(error) {
                fetchedData(error)
                console.log(error)
            }
        };

        getData();

    }, [fetchedData]);

    return null;
}

export default GetExpenses;