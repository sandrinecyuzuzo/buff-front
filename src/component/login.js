import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    dicription: "",
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("dicription", formData.dicription);
    formDataToSend.append("image", formData.image);

    try {
      const response = await axios.post("http://localhost:8000/endpoint/", formDataToSend);
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description:</label>
          <textarea
            name="dicription"
            type="text"
            value={formData.dicription}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
