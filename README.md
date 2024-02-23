<h1 align="center">Nutrition React App 🥗</h1>  
<p align="center">
    A simple Nutrition App built using <a href="https://reactjs.org/">React</a>
</p>

![nutrition app](https://github.com/VampireNoob/Nutrition-Facts/assets/128150500/2a4fc64b-2d53-4817-9c6f-151bebd74040)


## I make a super simple Nutrition App built using React.js and API(POST request).

You can view a live demo of the project here: https://nutrition-fact.netlify.app/

## 🙂 Features:

- 🔎 Work with API (POST request, Methode split)
- 📣 Work with UI (Sweet Alert)
- 🖼️ Work with CSS (Loader)

## I use POST request here, you can also see how an external alert is used here.
````
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
        text: 'Please check the spelling of the ingredients or if you have forgotten the quantities or units for the ingredients.',
        confirmButtonColor: '#6f9457',
      });
    }
  }
````

## Built With

In this section you will find the programming languages ​​/ frameworcs / libraries that I used in this project.

* <img src="https://github.com/VampireNoob/Wedding-Wish-List/assets/128150500/c43e4d15-62e4-4254-a673-c4021fd4cf25" width="30">
* <img src="https://github.com/VampireNoob/Wedding-Wish-List/assets/128150500/e8f0b5ca-935a-45d1-b5c0-419f02ee83d4" width="30">
* <img src="https://github.com/VampireNoob/Wedding-Wish-List/assets/128150500/d1885e0d-bc56-480b-b104-b181b8c82cbf" width="30">
* <img src="https://github.com/VampireNoob/Find-a-Recipe/assets/128150500/55565bce-a0ad-4d0f-8398-d735decd3e62 " width="30">
## Contact
