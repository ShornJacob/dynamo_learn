import { useContext } from 'react';
import  {SnackBarContext }  from 'providers/SnackBarProvider';

function useAPIError() {

  //Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. 
  //The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.
  const { error, addError, removeError } = useContext(SnackBarContext );
  return { error, addError, removeError };
}

export default useAPIError;