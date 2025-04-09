import React from 'react';
import { XMarkIcon, CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const Message = ({ message, type = 'success', onClose }) => {
  {/* Define styles based on message typen*/}
  const styles = {
    success: {
      background: 'bg-green-50',
      text: 'text-green-800',
      border: 'border-green-200',
      icon: <CheckCircleIcon className="w-5 h-5 text-green-500" />
    },
    error: {
      background: 'bg-red-50',
      text: 'text-red-800',
      border: 'border-red-200',
      icon: <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
    },
    info: {
      background: 'bg-blue-50',
      text: 'text-blue-800',
      border: 'border-blue-200',
      icon: <InformationCircleIcon className="w-5 h-5 text-blue-500" />
    }
  };

  const currentStyle = styles[type] || styles.success;

  return (
    <div
      className={`flex items-center px-4 py-3 rounded-md border ${currentStyle.border} ${currentStyle.background} ${currentStyle.text} my-4 shadow-sm transition-all duration-300 ease-in-out`}
    >
      <div className="mr-3 flex-shrink-0">
        {currentStyle.icon}
      </div>
      <div className="flex-grow font-medium">{message}</div>
      <button 
        onClick={onClose}
        className="ml-2 p-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
        aria-label="Close message"
      >
        <XMarkIcon className="w-5 h-5 text-gray-500" />
      </button>
    </div>
  );
};

export default Message;
