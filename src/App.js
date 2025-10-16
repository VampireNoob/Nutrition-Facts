// methode "POST" anfrage auf eine API
import { useState } from "react";
import { useEffect } from "react";
import { Nutrition } from "./Nutrition.js";
import { LoaderPage } from "./LoaderPage";
import video from './food.gif';
import Swal from 'sweetalert2';

function App() {

  const [mySearch, setMySearch] = useState();
  const [wordSubmitted, setWordSubmitted] = useState('');
  const [myNutrition, setMyNutrition] = useState();
  const [stateLoader, setStateLoader] = useState(false);

  const APP_ID = '5d9bef40';
  const APP_KEY = '05aef914ec8c65bd8d6c411f1a93a557';
  const APP_URL = 'https://api.edamam.com/api/nutrition-details'

  const fetchData = async (ingr) => {
    setStateLoader(true);

    const response = await fetch(`${APP_URL}?app_id=${APP_ID}&app_key=${APP_KEY}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ingr: ingr })
    })

    if(response.ok) {
      setStateLoader(false);
      const data = await response.json();
      setMyNutrition(data);
      console.log(data)
    } else {
      setStateLoader(false);
      Swal.fire({
        title: 'We have a problem!',
        text: 'Bitte überprüfen Sie die Schreibweise der Zutaten ob die in Englisch geschrieben sind und ob Sie die Mengen oder Einheiten für die Zutaten vergessen haben.',
        confirmButtonColor: '#6f9457',
      });
    }
  }

  const myRecipeSearch = e => {
    setMySearch(e.target.value);
  }

  const finalSearch = e => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  useEffect(() => {
    if (wordSubmitted !== '') {
      let ingr = wordSubmitted.split(/[,,;,\n,\r]/);
      fetchData(ingr);
    }
  }, [wordSubmitted])


  return (
    <div className="App">
      <div className="container">
      {stateLoader && <LoaderPage />}
      <img src={video} alt="gif" />
      <h1>Nutrition Facts</h1>
      </div>
      <div className="container">
      <form onSubmit={finalSearch}>
        <input
          className="search"
          placeholder="1 baked potato, 100 g sour cream..."
          onChange={myRecipeSearch}
        />
      </form>
      <button onClick={finalSearch} type="submit">Analyze</button>
      </div>
      <div>
        {
          myNutrition && Object.values(myNutrition.totalDaily)
            .map(({ label, quantity, unit }) =>
              <Nutrition key={label}
                label={label}
                quantity={quantity}
                unit={unit}
              />
            )
        }
      </div>
    </div>
  );
}

export default App;
