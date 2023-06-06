const page = require("../src/page/createPage");

describe("createPage", () => {
    test("Create page is defined", () => {
        expect(typeof page).toBe("function");
    });

    test("CreatePage() calls buildPages() to populate elements with content", ()=>{

    })

})