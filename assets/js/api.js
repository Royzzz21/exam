


// api url 
const api_url = 
    "https://api.spacexdata.com/v4/launches/";

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data form of JSON
    let data = await response.json();
    if (response) {
        hideloader();
    }
    show(data)
   
}

getapi(api_url);

function hideloader() {
    document.getElementById('loading').style.display = 'none';
}




function show(data) {
    // console.log(data[0].details);
    var item = `<p style="display:none;">asdasdasd</p>`;
    

   for ( let r of data ) {
    var date = new Date(r.date_local)
    var newd = date.getFullYear();
    
        item +=`<div class="Item"  id="ItemName">
          <a
            href=${r.links.webcast}
            target="_blank"
          >
            <img class="photo" src="./assets/img/photo.png" alt="" />
          </a>
          <div>
            <div class="ItemData">
                <div class="title">
                    <a  class="TitleLink"
                        href=${r.links.webcast}
                        target="_blank"
                    >
                    <b>${r.flight_number}:</b> ${r.name} (${newd})
                    </a>
                </div>
                <div class="description">${r.details}</div>
            </div>
          </div>
        </div>`;
   }

   document.getElementById("launches").innerHTML = item;
}
