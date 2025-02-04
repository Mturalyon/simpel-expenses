import { useState, useCallback } from "react";
import GetExpenses from "../components/getExpenses";
import { Link } from "react-router-dom";

function Expenses() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const handleData = useCallback((fetchedData) => {
        if (fetchedData instanceof Error) {
          setError(fetchedData.message)
        } else {
          setData(fetchedData);
        }
            
        }, []);

    return(
        <div>
          <h1>My Expenses</h1>

          {error && <div style={{ color: "red" }}>Error: {error}</div>}
          {data.length === 0 ? (
                <div>
                    <p>You have not added any expenses</p>
                    <Link to="/Add">
                        <button>Add Expense</button>
                    </Link>
                </div>
            ) : (
                <ul>
                    {data.map(expense => (
                        <li key={expense.id}>Name - {expense.name}</li>
                    ))}
                </ul>
            )}
          
          <GetExpenses fetchedData={handleData} />
        </div>
        )

   
}

export default Expenses;