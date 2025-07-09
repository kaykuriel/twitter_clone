import { getAvatar } from '../../utils/generateImage'

const FollowItem = ({ name, username }) => {
    const avatar = getAvatar(`${name +Math.floor(Math.random() * 1000)}@email.com`)
  return (
    <div className="flex items-center justify-between p-2 hover:bg-gray-700 transition duration-200">
      <div className="flex items-center">
        <img src={avatar} alt="user avatar" className="rounded-full w-10 h-10 mr-3" />
        <div className="ml-3">
          <p className="font-bold">{name}</p>
          <p className="text-gray-500">@{username}</p>
        </div>
      </div>
      <button className="bg-white text-black rounded-full px-4 py-1 hover:bg-gray-300 transition duration-200">Follow</button>
    </div>
  )
}
export default FollowItem