import React from 'react'

const Header = () => {
  return (
    <>
      {/* // header component: bg-color, shadow, flex items, space between
      //  - heading/logo: bold text, small text on mobile screens, large text on bigger screen
      //  - form: input for search bar
      //  - list items Home, About, Sign In / link to their respective pages */}

      <header className='border-zinc-600 h-20 p-5 w-screen bg-slate-400 '>
        <div className="conainer flex justify-between">
          <h1 className='border-l-red-100 text'>
            <span>Swapnil</span>
            <span>Shelke</span>
          </h1>

          <form action="" className="form">
            <input type="text" className='search' />
          </form>

          <div className="items flex justify-between">
            <li>Home</li>
            <li>About</li>
            <li>Sign In</li>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

// https://tailwindcss.com/docs/dark-mode