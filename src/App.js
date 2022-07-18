import React, {useState} from "react";
import './App.css';

/**
  Challenge: Display all users to the browser
**/

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];

// comment this out after completion and uncomment code below it to proceed
// function Child() {
//   return <div>This is children content</div>;
// }

//Challenge: Uncomment this code to complete quiz

function Child({onChangeValue}) {
  return (
    <>
      <div>Child</div>
      <button onClick={(e) => onChangeValue("UPDATED!")}>Change Parent Value</button>
    </>
  );
}

function Parent(props) {
  const [value, setValue] = useState(
    "I need to be updated from my child"
  );

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child onChangeValue={setValue}/>
        {props.children}
      </div>
    </>
  );
}
// Uncomment this to tackle quiz

// Comment out after completion
// function Parent() {
//   return (
//     <div>
//       <h3>Parent Component</h3>
//     </div>
//   );
// }
// Comment above code after completion

function App() {
  const [isDisplayed, setIsDisplayed] = useState(true)

  function handleToggle(){
    
    const toggleElement = document.getElementById('toggle')
    console.log(toggleElement) 
    if (isDisplayed === true){
      toggleElement.className = "hidden"
    } else{
      toggleElement.className = ""
    }
    
    setIsDisplayed(!isDisplayed)
  }

  return (
    
    <>
    
    <img src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/arnold-francisca-f77Bh3inUpE-unsplash.jpg" className="App-logo" alt="logo" />
      <h3>JSX is cool!</h3>
      <h3>User names</h3>
      {users.map(user => {
        return <li key={user.id}>{user.name}</li>
      })}
      <ul></ul>
      <button onClick={(e) => handleToggle(e)}>Hide Element Below</button>

      <div id="toggle">Toggle Challenge</div>
      <Parent>
      <Child />
    </Parent>
    </>
  );
}

export default App;
