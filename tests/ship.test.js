const ship = require("../src/ships/ship")

describe("Ship", () => {
    test("Ship is a factory function", () =>{
        expect(typeof ship).toBe("function")
    });

    test("Ship has properties length, hits and sunk", ()=>{
        const newShip = ship(3)
        expect(newShip).toHaveProperty("hits")
        expect(newShip).toHaveProperty("sunk")
        expect(newShip).toHaveProperty("length")
    });

    describe("hit()", () => {
        test("Ship has a hit function", ()=>{
            const newShip = ship(3)
            expect(typeof newShip.hit).toBe("function")
        }),

        test("ship.hit() should increase the number of hits on the ship.", () => {
            const newShip = ship(3);
            expect(newShip.hits()).toBe(0);
            newShip.hit();
            expect(newShip.hits()).toBe(1)
        })

    });

    describe("isSunk()", ()=>{
        test("isSunk is a function()",() => {
            const newShip = ship(3)
            expect(typeof newShip.isSunk).toBe("function")
        });

        test("isSunk() takes two arguments, # of hits and length of ship", () => {
            const newShip = ship(3);
            expect(newShip.isSunk).toHaveLength(2);

        })
        test("isSunk() returns a boolean", () => {
            const newShip = ship(3)
            expect(newShip.isSunk(2,1)).toBe(false)
            expect(newShip.isSunk(2,2)).toBe(true)
        })
    })
})