
import React, { useState, useEffect} from 'react';
import "./switch.scss";

const App = () => {

  //state
  const [ colorTheme, setColorTheme] = useState("theme-white");

  //Effect
  useEffect (() => {
    // check for selected theme /// localstorage value
    const currentThemeColor = localStorage.getItem("theme-color");
    // if found set selected theme value in state
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }

  }, []);

  // set theme
  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem("theme-color", theme)

  }
  return (
    <div className={`App ${colorTheme}`}>

      <div className="theme-options">
        <div id="theme-white" onClick={() => handleClick("theme-white")} className= {`${colorTheme === "theme-white" ? "acitve" : ""}`}></div>
         <div id="theme-blue" onClick={() => handleClick("theme-blue")} className= {`${colorTheme === "theme-blue" ? "acitve" : ""}`}></div>
         <div id="theme-orange" onClick={() => handleClick("theme-orange")} className= {`${colorTheme === "theme-orange" ? "acitve" : ""}`}></div>
         <div id="theme-purple" onClick={() => handleClick("theme-purple")} className= {`${colorTheme === "theme-purple" ? "acitve" : ""}`}></div>
         <div id="theme-green" onClick={() => handleClick("theme-green")} className= {`${colorTheme === "theme-green" ? "acitve" : ""}`}></div>
         <div id="theme-black" onClick={() => handleClick("theme-black")} className= {`${colorTheme === "theme-black" ? "acitve" : ""}`}></div>
      </div>
      <div className="content-container">
        <h3>Multiple theme switcher with React</h3>
        <h5>ReactJs, CSS, Local storage</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cum iste veritatis, tempore autem ipsa qui assumenda asperiores doloremque corrupti, rerum impedit voluptate quia magni fugiat molestiae facere aperiam, rem maiores dolorem placeat dolores enim. Beatae tenetur sit odit minima facilis inventore repudiandae ex voluptatibus ea dolorem, soluta eos magni praesentium vitae rem odio excepturi obcaecati. In tempora cumque quisquam quaerat natus, consectetur asperiores illo tempore quidem est quo dignissimos consequatur laborum ipsa! Magnam nemo blanditiis optio eum voluptatibus eveniet recusandae illo perspiciatis corporis. Dolore quae voluptatum excepturi tempora veniam eos error impedit perspiciatis? Quaerat odio odit eos harum recusandae.
        </p>
      </div>

    </div>
  )
}

export default App;