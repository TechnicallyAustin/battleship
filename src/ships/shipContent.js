export function shipContent(){
    const shipContainer = document.querySelector('.ship-container-display');
    const fleet = document.createElement('div');
    fleet.setAttribute('class', 'ship-fleet');
    shipContainer.appendChild(fleet);

    const fleetShips = {
        "battleship": '../src/assets/bs-battleship.svg',
        "carrier": '../src/assets/bs-carrier.svg',
        "cruiser": '../src/assets/bs-cruiser.svg',
        "destroyer": '../src/assets/bs-destroyer.svg',
        "submarine": '../src/assets/bs-submarine.svg'
    }   

    const keys = Object.keys(fleetShips)

    let container = document.createElement("div");
    container.setAttribute('class','ship-container d-flex  justify-content-center align-items-center w-100 h-100');
    for (let key of keys){
        fleet.appendChild(container);

        let ship = document.createElement("img");
        ship.setAttribute('src', fleetShips[key]);
        ship.setAttribute('alt', key);
        ship.setAttribute('class',`ship ${key}-ship`);
        ship.setAttribute('id', key);
        container.appendChild(ship);
    }



}