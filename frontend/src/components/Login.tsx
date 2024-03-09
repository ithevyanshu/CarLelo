import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from 'recoil';
import { userState } from "../atom/userAtom";
import useTitle from "../hooks/useTitle";

const Login = () => {
  useTitle("Login");
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState); 

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', formData);
      const accessToken = response.data;
      localStorage.setItem('x-var', accessToken);

      setUser({ isLogged: true });

      navigate('/');
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  return (
    <div className="min-h-screen py-16">
      <div>
        <p className="text-center text-lg font-semibold py-16">Login to your account</p>
        <form className="mx-auto max-w-md" onSubmit={login}>
          <input name="email" value={formData.email} type="email" placeholder="Email" className="w-full border-2 rounded-md p-2 mb-4 outline-none" onChange={handleInputChange} />
          <input name="password" value={formData.password} type="password" placeholder="Password" className="w-full border-2 rounded-md p-2 mb-4 outline-none" onChange={handleInputChange} />
          <button className="w-full bg-slate-300 hover:bg-slate-200 font-bold py-2 px-10">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
