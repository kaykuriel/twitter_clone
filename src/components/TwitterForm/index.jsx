
import { faCalendarAlt, faChartBar, faFilm, faImage, faMapMarkedAlt, faSmile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from 'react';
import PropTypes from 'prop-types'


const TwitterForm = ({ onTweet }) => {
  const textAreaRef = useRef();
  const [textAreaValue, setTextAreaValue] = useState('');

  function handleSubmit() {
    if (textAreaValue) {
      onTweet(textAreaValue)
      setTextAreaValue('');
    }
  }

  return (
    <div className = 'border-b border-gray-700 p-4'>
      <textarea 
      value={textAreaValue}
      onChange={(e) => setTextAreaValue(e.target.value)}
      placeholder="What's happening?" className = 'w-full text-white bg-transparent border-none focus:outline-none resize-none' ref={textAreaRef} />
     <div className = 'flex justify-between items-center mt-4'>
      <div className = 'flex space-x-4 '>
        <FontAwesomeIcon icon={faImage} className = 'text-blue-400 cursor-pointer '/>
        <FontAwesomeIcon icon={faFilm} className = 'text-blue-400 cursor-pointer '/>
        <FontAwesomeIcon icon={faChartBar} className = 'text-blue-400 cursor-pointer '/>
        <FontAwesomeIcon icon={faSmile} className = 'text-blue-400 cursor-pointer '/>
        <FontAwesomeIcon icon={faCalendarAlt} className = 'text-blue-400 cursor-pointer '/>
        <FontAwesomeIcon icon={faMapMarkedAlt} className ='text-blue-400 cursor-pointer'/>
      </div>
      <button className = 'bg-blue-400 text-white font-bold rounded-full px-4 py-2 hover:bg-blue-500' onClick={handleSubmit}>Tweet</button>
     </div>
    </div>
  )
}

TwitterForm.propTypes = {
  onTweet: PropTypes.func.isRequired,
}

export default TwitterForm
