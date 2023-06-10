export function shipContent(){
    const shipContainer = document.querySelector('.ship-container-display');

    const fleet = document.createElement('div');
    fleet.setAttribute('class', 'ship-fleet h-100 w-100');
    shipContainer.appendChild(fleet);

    const fleetShips = {
        "Battleship": '../src/assets/bs-battleship.svg',
        "Carrier": '../src/assets/bs-carrier.svg',
        "Cruiser": '../src/assets/bs-cruiser.svg',
        "Destroyer": '../src/assets/bs-destroyer.svg',
        "Submarine": '../src/assets/bs-submarine.svg'
    }  

    const buildShipCard = {
        shipCard: null,
        newShipCard: function(){
          const newCard = document.createElement("div");
          newCard.setAttribute('class','ship-card d-flex flex-column justify-content-around align-items-center w-75 h-75 bg-white bg-opacity-50 rounded');
          fleet.appendChild(newCard);
          this.shipCard = newCard;
      },
      shipImage: function(key){
        // image
        const imageContainer = document.createElement("div");
        imageContainer.setAttribute('class',`${key} ship-image-container px-3 d-flex justtify-content-center align-items-center`);
        this.shipCard.appendChild(imageContainer);

        const image = document.createElement("img");
        image.setAttribute('src', fleetShips[key]);
        image.setAttribute('class',`${key} ship-image`);
        image.setAttribute('alt', key);
        imageContainer.appendChild(image);
      },
      shipTitle: function (key) {
        // text title
        const title = document.createElement("p");
        title.setAttribute('class','ship-title mb-0 fs-5');
        title.textContent = key;
        this.shipCard.appendChild(title);
      },
      shipDamage: function(key){
        const damageContainer = document.createElement("div");
        damageContainer.setAttribute('class','ship-damage text-red w-100 h-25');
        this.shipCard.appendChild(damageContainer);
      },
      shipPosition: function(key){
        const positionContainer = document.createElement("div");
        positionContainer.setAttribute('class',`ship-position text-red w-100 ms-3`)
        this.shipCard.appendChild(positionContainer);
        positionContainer.textContent = "POS:";
      }
    };

    // build Cards
    const keys = Object.keys(fleetShips)
    for (let keyValue of keys){
        buildShipCard.newShipCard();
        buildShipCard.shipImage(keyValue);
        buildShipCard.shipTitle(keyValue);
        buildShipCard.shipDamage(keyValue);
        buildShipCard.shipPosition(keyValue);
    };



}