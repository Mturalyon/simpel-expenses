import { useState } from "react";
import axios from "axios";

const ExpenseForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/data", formData);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
      <input type="text" name="name" placeholder="Enter name" value={formData.name} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Enter Price" value={formData.price} onChange={handleChange} required />
      <select name="category" value={formData.category} onChange={handleChange}>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Lodging">Lodging</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExpenseForm;