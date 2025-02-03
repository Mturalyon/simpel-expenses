import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
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
    <div style={{ width: "300px", height: "300px" }}>
      <Pie data={pieData} />
    </div>
    )
};

export default PieChart;