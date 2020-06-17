import React,{ useState, useCallback }  from 'react'

//a bottom-up approach to push errors and make them visible.


//https://reactjs.org/docs/context.html#reactcreatecontext
//Creates a Context object. 

//Creates a Context object. When React renders a component that subscribes to this Context object 
//it will read the current context value from the closest matching Provider above it in the tree.
//The defaultValues of error, addError and removeError argument is only used when a component does not have a matching Provider above it in the tree
export const SnackBarContext = React.createContext({
    error: null,
    addError: () => {},
    removeError: () => {}
  });

//renders a higher order comonent with children??
  export default function SnackBarProvider({ children }) {

    const [error, setError] = useState(null);
  
    function removeError() {
        setError(null)
     }

    // console.log(error)
  
    function addError(message){
        //sets an object as error
        setError(message);
    }

    const contextValue = {
      error,
      addError: useCallback((message, status) => addError(message), []),
      removeError: useCallback(() => removeError(), [])
    };


    //Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
    //Accepts a value prop to be passed to consuming components that are descendants of this Provider. 
    //addError and removeError in context, use useCallback
    return (
        <SnackBarContext.Provider value={contextValue}>
          {children}
        </SnackBarContext.Provider>
      );

}