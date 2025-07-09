import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisH,
  faComment,
  faHeart,
  faRetweet,
  faUpload,
  faChartBar,
} from '@fortawesome/free-solid-svg-icons';

const Tweet = ({ tweet }) => {
  const [comments, setComments] = useState(tweet.comments || 0);
  const [likes, setLikes] = useState(tweet.likes || 0);
  const [retweets, setRetweets] = useState(tweet.retweets || 0);

  function handleAction(action) {
    switch (action) {
      case 'like':
        setLikes(likes + 1);
        break;
      case 'retweet':
        setRetweets(retweets + 1);
        break;
      case 'comments':
        setComments(comments + 1);
        break;
      default:
        break;
    }
  }

  return (
    <div className="border-b border-gray-700 p-4 hover:bg-gray-800 transition duration-100">
      <div className="flex space-x-3">
        <img src={tweet.avatar} alt="user avatar" className="rounded-full w-12 h-12" />

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-bold">{tweet.name}</span>
              <span className="text-gray-500 ml-2">@{tweet.username}</span>
              <span className="text-gray-500 ml-2">{tweet.time}</span>
            </div>
            <FontAwesomeIcon icon={faEllipsisH} className="text-gray-500 cursor-pointer" />
          </div>
          <p className="mt-2">{tweet.content}</p>
          {tweet.image && (
            <img src={tweet.image} alt="tweet image" className="mt-3 rounded-2xl max-w-full h-auto" />
          )}
          <div className="flex justify-between mt-4 text-gray-500">
            <div className="flex items-center cursor-pointer hover:text-blue-400" onClick={() => handleAction('comments')}>
              <FontAwesomeIcon icon={faComment} />
              <span className="ml-2">{comments}</span>
            </div>
            <div className="flex items-center cursor-pointer hover:text-green-400" onClick={() => handleAction('retweet')}>
              <FontAwesomeIcon icon={faRetweet} />
              <span className="ml-2">{retweets}</span>
            </div>
            <div className="flex items-center cursor-pointer hover:text-red-400" onClick={() => handleAction('like')}>
              <FontAwesomeIcon icon={faHeart} />
              <span className="ml-2">{likes}</span>
            </div>
            <div className="flex items-center cursor-pointer hover:text-blue-400">
              <FontAwesomeIcon icon={faChartBar} />
            </div>
            <div className="flex items-center cursor-pointer hover:text-blue-400">
              <FontAwesomeIcon icon={faUpload} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;

