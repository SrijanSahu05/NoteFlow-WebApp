import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToNotes, updateToNotes } from '../redux/noteSlice';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const noteId = searchParams.get("noteId");
  const dispatch = useDispatch();
  const NotesElements = useSelector((state) => state.note.notes);

  useEffect(() => {
    if(noteId){
        const note = NotesElements.find((n) => n._id === noteId);
        setTitle(note.title);
        setValue(note.content);
    }
  }, [noteId]);

  function createNote(){
    const note = {
        title: title,
        content: value,
        _id: noteId || Date.now().toString(36),
        createdAt: new Date().toISOString(),
    }

    if(noteId){
        //update
        dispatch(updateToNotes(note));
    }
    else{
        //create
        dispatch(addToNotes(note));
    }

    //after creation or updation
    setTitle('');
    setValue('');
    setSearchParams({});
  }
// min-h-screen px-4 sm:px-8 py-6 bg-gray-100
  return (
    <div className='min-h-screen px-4 sm:px-8 py-6 bg-gray-100'>
        <div className='max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6 space-y-6'>
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <input 
                    className='p-2 rounded-md mt-2 w-[66%] pl-4 border-2 border-black'
                    type="text"
                    placeholder='Enter title here'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <button
                    className='p-2 rounded-md mt-2 border-2 border-black bg-blue-700 text-white'
                    onClick={createNote} >
                    {
                        noteId ? "Update Note" : "Create My Note"
                    }
                </button>
            </div>

            <textarea
                className='w-full h-[500px] p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none 
                focus:ring-2 focus:ring-blue-500 resize-none' 
                value={value}
                placeholder='Enter Content here....'
                onChange={(e) => setValue(e.target.value)}
                rows={20}
            />    
        </div>
    </div>
  )
}

export default Home
