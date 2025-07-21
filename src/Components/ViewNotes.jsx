import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FiCopy, FiShare2 } from 'react-icons/fi';
import toast from 'react-hot-toast';

const ViewNotes = () => {
  const { id } = useParams();
  const allNotes = useSelector((state) => state.note.notes);
  const note = allNotes.find((n) => n._id === id);

  function handleCopy(content) {
    navigator.clipboard.writeText(content);
    toast.success('Copied to clipboard');
  }

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: note.title,
          text: note.content,
          url: window.location.href,
        });
      } else {
        alert('Web Share API not supported in your browser.');
      }
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 py-8 bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-6 ">
        {/* Header section with title + actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <input
            className="w-full sm:w-[70%] p-3 text-lg font-semibold border border-gray-300 rounded-md"
            type="text"
            value={note.title}
            disabled
          />

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleCopy(note?.content)}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
              title="Copy Note"
            >
              <FiCopy className="text-gray-700" size={20} />
            </button>
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
              title="Share Note"
            >
              <FiShare2 className="text-gray-700" size={20} />
            </button>
          </div>
        </div>

        {/* Note content */}
        <textarea
          className="w-full p-4 text-base border border-gray-300 rounded-lg bg-gray-50 resize-none"
          value={note.content}
          disabled
          rows={15}
        />
      </div>
    </div>
  );
};

export default ViewNotes;
