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

      <article  id='card'>
        <img src='/assets/react.svg' alt=''/>
        <div>
          <div>
              <span id='heading'>name</span>
              <span>joined </span>
              <a><p>profile link</p></a>
              <p>bio</p>
          </div>
            {/* <span  id='heading'>name</span>
          <span>joined </span>
          <a><p>profile link</p></a>
          <p>bio</p> */}
          <div className='repo'>
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
          <div className='contact'>
            <span>location</span>
            <a>twitter </a>
            <a>link</a>
            <a>proile </a>
          </div>
        </div>
      </article>
      </div>
    </div>
  )
}

export default App
