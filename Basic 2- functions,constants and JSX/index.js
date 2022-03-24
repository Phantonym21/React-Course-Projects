
function Basic1() {
    return (
         <h2>Hello World</h2>        // Store html in Functions and then call functions in render in HTML style
    )                                // Functions need to be called inside parent HTML elements like divs, h1,etc
}
const a = (
    <h1>Hello Bau</h1>             // Store html in Variables
)



ReactDOM.render(
    <h1>
        <Basic1 />                          
    </h1>,                                    // Calling function
    document.getElementById("root"))

ReactDOM.render(
    a,
    document.getElementById("leaf1")          // Calling COnst
 )
