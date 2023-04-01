import React, { useState } from 'react'
import profile from './../profile.svg'

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <header>
        <div>
          <img src="https://img.icons8.com/matisse/100/null/experimental-fire-matisse.png" alt=''/>
          <h1>Grabb !t</h1>
        </div>
        <div>
              <input type="text" placeholder='Restaurant, Cuisine, Food...' />
              <button>Search</button>
        </div>
        <div>
          <img src={profile} alt="login" />
        </div>
    </header>
    
  )
}
