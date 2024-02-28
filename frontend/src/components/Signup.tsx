import { useState } from "react";

const Signup = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const signup = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('http://localhost:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        password: formData.password
      })
    });
  }

  return (
    <div className="min-h-screen py-16">
      <div>
        <h1 className="text-3xl font-bold text-center py-16">Car-on-Rent</h1>
        <p className="text-center text-lg font-semibold pb-16">Create your account</p>
        <form className="mx-auto max-w-md" onSubmit={signup}>
          <input type="text" name="name" value={formData.name} placeholder="Name" className="w-full border-2 rounded-md p-2 mb-4 outline-none" onChange={handleInputChange}/>
          <input type="email" name="email" value={formData.email} placeholder="Email" className="w-full border-2 rounded-md p-2 mb-4 outline-none" onChange={handleInputChange}/>
          <input type="text" name="contact" value={formData.contact} placeholder="Contact (+91)" className="w-full border-2 rounded-md p-2 mb-4 outline-none" onChange={handleInputChange}/>
          <input type="password" name="password" value={formData.password} placeholder="Password" className="w-full border-2 rounded-md p-2 mb-4 outline-none" onChange={handleInputChange}/>
          <button className="w-full bg-slate-300 hover:bg-slate-200 font-bold py-2 px-10">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Signup;