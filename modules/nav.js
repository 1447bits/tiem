{/* 
    <div id="nav">
        <a href="#"><span>Clock</span></a>
        <a href=""><span>Stopwatch</span></a>
        <a href=""><span>Timer</span></a>
        <a href="7_segment_display\analog\analog.html"><span>Try Yourself</span></a>
    </div> 
*/}


const nav = document.createElement("div")
const root = document.getElementById("root")
nav.id = "nav";
nav.innerHTML = `<a href=""><span>Clock</span></a>
<a href=""><span>Stopwatch</span></a>
<a href=""><span>Timer</span></a>
<a href=""><span>Try Yourself</span></a>
`;
root.prepend(nav)