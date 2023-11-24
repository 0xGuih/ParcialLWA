

// Get data
const API_URL = "https://dolarapi.com/v1/dolares";

const cards_panel = document.getElementById("cards_panel");

let listing = [];
async function getPricesListing() {

    console.log("get");

    try{
        const response = await fetch(API_URL);

        if(await response.ok){
            listing.push(... await response.json());

            console.log(response);
            console.log(listing);

            if(listing.length === 0){
                
                //cards_panel.appendChild(new_card);
            }
            else{

                /*
                sorted_tasks.forEach((task) => {
                    
                    <div id="card_x">
                        <div id="card_info">
                            <h3>Titulo</h3>
                            <h5>datetime</h6>
                        </div>
                        <div id="audio">
                            <img src="/resources/icons/play_70x70.png" alt="play">
                        </div>
                    </div>
                    
                    const new_card = document.createElement("card");
                    new_card.classList.add("card");
                    const card_info = document.createElement("div"); 
                    card_info.id = "card_info";
                
                    const task_id = document.createElement("div");
                    task_id.classList.add("hidden");
                    task_id.id = parseInt(task.id);
                    if(task_id.id === selected_task.id){
                        new_card.classList.add("card_selected");
                    }

                    const image = document.createElement("img");
                 

                    const title = document.createElement("h3");
                    title.textContent = task.titulo;

                    const datetime = document.createElement("h6");
                    datetime.textContent = task.fechacreacion;

                    card_info.appendChild(task_id);
                    card_info.appendChild(title);
                    card_info.appendChild(datetime);

                    audio.appendChild(image);

                    new_card.appendChild(card_info);
                    
                    cards_panel.appendChild(new_card);                      
                })
                */       
                listing.forEach((price) => {
                    console.log(price);

                    /*

                    */

                    const new_card = document.createElement("card");
                    new_card.id = "card";
                    
                    const nombre = document.createElement("div");
                    nombre.id = "nombre";
                    nombre.textContent = price.nombre || "-";

                    const compra = document.createElement("div");
                    compra.id = "compra";
                    compra.textContent = price.compra || "-";

                    const venta = document.createElement("div");
                    venta.id = "venta";
                    venta.textContent = price.venta || "-";

                    const fecha = document.createElement("div");
                    fecha.id = "fecha";
                    fecha.textContent = new Date(price.fechaActualizacion).toLocaleDateString(
                        'es-AR',
                        {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                            hour12: false,
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit"
                        }
                    ) || "-";


                    new_card.appendChild(nombre);
                    new_card.appendChild(compra);
                    new_card.appendChild(venta);
                    new_card.appendChild(fecha);
                    

                    cards_panel.appendChild(new_card);
                });
            }            
        }
        else{
            throw new Error(await response.error)
        }
    }
    catch(error){
        //console.error("Se ha producido un error:", error)
    }
}

window.onload = () => {
    getPricesListing();
};