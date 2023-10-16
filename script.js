 const form=document.querySelector(".top-banner form");
 const input=document.querySelector(".top-banner input");
 const message=document.querySelector(".top-banner .message");
 const list=document.querySelector(".weather-section .cities");
 
 const apiKey="7331cc84cdd66b06efd41c3975eb03cc";

 form.addEventListener("submit",e =>{
      e.preventDefault();
      let inputValue=input.value;

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;
 
 fetch(url)
  .then(response =>response.json())
  .then(data =>{
    const {main, name ,sys ,weather}=data;
    const icon=`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
      weather[0]["icon"]
    }.svg`;

    //creating list element 
    const li=document.createElement("li");
    li.classList.add("city");

    const markup= `
                    <h2 class="city-name" data-name="${name}", "${sys.country}">
                    <span>${name}</span>
                    <sup>${sys.country}</sup>
                    </h2>
                    <div class="city-temp">${Math.round(main.temp)}<sup>o</sup></div>
                    <figure>
                      <img class="city-icon" src="${icon}" alt="${weather[0]["description"]}">
                      <figcaption>${weather[0]["description"]}</figcaption>
                    </figure>
                     `;
    
    li.innerHTML=markup;
    list.appendChild(li);
  })

  .catch(()=>{
    msg.textContent = "Please search for a valid city 😩";
  })

  msg.textContent = "";
  form.reset();
  input.focus();
 })

 //api url

 

 

 //http://api.weatherapi.com/v1/current.json?key=d594f0630b4943df8f9182647231909&q=London&aqi=yes*/
 