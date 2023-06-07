const page = require("../src/page/createPage");

describe("createPage", () => {
    test("Create page is defined", () => {
        expect(page).toBeDefined();
    });

    test("CreatePage() calls buildPages() to populate elements with content", ()=>{
        const newPage = page
        const buildPageMockFn = jest.fn
        newPage
        expect(buildPageMockFn).toHaveBeenCalled
    })

})