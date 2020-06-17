import { useContext } from 'react';
import  {APIErrorContext}  from '/src/providers/APIErrorProvider';

function useAPIError() {

  //Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. 
  //The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.
  const { error, addError, removeError } = useContext(APIErrorContext);
  return { error, addError, removeError };
}

export default useAPIError;