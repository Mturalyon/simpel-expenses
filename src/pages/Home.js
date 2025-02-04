import { Link } from "react-router-dom";

function Home() {
    return(
        <>
            <div className="d-flex flex-column align-items-center mt-5 text-center">
                <h1>Welcome to Simpel</h1>

                <div className="mt-4 w-sm-50 px-2">
                    <Link to="/Add">
                        <button className="btn btn-primary btn-lg w-100 mb-3 fs-4">Add Expense</button>
                    </Link>
                    <Link to="/Expenses">
                        <button className="btn btn-success btn-lg w-100 mb-3 fs-4">My Expenses</button>
                    </Link>
                    <Link to="/Summary">
                        <button 
                            className="btn btn-warning btn-lg text-white w-100 mb-3 fs-4" 
                            style={{ backgroundColor: '#ffc107' }} 
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#e0a800'} 
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#ffc107'}>
                            Summary
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home;