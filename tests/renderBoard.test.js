const newGameBoard = require("../src/game/renderboard");

describe("New Game Board", () => {
    test("New Game Board is a function.", () => {
        expect(typeof newGameBoard).toBe("function");
    });

    test("The first cell of the grid [0][0] is empty", () =>{
        const board = newGameBoard(14,14);
        expect(board[0][0]).toBe("");
    })

    test("Game Board has 14 Rows.", () => {
        const board = newGameBoard(14,14);
	    expect(board.length).toBe(14);
    });

    test("Game Board has 14 Columns.", () => {
        const board = newGameBoard(14,14);
        expect(board[0].length).toBe(14);
    })

    test("GamGamee Board has labels 1-13.", () =>{
        const board = newGameBoard(14,14);
        expect(board[0][0]).toBe("");
        expect(board[0][1]).toBe("1");

    });

    test("Game Board has labels A-M.", () =>{
        const board = newGameBoard(14,14);
        expect(board[0][0]).toBe("")
        expect(board[1][0]).toBe("A");
    });

    test("Game Board cells each have click events", () => {
        const board = newGameBoard(14,14);
        boardEventMock = jest.spyOn(board[0][1], "clickEvent")
        board[0][1].click();
        expect(boardEventMock).toHaveBeenCalled();
    });
})