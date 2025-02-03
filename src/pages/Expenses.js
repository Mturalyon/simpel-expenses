import { useState, useCallback } from "react";
import GetExpenses from "../components/getExpenses";

function Expenses() {
    const [data, setData] = useState([]);

    const handleData = useCallback((fetchedData) => {
            setData(fetchedData);
        }, []);

    return(
        <div>
          <h1>Fetched Data</h1>
          <GetExpenses fetchedData={handleData} />
          <ul>
            {data.map(expense => (
              <li key={expense.id}>Name - {expense.name}</li>
            ))}
          </ul>
        </div>
        )

   
}

export default Expenses;