import React,{useState, useEffect} from 'react'
// import useLocalStorage from 'use-local-storage';
// import axios from 'axios'
import './index.scss'

// Octokit.js
// https://github.com/octokit/core.js#readme
// const octokit = new Octokit({
//   auth: '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'
// })

// await octokit.request('GET /users/{username}', {
//   username: 'USERNAME'
// })

function App() {
 const[toggle,setToggle] = useState(false);
 const handleClick = () => setToggle(!toggle);

 const[name, setName] = useState(' ');
 const[userName, setUsername] = useState('');
  const [twitter, setTwitter] = useState('');
  const [location, setLocation] = useState('');
 const [followers,setFollowers] = useState('');
 const [following, setFollowing] = useState('');
 const [repos, setRepos] = useState('');
 const [avatar, setAvatar] = useState('');
 const [userInput, setUserInput] = useState('');
 const[error, setError] = useState(null);
 
 useEffect(()=>{
  //  fetch(' https://api.github.com/user')
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      setUser(data);
    });
 }, [ ]);
//  function runs once onload
 const setUser = ({name, login, followers ,following, public_repos, avatar_url, location, twitter}) => {
    setName(name);
    setUsername(login);
    setFollowers(followers)
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setLocation(location);
    setTwitter(twitter);
 }

 const handleSearch = (e)=>{
  setUserInput(e.target.value)
 }
 const handleSubmit = () => {
   fetch(`https://api.github.com/users/${userinput}`)
    .then(res => res.json())
    .then(data => {
        if (data.message){
          setError(data.message)
        } else {
          setUser(data);
          setError(null);
        }
    })
 }
  return (
    <div id='app' className={!toggle ? 'dark' : 'light'}>
      <div className='app_content'>
      <article id='intro'>
          <h1 className='heading'>devfinder</h1>
          <button onClick={handleClick} className='toggle'>  
            {!toggle ? <span className={!toggle ? 'dark' : 'light'} id='darktoggle'> <p>night</p><img src='/assets/icon-moon.svg' alt='moon mode' /></span> 
            : <span className={!toggle ? 'dark' : 'light'} id='lighttoggle'> <p>light</p><img src='/assets/icon-sun.svg' alt='light mode' /></span>}
          </button>
      </article>

      <article>
        <form onSubmit={handleSubmit}> 
            {/* <div> */}
              {/* <img src='/assets/icon-search.svg' alt='light mode' /> */}
              <input placeholder=' Search Github username...'  onChange={handleSearch} />
            {/* </div> */}
            <button onSubmit={handleSubmit} content='Search'>search </button>
        </form>
  
      </article>

      { error ? (<h1>{error}</h1>) : (
        <article className='main'>
          <div className='main_intro'>
              <img src={avatar} alt='' className='profile' />
              <div>
                <p className='heading'>  {error ? (<span>{name}</span>) : (<span>not found</span>)}</p> 
            <p>joined </p>
            <p><a>profile line</a></p>
            <p>bio Lorem, ipsum dolor sit amet consectetur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          </div>
          </div>


          <div className='main_content'>
            <ol className='githubuser_data'>
              <li>Repos
                  <li>{repos}</li>
              </li>
              <li>followers
                  <li>{followers}</li>
              </li>
              <li>following
                  <li>{following}</li>
              </li>
            </ol>

            <ol className='icon_content'>
                <li><img src='/assets/icon-location.svg' alt='location' /> {error ? (<span>{location}</span>) : (<span>not found</span>)}</li>
              <li> <a><img src='/assets/icon-twitter.svg' alt='twitter link' /> {error ? (<span>{twitter}</span>) : (<span>not found</span>)}</a></li>  
                <li><a> <img src='/assets/icon-website.svg' alt='link icon' /> {error ? (<span>{link}</span>) : (<span>not found</span>)}</a></li>
                <li><a><img src='/assets/icon-company.svg' alt='building' /> {error ? (<span>{profile}</span>) : (<span>not found</span>)}</a></li>
            </ol>
          </div>
        </article>
      )}
      </div>
    </div>

  )
}

export default App
