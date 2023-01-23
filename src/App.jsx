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
              <li><a> <img src='/assets/icon-website.svg' alt='link icon' /> link</a></li>
              <li> <a><img src='/assets/icon-twitter.svg' alt='twitter link' /> twitter </a></li>
              <li><a><img src='/assets/icon-company.svg' alt='building' /> proile </a></li>
            </ol>
          </div>
        </article>
        {/* <article className='card' >
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
          </div> */}
      {/* </article> */}
      </div>
    </div>
  )
}

export default App
