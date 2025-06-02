import { useState } from "react";

const TestingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  return (
    <div>
      <form>
        <input
          name="name"
          onChange={handleChange}
          placeholder="Name"
          value={formData.name}
        />

        <input
          name="email"
          onChange={handleChange}
          placeholder="Email"
          value={formData.email}
        />

        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          value={formData.password}
        />
      </form>

      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default TestingForm;
