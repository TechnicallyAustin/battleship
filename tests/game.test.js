const gameboard = require("../src/game/gameboard")

    describe("Gameboard", () => {
        test("Gameboard() is defined", () => {
            expect(typeof gameboard).toBe("function");
        });

        test("Gameboard calls the ship factory function", () => {
            // creates a mock to test if the ship factory function has been called.
            const shipFactoryMock = jest.spyOn(gameboard, "shipFactory");
            gameboard();
            expect(shipFactoryMock).toHaveBeenCalled();
        });

        test("Gameboard has three arguments. ship, coordinate X and coordinate Y", () => {
            const newBoard = gameboard(3);
            expect(newBoard).toHaveProperty("ship");
            expect(newBoard).toHaveProperty("coordinateX");
            expect(newBoard).toHaveProperty("coordinateY");

        });

    
        test("Gameboard displays missed attacks", () => {
            const newBoard = gameboard(3);
            newBoard.placeShips("dingy",1,4);
            newBoard.recieveAttack(3,4);
            expect(newBoard.getMissedAttacks().toHaveLength(1))
        });
        
        test("Gameboard displays landed attacks", () => {
            const newBoard = gameboard(3);
            newBoard.placeShips("dingy", 1, 4);
            newBoard.recieveAttack(1, 4);
            expect(newBoard.getLandedAttack().toHaveLength(1));
        });
        
        test("Gameboard reports when all ships are sunk", () => {
            const newBoard = gameboard(3);
            newBoard.placeShips("dingy", 1, 4);
            newBoard.recieveAttack(1, 4);
            expect(newBoard.allShipsSunk()).toBe(false);
            newBoard.recieveAttack(1, 5);
            expect(newBoard.allShipsSunk()).toBe(true);
        });
    describe('Gameboard.placeShips()', () => {
        test("Gameboard places the ships at given the coordinaates", () => {
            const newBoard = gameboard(3)
            newBoard.placeShips("dingy",1,4);
            
            // asserts that the ship has bee placed at the correct coordinates
            expect(newBoard.gameboardState[1][4]).toBe("dingy")
            
            //asserts that the neighbooring grid cells are empty
            expect(newBoard.gameboardState[2][4]).toBe("")
            expect(newBoard.gameboardState[3][4]).toBe("");
        });

        test("Gameboard places ships either vertically or horizontally", () => {

        })
    })

        describe('Gameboard.attackLog()', () => {

            test("Gameboard.attackLog() is defined", () => {
                expect(typeof gameboard.attackLog).toBe("function");
            });

            test("Gameboard.attackLog keeps a record of missed and landed attacks",() =>{
                // uses either an array or object to store attack record
                const newBoard = gameboard(3);
                newBoard.recieveAttack(1,4);
                expect(newBoard.attackLog).toContainEqual({x:1, y:4});
            });
            
        })

        describe("Gameboard.recieveAttack()", () => {
            test("recieveAttack() is defined", () => {
                expect(typeof gameboard.recieveAttack).toBe("function");
            });
            test("recieveAttack has two arguments. coordinate 1 and coordinate 2", () => {
                const newBoard = gameboard(3)
                newBoard.placeShips("dingy",1,4);
                newBoard.recieveAttack(1,4);
                expect().toBe();
            });

            test("recieveAttack calls ship.hit() and and records a missed shot to attack log",() =>{
                const newBoard = gameboard(3);
                const shipHitMock = jest.spyOn(gameboard.recieveAttack, "ship.hit")

                newBoard.placeShips("dingy",1,4);
                newBoard.recieveAttack(1,4);

                expect(shipHitMock).toHaveBeenCalled();

                expect(gameboard.attackLog[1][4]).toBe("dingy");

                expect(gameboard.attackLog[2][4]).toBe("");
                expect(gameboard.attackLog[3][4]).toBe("");
            });
            test("recieveAttack calls ship.hit() to add a hit to the ship",() =>{
                const newBoard = gameboard(3);
                newShipHitMock = jest.spyOn(gameboard.recieveAttack, "ship.hit")
                newBoard.placeShips("dingy",1,4);
                newBoard.recieveAttack(1,4);
                expect(newShipHitMock).toHaveBeenCalled();
            });
            test("recieveAttack displays landed attacks from attack Log", () => {
                expect().toBe();
            });
        })
    })