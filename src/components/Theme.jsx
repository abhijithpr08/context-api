import React, { useContext } from 'react'

const ThemeContext = React.createContext("light")

const Toolbar =()=>{
  const theme = useContext(ThemeContext) 
  return <div>Theme : {theme}</div>
}

const Theme = () => {
  return (
    <ThemeContext.Provider value='dark'>
      <Toolbar/>
    </ThemeContext.Provider>
  )
}

export default Theme