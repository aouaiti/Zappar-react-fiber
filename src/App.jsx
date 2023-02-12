import {
  ZapparCamera,
  ZapparCanvas,
  ImageTracker,
} from "@zappar/zappar-react-three-fiber";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <ZapparCanvas>
        <ZapparCamera />
        <ImageTracker targetImage={"data/hiro.patt"}>
          <mesh>
            <boxGeometry />
            <meshBasicMaterial />
          </mesh>
        </ImageTracker>
      </ZapparCanvas>
    </div>
  );
}

export default App;
