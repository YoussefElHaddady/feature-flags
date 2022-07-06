import React, { useEffect, useState } from "react";
import { FlagsProvider } from "react-feature-flags";
import axios from "axios";
import Main from "./Main";
import defaultFlags from "./flags";

const App = () => {
  const [flags, setFlags] = useState(defaultFlags);

  useEffect(() => {
    axios.get("http://localhost:1337/api/flags").then((response) => {
      const data = response.data.data;
      const fetchedFlags = data.map((d) => {
        const { name, isActive } = d.attributes;
        return { name, isActive };
      });
      Array.isArray(fetchedFlags) && setFlags(fetchedFlags);
    });
  }, []);

  return (
    <FlagsProvider value={flags}>
      <Main />
    </FlagsProvider>
  );
};

export default App;
