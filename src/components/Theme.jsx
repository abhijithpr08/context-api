import React from 'react'

const ThemeContext = React.createContext("light")

const Toolbar =()=>{
  return <div>Tool bar component</div>
}

const Theme = () => {
  return (
    <ThemeContext.Provider value='dark'>
      <Toolbar/>
    </ThemeContext.Provider>
  )
}

export default Theme