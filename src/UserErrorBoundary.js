import React, {useState} from 'react'
import ErrorBoundary from './ErrorBoundary'

export default function UseErrorBoundary() {
    return (
        <div>
      <p>
        <b>
          This is an example of error boundaries in React 16.
          <br /><br />
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
        </b>
      </p>
      <hr />
      <ErrorBoundary>
        <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
    </div>
    )
}


function BuggyCounter() {

    const[counter,setCounter] = useState(0)

    function handleClick() {
        setCounter( (prevState) => prevState+1  )
    }

    if (counter === 5) {
             // Simulate a JS error
      throw new Error('I crashed!');
    }
    else {
        return <h1 onClick={handleClick}>{counter}</h1>;
    }
   
}

// class BuggyCounter extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { counter: 0 };
//       this.handleClick = this.handleClick.bind(this);
//     }
    
//     handleClick() {
//       this.setState(({counter}) => ({
//         counter: counter + 1
//       }));
//     }
    
//     render() {
//       if (this.state.counter === 5) {
//         // Simulate a JS error
//         throw new Error('I crashed!');
//       }
//       return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
//     }
//   }