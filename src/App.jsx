import React,{useState} from 'react'
import './App.scss'

function App() {
 const[toggle,setToggle]=useState(false);
 const handleClick = () => setToggle(!toggle);
  return (
    <div className={!toggle ? 'light':'dark'} id='app'>
      <div className='center'>
      <article>
          <h1 className={!toggle ? 'light' : 'dark'} id='heading'>devfinder</h1>
          <button onClick={handleClick}>  
          {!toggle ? <span>night <img src='/assets/icon-moon.svg' alt='moon mode' /></span>
            : <span>light<img src='/assets/icon-sun.svg' alt='light mode' /></span> 
             }</button>
      </article>

      <article className={!toggle ? 'light' : 'dark'} id='card'>
          <span><img src='/assets/icon-search.svg' alt='light mode' /><input placeholder=' Search Github username...' /></span>
        <button>search </button>
      </article>

      <article className={!toggle ? 'light' : 'dark'} id='card'>
        <img src='' alt=''/>
        <div>
            <span className={!toggle ? 'light' : 'dark'}  id='heading'>name</span>
          <span>joined </span>
          <a><p>profile link</p></a>
          <p>bio</p>
          <div className='repo info'>
            <span>repos</span>
            <span>followers</span>
            <span>following</span>
          </div>
          <div className='contact'>
            <span>location</span>
            <a>twitter link</a>
            <a>link</a>
            <a>proile link</a>
          </div>
        </div>
      </article>
      </div>
    </div>
  )
}

export default App
