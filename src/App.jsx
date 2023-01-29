import React,{useState, useReducer} from 'react'
// import useLocalStorage from 'use-local-storage';
import {initialState, reducer} from './postReducer'
import './index.scss'

function App() {
 const[toggle,setToggle] = useState(false);
 const handleClick = () => setToggle(!toggle);

const [state, dispatch] = useReducer(reducer, initialState);
const { userInput, data, error } = state;

 const handleSearch = (e) => {
  dispatch({ type: 'SEARCH_INPUT', payload: e.target.value });
};

 const handleSubmit = (e) => {
  e.preventDefault();
  fetch(`https://api.github.com/users/${userInput}`)
    .then(res => res.json())
    .then(data => {
      if (data.message) {
        dispatch({ type: 'SEARCH_ERROR', payload: data.message });
      } else {
        dispatch({ type: 'SEARCH_SUCCESS', payload: data });
      }
    });
};

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

      { error ? (<h1>error </h1>):  (
        <article className='main'>
          <div className='main_intro'>
              <img src={data.avatar_url} alt='' className='profile' />
              <div>
                <p className='heading'>  {data.name}</p> 
            <p>joined {data.created_at}</p>
            <p><a href={error ? (<span>not available</span>):(data.html_url)}>@{data.login}</a></p>
            <p>{error ? (<span>not available</span>):(data.bio)}</p>
          </div>
          </div>


          <div className='main_content'>
            <ol className='githubuser_data'>
              <li>Repos
                  <p>{error ? (<span>not available</span>):(data.public_repos)} </p>
              </li>
              <li>followers
                  <p>{error ? (<span>not available</span>):(data.followers)} </p>
              </li>
              <li>following
                  <p>{error ? (<span>not available</span>) : (data.following)} </p>
              </li>
            </ol>

            <ol className='icon_content'>
                <li><img src='/assets/icon-location.svg' alt='location' /> {data.location} </li>
              <li> <a><img src='/assets/icon-twitter.svg' alt='twitter link' />{error ? (<span>not available</span>) : (data.twitter)}</a></li>  
                <li><a> <img src='/assets/icon-website.svg' alt='link icon' /> {error ? (<span>not available</span>) : (data.blog)}</a></li>
                <li><a><img src='/assets/icon-company.svg' alt='building' /> {data ? (<span>not available</span>) : (data.company)}</a></li>
            </ol>
          </div>
        </article>
       )}
      </div>
    </div>

  )
}

export default App
