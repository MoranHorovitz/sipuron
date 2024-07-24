import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const BookCreate = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();
  
  const handleSubmit = async (event: React.FormEvent) => {
    navigate('/book/1');

    event.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post('https://sipuron.onrender.com/events', {
        age,
        description,
      });

      if (response.status === 201) {
        setSuccess(true);
      }
    } catch (err) {
      setError('Error creating book');
    }
  };

  return (
    <div className="container min-w-[100%] h-screen px-6 lg:px-[22%] pt-[100px] pb-[70px] from-[#ffedf3] via-[#fffcf5] to-[#fafbff] flex justify-center items-center">
      <form onSubmit={handleSubmit} className='md:bg-white rounded-3xl px-[50px] py-8 lg:min-w-[564px] mt-[40px] overflow-scroll h-full'>
        <h2 className='font-[600] text-[32px] text-[#a5a5d9] md:text-black opacity-50 pb-8 leading-1 md:opacity-100 md:pb-0'>Easy Bedtime Story Customizer</h2>
        <h2 className='p-1 pt-0 pb-6 text-start text-[15px]'>Personalize a magical bedtime story for your child in just a few clicks!</h2>
      <div className="mb-4">
          <label className="block text-gray-700 text-[12px] text-start font-bold mb-1 opacity-50" htmlFor="title">
          Child’s name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="opacity-60 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>        
        <div className="mb-4">
          <label className="block text-gray-700 text-[12px] text-start font-bold mb-1 opacity-50" htmlFor="title">
          Child’s age
          </label>
          <input
            type="text"
            id="Age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="opacity-60 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-[12px] text-start font-bold mb-1 opacity-50" htmlFor="description">
          Story length
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="opacity-60 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-[12px] text-start font-bold mb-2 opacity-50" htmlFor="description">
          Child’s common challenges
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="opacity-60 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          /> 
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-[12px] text-start font-bold mb-1 opacity-50" htmlFor="description">
          Any specific requests or details
          </label>
          <input
            type="text"
            id="more"
            name="more"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="opacity-60 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          /> 
        </div>
        <button
          type="submit"
          className="bg-[#6366f2]/90 hover:bg-[#6366f2] text-white font-[900] py-2 px-4 mt-2 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Generate
        </button>
      </form>
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
      {success && <p className="text-green-500 text-xs italic">Book created successfully!</p>}
    </div>
  );
};
