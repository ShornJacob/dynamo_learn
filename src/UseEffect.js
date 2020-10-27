import React, {useState, useEffect} from 'react';


////https://medium.com/better-programming/understanding-the-useeffect-dependency-array-2913da504c44

//https://jsonplaceholder.typicode.com/

export default function UseEffect(props) {

    const [data, setData] = useState(1);
    

    useEffect ( () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        // causes infinite rendering
        .then(json => {setData(json) ; console.log(data)})
    })

//     getData()
//console.log(data)

  //  setTimeout(function(){ alert("Hello"); }, 1000);

    return (
        <div>
            {data.userId}
            {/* <p>{data.userId}</p> */}
        </div>
    );
}

