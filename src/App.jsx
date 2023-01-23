import React,{useState} from 'react'
// import useLocalStorage from 'use-local-storage';
import './index.scss'
function App() {
 const[toggle,setToggle]=useState(false);
 const handleClick = () => setToggle(!toggle);
 
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
        <div>
            <img src='/assets/icon-search.svg' alt='light mode' /><input placeholder=' Search Github username...' />
        </div>
        <button>search </button>
      </article>


        <article className='main'>
          {/* <div className=''> */}
            
          <div className='main_intro'>
              <img src='' alt='' className='profile' />
              <div>
            <p  className='heading'>name</p>
            <p>joined </p>
            <p><a>profile line</a></p>
            <p>bio Lorem, ipsum dolor sit amet consectetur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          </div>
          </div>
          {/* </div> */}

          <div className='main_content'>
            <ol className='githubuser_data'>
              <li>Repos
                  <li>0</li>
              </li>
              <li>followers
                  <li>0</li>
              </li>
              <li>following
                  <li>0</li>
              </li>
            </ol>

            <ol className='icon_content'>
              <li><img src='/assets/icon-location.svg' alt='location' /> location </li>
              <li> <a><img src='/assets/icon-twitter.svg' alt='twitter link' /> twitter </a></li>  
              <li><a> <img src='/assets/icon-website.svg' alt='link icon' /> link</a></li>
              <li><a><img src='/assets/icon-company.svg' alt='building' /> proile </a></li>
            </ol>
          </div>
        </article>
      </div>
    </div>
  )
}

export default App
