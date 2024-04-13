import React from "react"

function searchButton() {
    function update() {
        alert('Button clicked!')
    }

    return (
        <div>
            {/* Button with onClick event handler */}
            <button onClick={update}>Click me</button>
        </div>
    )
}

export default searchButton