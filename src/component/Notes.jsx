import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromNotes, resetAllNotes } from '../redux/noteSlice';
import toast from 'react-hot-toast';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const Notes = () => {

  const notes = useSelector((state) => state.note.notes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filterData = notes.filter((note) => note.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleReset = () => {
    if (window.confirm("Are you sure you want to delete all notes?")) {
      dispatch(resetAllNotes());
    }
  };

  function handleDelete(noteId) {
      dispatch(removeFromNotes(noteId));
  }

  function handleCopy(noteContent){
    navigator.clipboard.writeText(noteContent);
    toast.success("copied to clipboard");
  }

  function handleEdit(noteId){
    navigate(`/?noteId=${noteId}`);
  }

  function handleView(noteId){
    navigate(`/notes/${noteId}`);
  }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gray-100'>
      <input
        className='p-3 rounded-2xl w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] mt-5 border border-gray-300 shadow-sm' 
        type="search"
        placeholder='search here'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className='mt-4'>
        <button
          onClick={handleReset}
          className='bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition'
        >
          Delete All Notes
        </button>
      </div>

      <div className='w-full px-4 sm:px-6 md:px-10 flex flex-col gap-6 mt-6 max-w-6xl mx-auto mb-6'>
        {
          filterData.length > 0 && filterData.map(
            (note) => {
              return(
                <div 
                  key={note._id} 
                  className='relative w-full sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[70%] max-w-3xl m-auto border 
                  rounded-xl shadow-md p-5 bg-[#1e1e1e] text-white hover:scale-[1.01] transition-transform 
                  duration-200 flex flex-col justify-between min-h-[180px]'>

                  <div className='absolute top-3 right-3 flex flex-wrap gap-2 sm:gap-3 max-w-[85%] justify-end'>
                    <button className="bg-[#333] p-2 rounded-full hover:bg-[#555] transition duration-200" 
                    onClick={() => handleEdit(note?._id)}><FaEdit className="text-white"/></button>

                    <button className="bg-[#333] p-2 rounded-full hover:bg-[#555] transition duration-200" 
                    onClick={() => handleView(note?._id)}> <FaEye className="text-white"/> </button>

                    <button className="bg-[#333] p-2 rounded-full hover:bg-[#555] transition duration-200" 
                    onClick={() => handleDelete(note?._id)} > <FaTrash className="text-white"/> </button>

                    <button className="bg-[#333] p-2 rounded-full hover:bg-[#555] transition duration-200" 
                    onClick={() => handleCopy(note?.content)}> <FiCopy className="text-white"/> </button>

                  </div>

                  <h2 className="text-2xl text-center font-bold mt-8">{note.title}</h2>

                  <p className='text-sm text-gray-300 mt-2 line-clamp-2'>
                    {note.content}
                  </p>

                  <span className='text-xs text-gray-400 mt-auto pt-4'>
                    {format(new Date(note.createdAt), 'dd MMM yyyy, hh:mm a')}
                  </span>
                  
                </div>
              )
            })
        }
      </div>
    </div>
  )
}

export default Notes