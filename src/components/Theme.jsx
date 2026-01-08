import React, { useContext } from 'react'

const ThemeContext = React.createContext("light")

// const Toolbar =()=>{
//   const theme = useContext(ThemeContext) 
//   return <div>Theme : {theme}</div>
// }

class Toolbar extends React.Component {
  static contextType = ThemeContext;

  render() {
    return <div>Theme: {this.context}</div>;
  }
}

const Theme = () => {
  return (
    <ThemeContext.Provider value='dark'>
      <Toolbar/>
    </ThemeContext.Provider>
  )
}

export default Theme