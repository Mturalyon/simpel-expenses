import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import GetExpenses from "./getExpenses";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart () {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    
        const handleData = useCallback((fetchedData) => {
            if (fetchedData instanceof Error) {
              setError(fetchedData.message)
            } else {
              setData(fetchedData);
            }
              
            }, []);

    const pieData = {
        labels: ["Food", "Travel", "Lodging"],
        datasets: [
            {
                data: [30, 40, 30],
                backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
                hoverBackgroundColor: ["#ff4365", "#1e90ff", "#ffb400"],
            },
        ]
    };

    return (
    <div>
        <h1>Summary</h1>
        {error && <div style={{ color: "red" }}>Error: {error}</div>}

        {data.length === 0 ? (
                <div>
                    <p>You have not added any expenses</p>
                    <Link to="/Add">
                        <button>Add Expense</button>
                    </Link>
                </div>
            ) : (
                <div style={{ width: "300px", height: "300px" }}>
                    <Pie data={pieData} />
                </div>
            )}

        <GetExpenses fetchedData={handleData} />
    </div>
    )
};

export default PieChart;