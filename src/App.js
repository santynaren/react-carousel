import { carouselEndpointData } from 'Config/Helpers/strings';
import { Slider, BlockSlides } from 'components';

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
      <p>Different Approach</p>
      <BlockSlides slides={carouselEndpointData} />
    </div>
  );
}

export default App;
