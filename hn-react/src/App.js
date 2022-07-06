import logo from "./logo.svg";
import "./App.css";
import { useFeature, withFeature, FlagsProvider, Feature } from "flagged";
import { useState } from "react";

const VersionComponent = ({ version }) => <h1>You are currently in {version}</h1>;

const V1Component = () => {
  const hasV1 = useFeature("v1");
  if (!hasV1) return null;
  return <VersionComponent version="v1" />;
};

const V2Component = withFeature("v2")(function V2Component() {
  return <VersionComponent version="v2" />;
});

const V3Component = () => <VersionComponent version="v3" />;
const V4Component = () => <VersionComponent version="v4" />;

function App() {
  const [version, setVersion] = useState(1);
  const features = {
    v1: version === 1,
    v2: version === 2,
    v3: version === 3,
    v4: version === 4,
  };

  return (
    <FlagsProvider features={features}>
      <label>
        Version <input type="number" value={version} onChange={(e) => setVersion(Number(e.target.value))} />
      </label>

      <V1Component />

      <V2Component />

      <Feature name="v3" render={<V3Component />} />

      <Feature name="v4">{(hasV4) => (hasV4 ? <V4Component /> : <h3>You are not in v4.</h3>)}</Feature>
    </FlagsProvider>
  );
}

export default App;
