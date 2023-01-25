import React, { createContext, useContext } from 'react';
import useProvideExample from './useProvideExample';

// Creating a named context
const ExampleContext = createContext();

// Hook for consuming example related data
export const useExampleContext = () => {
  return useContext(ExampleContext);
};

// Creating a provider to wrap components that needs to access example's data
// Note: a provider is a special component that pass the context to its children to access
const ExampleProvider = ({ children }) => {
  const exampleData = useProvideExample();
  return <ExampleContext.Provider value={exampleData}>{children}</ExampleContext.Provider>;
};

export default ExampleProvider;