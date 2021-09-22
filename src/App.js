import React, {useState} from "react";
import "./styles.css";

const emojiDictionary = {
'😂' : 'laugh',
'😐' : 'unimpressed',
'😣' : 'irritated',
'😴' : 'sleepy',
'😲' : 'shocked',
};

var emojisweknow = Object.keys(emojiDictionary);

export default function App() {

 var [meaning, setmeaning] = useState("")

function emojiclickhandler(emoji){
var meaning = emojiDictionary[emoji];
setmeaning(meaning)    //react call to show output
}

    function emojiInputHandler(event) {
          var userinput = event.target.value;
          var meaning = emojiDictionary[userinput];
          if(meaning === undefined){
           meaning = 'we dont have this in our database'
          }
          setmeaning(meaning)
          
    }
    
 
  return (
    <div className="App">
    <h1> Inside out </h1>
    <input onChange = {emojiInputHandler} />
    <div> {meaning} </div>
<h2> emojis we know </h2>
{
  emojisweknow.map(function(emoji) { 
return <span style = {{cursor: "pointer"}} key = {emoji} onClick = { () => emojiclickhandler(emoji)} > {emoji} </span> 
  })
}
    </div>
  )
}