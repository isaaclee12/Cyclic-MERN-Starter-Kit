import { useState } from "react";

const useProvideExample = () => {
  
  const [exampleData, setExampleData] = useState({
    // Have this as a default key + value in the context's data. This is optional.
    value: "default"
  });

  return {
    exampleData,
    setExampleData,
  };
};

export default useProvideExample;
