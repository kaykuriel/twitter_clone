import SideBar from './components/sidebar/'
import TwitterForm from './components/TwitterForm/'
import Tweet from './components/Tweet/'
import TrendItem from './components/TrendItem/'
import FollowItem from './components/FollowItem/'
import { v4 } from 'uuid'
import { getAvatar, getRandomImage } from './utils/generateImage'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [tweets, setTweets] = useState([])

  // Nomes aleatórios
  const randomNames = [
    'João', 'Maria', 'Lucas', 'Ana', 'Bruno', 'Clara',
    'Rafa', 'Lívia', 'Pedro', 'Julia', 'Leo', 'Amanda'
  ]

  // Usernames aleatórios
  const randomUsernames = [
    'dev123', 'gamerX', 'meme_lord', 'catlover', 'techgirl',
    'ninja42', 'reactfan', 'boredhuman', 'codemaster'
  ]

  // Mensagens aleatórias de tweet
  const randomMessages = [
    "Acabei de queimar o arroz... de novo 😭",
    "JavaScript me ama... só que não 🫠",
    "Me segue que eu sigo de volta 👀",
    "Por que o código só dá erro quando o chefe olha? 😅",
    "Alguém me recomenda uma série boa?",
    "Dormir cedo é lenda urbana 🛌💤",
    "React ou Vue? Briguem aí 👊",
    "Hoje tá aquele dia bom pra não fazer nada 😴",
    "Quando a internet cai, eu descubro que tenho uma vida offline 😳",
    "Queria estar na praia, mas tô no console.log() 🏖️💻",
    "Compilando... e a ansiedade também 😬",
    "Ctrl+C, Ctrl+V é a alma do negócio 🔁",
    "Essa semana passou em 3 horas",
    "Comi pão de alho no café da manhã e tô feliz demais 🧄🥖",
    "Buguei até minha geladeira hoje 😵‍💫",
    "Me disseram pra sair do Twitter, mas onde mais eu vou reclamar da vida?",
    "Meu código funciona e eu não sei por quê 🧠✨",
    "Socorro, o Figma travou bem na entrega 😭",
    "Esse tweet se autodestruirá em 5 segundos 💣",
    "Alguém mais acha que segunda-feira é uma trollagem da vida?",
  ]

  const getRandomFromArray = (array) => array[Math.floor(Math.random() * array.length)]

  useEffect(() => {
    const interval = setInterval(() => {
      addNewrandomTweets()
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const addNewTweet = (content, withImage) => {
    const newTweet = {
      id: v4(),
      name: 'Você',
      username: `user${Math.floor(Math.random() * 1000)}`,
      avatar: getAvatar(`user${Math.floor(Math.random() * 1000)}@email.com`),
      content,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      image: withImage ? getRandomImage() : null,
      likes: 0,
      retweets: 0,
      comments: 0,
    }

    setTweets((prevTweets) => [newTweet, ...prevTweets])
  }

  const addNewrandomTweets = () => {
    const name = getRandomFromArray(randomNames)
    const username = getRandomFromArray(randomUsernames) + Math.floor(Math.random() * 1000)
    const content = getRandomFromArray(randomMessages)

    const newTweet = {
      id: v4(),
      name,
      username,
      avatar: getAvatar(`${username}@email.com`),
      content,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      image: Math.random() > 0.6 ? getRandomImage() : null,
      likes: Math.floor(Math.random() * 100),
      retweets: Math.floor(Math.random() * 50),
      comments: Math.floor(Math.random() * 20),
    }

    setTweets((prevTweets) => [newTweet, ...prevTweets])
  }

  return (
    <div className='flex mx-auto max-w-7xl'>
      <SideBar />
      <main className='flex-grow border-l border-r border-gray-700 max-w-xl'>
        <header className='sticky top-0 z-10 bg-twitter-background bg-opacity-90 backdrop-blur-sm'>
          <h2 className='px-4 py-3 text-xl font-bold'>For you</h2>
        </header>
        <TwitterForm onTweet={(content) => addNewTweet(content, Math.random() > 0.5)} />
        <div>
          {tweets.map(tweet => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </main>
      <aside className = 'hidden xl:block w-80 px-4'>
        <div className = 'sticky top-0 pt-2'>
          <div className = 'relative'>
            <FontAwesomeIcon icon={faSearch} className = 'absolute top-3 left-3 text-gray-500'/>
            <input type="text" placeholder = 'Search Twitter' className = 'w-full bg-gray-800 text-white rounded-full outline-none py-2 pl-10 pr-4' />
          </div>
          <div className = 'bg-gray-800 rounded-xl mt-4 p-4'>
            <h2 className = 'font-bold text-xl mb-4'>Subscribe to Premium</h2>
            <p className = 'text-gray-500 mb-4'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
            <button className =  'bg-blue-400 text-white rounded-full font-bold w-full px-6 py-3  cursor-pointer hidden md:inline hover:bg-blue-600 transition duration-200' >Subscribe</button>
          </div>
          <div className = "bg-gray-800 rounded-xl mt-4 p-4">
            <h2 className = "font-bold text-xl mb-4">What's happening</h2>
            <TrendItem category = "Trending in Brazil" trend = "Covid-19" tweetCount = "3.8M" />
            <TrendItem category = "Tecnologia" trend = "ReactJS"  tweetCount = "9.8K" />
            <TrendItem category = "Tecnologia" trend = "JavaScript" tweetCount = "1.2K" />
            <TrendItem category = "Tecnologia" trend = "Node.js" tweetCount = "5.9K" />
            <TrendItem category = "Tecnologia" trend = "CSS" tweetCount = "3.7K" />
          </div>
          <div className = "bg-gray-800 rounded-xl mt-4 p-4">
            <h2 className = "font-bold text-xl mb-4">Who to follow</h2>
            <FollowItem name = "Gustavo " username = "gustavo"/>
            <FollowItem name = "Rocketseat" username = "rocketseat"/>
            <FollowItem name = "Alura" username = "aluraonline"/>
            <FollowItem name = "Caelum" username = "caelum"/>
            <FollowItem name = "DevMedia" username = "devmedia"/>
            <FollowItem name = "Curso em Vídeo" username = "cursoemvideo"/>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default App
