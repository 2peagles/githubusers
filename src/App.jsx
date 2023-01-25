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
 const[bio, setBio] = useState('');
 const[created, setCreated] = useState('');
 const[company, setCompany] = useState('');
 const[html_url, setHtml_Url]= useState('');
  const [twitter, setTwitter] = useState('');
  const [location, setLocation] = useState('');
 const [followers,setFollowers] = useState('');
 const [following, setFollowing] = useState('');
 const [repos, setRepos] = useState('');
 const [avatar, setAvatar] = useState('');
 const[blog, setBlog] = useState('');
 const [userInput, setUserInput] = useState('');
 const[error, setError] = useState(null);
 
 useEffect(() => {
  //  fetch(' https://api.github.com/user')
  fetch('https://api.github.com/users/2peagles')
    .then(res => res.json())
    .then(data => {
      setUser(data);
    });
 }, [ ]);
//  function runs once onload

//messy 
 const setUser = ({name, login, created_at, followers ,following, public_repos, avatar_url, location, Company, twitter_username, bio,html_url, blog}) => {
    setName(name);
    setUsername(login);
    setBio(bio);
    setBlog(blog);
    setCompany(Company);
    setCreated(created_at)
    setHtml_Url(html_url);
    setFollowers(followers)
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setLocation(location);
    setTwitter(twitter_username);
 }

 const handleSearch = (e) => {
  setUserInput(e.target.value)
 }
 const handleSubmit = () => {
   fetch(`https://api.github.com/users/${userInput}`)
    .then(res => res.json())
    .then(data => {
        if (data.message) {
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
            <div>
              <img src='/assets/icon-search.svg' alt='light mode' />
              <input placeholder=' Search Github username...'  onChange={handleSearch} />
            </div>
            <button content='Search'>search </button>
        </form>
      </article>

      { error ? (<h1>{error}</h1>) : (
        <article className='main'>
          <div className='main_intro'>
              <img src={avatar} alt='' className='profile' />
              <div>
                <p className='heading'>  {name}</p> 
            <p>joined {created}</p>
            <p><a href={html_url}>@{userName}</a></p>
            <p>{bio}</p>
          </div>
          </div>


          <div className='main_content'>
            <ol className='githubuser_data'>
              <li>Repos
                  <p>{repos} </p>
              </li>
              <li>followers
                  <p>{followers} </p>
              </li>
              <li>following
                  <p>{following} </p>
              </li>
            </ol>

            <ol className='icon_content'>
                <li><img src='/assets/icon-location.svg' alt='location' /> {location} </li>
              <li> <a><img src='/assets/icon-twitter.svg' alt='twitter link' /> {error ? (<span>{twitter}</span>) : (<span>not found</span>)}</a></li>  
                <li><a> <img src='/assets/icon-website.svg' alt='link icon' /> {error ? (<span>{blog}</span>) : (<span>not found</span>)}</a></li>
                <li><a><img src='/assets/icon-company.svg' alt='building' /> {error ? (<span>{company}</span>) : (<span>not found</span>)}</a></li>
            </ol>
          </div>
        </article>
      )}
      </div>
    </div>

  )
}

export default App
