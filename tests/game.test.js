const gameboard = require("../src/game/gameboard")

    describe("Gameboard", () => {
        test("Gameboard() is defined", () => {
            expect().toBe();
        });

        test("Gameboard calls the ship factory function", () => {
            expect().toBe();
        });

        test("Gameboard has two arguments. ship and coordinates", () => {
            expect().toBe();
        });

        test("Gameboard places thes ships given the coordinaates", () => {
            expect().toBe();
        });

        test("Gameboard keeps a record of missed attacks",() =>{
            expect().toBe();
        })
        
        test("Gameboard displays missed attacks", () => {
            expect().toBe();
        });

        test("Gameboard displays landed attacks", () => {
          expect().toBe();
        });

        test("Gameboard reports when all ships are sunk", () => {
          expect().toBe();
        });

        describe("Recieve Attack", () => {
            test("recieveAttack() is defined", () => {
                expect().toBe();
            });
            test("recieveAttack has two arguments. coordinate 1 and coordinate 2", () => {
                expect().toBe();
            });

            test("recieveAttack returns a boolean for hit or miss",() =>{
                expect().toBe();
            });
            test("recieveAttack adds a hit to the correct ship or records a missed shot",() =>{
                expect().toBe();
            });
            test("recieveAttack displays landed attacks", () => {
                expect().toBe();
            });
        })
    })