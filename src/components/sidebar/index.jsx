import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHashtag, faBell, faHome, faEnvelope, faBookmark,
  faUser, faUserFriends, faEllipsisH, faFeather
} from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const NavItem = ({ icon, text }) => (
  <div className="flex items-center justify-center xl:justify-start p-3 rounded-full cursor-pointer hover:bg-gray-800 transition duration-200 w-full">
    <FontAwesomeIcon icon={icon} className="text-2xl" />
    <span className="text-xl ml-4 hidden xl:inline">{text}</span>
  </div>
)

const SideBar = () => {
  return (
    <div className="flex flex-col items-center xl:items-start w-20 xl:w-64 sticky top-0 px-2 py-4 h-screen">
      {/* Logo */}
      <div className="mb-4">
        <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-3xl" />
      </div>

      {/* Navegação */}
      <nav className="flex flex-col space-y-2 w-full">
        <NavItem icon={faHome} text="Home" />
        <NavItem icon={faHashtag} text="Explore" />
        <NavItem icon={faBell} text="Notifications" />
        <NavItem icon={faEnvelope} text="Messages" />
        <NavItem icon={faBookmark} text="Bookmarks" />
        <NavItem icon={faUserFriends} text="Communities" />
        <NavItem icon={faTwitter} text="Premium" />
        <NavItem icon={faUser} text="Profile" />
        <NavItem icon={faEllipsisH} text="More" />
      </nav>

      {/* Botão Tweet */}
      <button className=" flex items-center justify-center xl:justify-start w-full">
        {/* Ícone no mobile */}
        <FontAwesomeIcon icon={faFeather} className="text-blue-400 text-3xl xl:hidden" />
        {/* Texto no desktop */}
        <span className="hidden xl:inline bg-blue-400 text-white rounded-full font-bold w-full px-6 py-3 text-center hover:bg-blue-600 transition duration-200">
          Tweet
        </span>
      </button>
    </div>
  )
}

export default SideBar
