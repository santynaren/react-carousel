import { carouselEndpointData } from 'Config/Helpers/strings';
import { Slider } from 'components/Slider';

import './App.css';

function App() {
  return (
    <div className="App">
      {carouselEndpointData.map((carouselData) => {
        return (
          <>
            <p>{carouselData.title}</p>
            <Slider images={carouselData.images} />
          </>
        );
      })}
    </div>
  );
}

export default App;
