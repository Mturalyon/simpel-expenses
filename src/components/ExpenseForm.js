import { useState } from "react";
import axios from "axios";

function ExpenseForm () {
  /*Building the object for the post request */
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "Food",
  });

  const [message, setMessage] = useState("");

  /*Sets the value of inputs onchange to the formdata, resetting the message to blank to stop rendering it*/
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage("");
  };

  /*on submit async function. preventing default behaviour(reloading html, can cause data loss). POST request to mock API with the formData built. Setting message if success or error. Resetting the formData */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/data", formData);
      console.log("Response:", response.data);
      setMessage("Expense Added ✅")
      setFormData({ name: "", price: "", category: "Food" });
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to add expense ❌")
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm" style={{ maxWidth: "400px", margin: "auto" }}>
        <h3 className="text-center">Add Expense</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Price "NOK"</label>
            <input
              type="number"
              name="price"
              className="form-control"
              placeholder="Enter price"
              value={formData.price}
              onChange={handleChange}
              required
              min="1"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <select name="category" className="form-select" value={formData.category} onChange={handleChange}>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Lodging">Lodging</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>

        {message && (
          <div className="alert mt-3 text-center fs-5" style={{ color: message.includes("Failed") ? "red" : "green" }}> {/*if message is positive(exists), render the div with the message */}
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseForm;