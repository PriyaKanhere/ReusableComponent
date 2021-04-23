import React from "react"
import ReactDom from "react-dom"
import "./style.css"

const Badge = ({ children, color, ...props }) => {
  return (
    <span className={`badge ${color}`} {...props}>{children}</span>
  )
}

function App() {
  return (
    <div><section>
      <h1>Check out these badges!  </h1>
      <h3>these are calling same Badge which is a reusable component..Click on yellow and green only they will generate alert</h3>
      <Badge color="green">Success</Badge> This is operational. <br />
      <Badge color="red" >Removed</Badge> This is critical. <br />
      <Badge color="yellow" onClick={() => alert("yellow  was clicked")}>Warning</Badge> This is a warning. <br />
      <Badge color="blue"
        onClick={() => alert("Blue was clicked")}

      >Beta</Badge> This is in progress. <br />
    </section></div>
  );
}

export default App;
