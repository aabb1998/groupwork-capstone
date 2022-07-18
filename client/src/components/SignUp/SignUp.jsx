import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import FormData from 'form-data';

const SignUp = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  useEffect(() => {
    console.log(data);
    console.log(error);
  }, [data, error]);

  function getFormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach((key) => formData.append(key, object[key]));
    return formData;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFormData = getFormData(data);
    try {
      let res = await axios.post('http://localhost:3000/api/users', data);
      console.log('Account created');
      navigate('/login');
    } catch (error) {
      // if (
      //   error.response &&
      //   error.response.status >= 400 &&
      //   error.response.status <= 500
      // ) {
      //   setError(error.response);
      // }
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <div>
        <div>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button">Sing in</button>
          </Link>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
            />
            {error && <div>{error}</div>}
            <button type="submit">Sing Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
