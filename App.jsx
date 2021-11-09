// More correct way of wriiting a code
import React, { useEffect, useState } from "react";

function App() {
  const [fuel, setFeul] = useState(0);
  const [alertText, setAlertTxt] = useState("Processing...");

  useEffect(() => {
    fetch("https://new.world.com/fleet/121")
      .then((response) => response.json())
      .then((json) => {
        setFeul(json);
      });
  }, []);

  useEffect(() => {
    if (!fuel) setAlertTxt("Processing...");
    else if (fuel.litres > 0) setAlertTxt("Need to buy more fuel");
    else setAlertTxt("All is fine");
  }, [fuel]);

  return (
    <div>
      <h1 style={alertText === "Need to buy more fuel" ? { color: "red" } : {}}>
        {alertText}
      </h1>
    </div>
  );
}

export default App;



/*

01:  import React, { useEffect, useState } from 'react'; useEslint first of all
02:
03:  function App() {
04:    delete empty line
05:      var [fuel, setFeul] = useState(0); var => const
06:      var [alertText, setAlertTxt] = useState('Processing...'); var -> const
07:
08:      useEffect(() => {
09:        fetch('https://new.world.com/fleet/121')
10:          .then(response => response.json()) write in breakets
11:          .then(json => {
12:            setFeul(json);
13:            console.log(json); delete a console.log
14:          })
15:      }); must be [], to run it on component did mount
16:
17:      useEffect(() => {
18:        if (!fuel) setAlertTxt('Processing...'); else else if in one line
19:        if (fuel.litres > 0) setAlertTxt('Need to buy more fuel'); else else if in one line
20:        setAlertTxt('All is fine');
21:      }, [fuel])
22:
23:      return (
24:        <div>
25:          <h1 style={alertText == 'Need to buy more fuel'? {color:"red"}:{}}>{alertText}</h1> Expected '===' and instead saw '==', space before ?, other spaces and write it in several lines
26:        </div>
27:      );
28:
29:  }
30:
31:  export default App;

*/