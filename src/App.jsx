import React,{useState} from 'react'
// import useLocalStorage from 'use-local-storage';
import './index.scss'
function App() {
 const[toggle,setToggle]=useState(false);
 const handleClick = () => setToggle(!toggle);
 
  return (
    <div className='app'>
      <div className='app_content'>
      <article id='intro'>
          <h1 id='heading'>devfinder</h1>
          <button onClick={handleClick} className={!toggle ? ':root' : ''}>  
            {!toggle ? <span> night <img src='/assets/icon-moon.svg' alt='moon mode' /></span> : <span> light <img src='/assets/icon-sun.svg' alt='light mode' /></span>}
          </button>
      </article>

      <article>
        <div>
            <img src='/assets/icon-search.svg' alt='light mode' /><input placeholder=' Search Github username...' />
        </div>
        <button>search </button>
      </article>

      <article  className='card'>
        <div>
        <img src='/assets/react.svg' alt=''/>
          <div className='card_intro'>
              <span id='heading'>name</span>
              <span>joined </span>
              <a><p>profile link !</p></a>
              <p>bio Lorem, ipsum dolor sit amet consectetur </p>
            </div>
          </div>

          <div className='cards'>
          <div className='card_subcontent'>
            <div className='cards_info'>
            <div className='repo'>
                <span>repos</span>
                <span>repos</span>
            </div>
              <div className='follower'>
                <span>follower</span>
                <span>repos</span>
              </div>
              <div className='following'>
                <span>folllowing</span>
                <span>repos</span>
              </div>       
              </div>
          </div>
          <div className='card_subcontent'>
            <div className='cards_contact_info'>
          <div className='contact'>
            <span><img src='/assets/icon-location.svg' alt='location' /> location</span>
                  <a><img src='/assets/icon-twitter.svg' alt='twitter link' /> twitter </a>
                  <a> <img src='/assets/icon-website.svg' alt='link icon' /> link</a>
                  <a><img src='/assets/icon-company.svg' alt='building' /> proile </a>
          </div>
        </div>
            </div>
          </div>
      </article>
      </div>
    </div>
  )
}

export default App
