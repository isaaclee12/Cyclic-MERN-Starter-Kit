/* 
* This is the default file for the ExampleContext
* Note: Contexts hold data that can be shared between multiple components
* the file path, "contexts/ExampleContext" points to this index.js file
* the definition for the data the context can hold + functions is in
* the custom hook file, useProvideExample.js
*/
import React, { createContext, useContext } from 'react';
import useProvideExample from './useProvideExample';

// Creating a named context
const ExampleContext = createContext();

// Hook for consuming example related data
export const useExampleContext = () => {
  return useContext(ExampleContext);
};

// Define a provider to wrap components that needs to access example's data (see client/index.js)
// Note: a provider is a special component that pass the context to its children to access
const ExampleProvider = ({ children }) => {
  const exampleData = useProvideExample();
  return <ExampleContext.Provider value={exampleData}>{children}</ExampleContext.Provider>;
};

export default ExampleProvider;