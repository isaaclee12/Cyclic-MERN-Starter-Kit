import { useState } from "react";

const useProvideForm = () => {
  
  const [exampleData, setExampleData] = useState({
    // Have this as a default key + value in the context's data. This is optional.
    presetValue: "defaultValue"
  });

  return {
    exampleData,
    setExampleData,
  };
};

export default useProvideForm;
