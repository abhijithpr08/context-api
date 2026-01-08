import React, { useContext } from 'react'

const ThemeContext = React.createContext("light")
const UserContext = React.createContext("Guest")

const Toolbar = () => {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div>
      Theme: {theme} <br />
      User: {user}
    </div>
  );
};

// class Toolbar extends React.Component {
//   static contextType = ThemeContext;

//   render() {
//     return <div>Theme: {this.context}</div>;
//   }
// }

const Theme = () => {
  return (
    <ThemeContext.Provider value="dark">
      <UserContext.Provider value="Abhijith">
        <Toolbar />
      </UserContext.Provider>
    </ThemeContext.Provider>
  )
}

export default Theme