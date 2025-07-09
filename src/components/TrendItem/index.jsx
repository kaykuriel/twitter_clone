import React from 'react'

const TrendItem = ({ category, trend, tweetCount }) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-700 py-2">
      <div>
        <h3 className="font-bold">{trend}</h3>
        <p className="text-gray-500">{category}</p>
      </div>
      <span className="text-gray-400">{tweetCount}</span>
    </div>
  )
}

export default TrendItem