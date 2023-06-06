const page = require("../src/page/createPage");

describe("createPage", () => {
    test("Create page is defined", () => {
        expect(typeof page).toBe("function")
    });

    test("Create page imports header, main and footer content", ()=>{
        const headerContentMockFn = jest.spyOn(page, "headerContent");
        const footerContentMockFn = jest.spyOn(page, "footerContent");
        const mainContentMockFn = jest.spyOn(page, "mainContent");
        page(headerContentMockFn,mainContentMockFn,footerContentMockFn)
        expect(headerContentMockFn).toHaveBeenCalled()
        expect(footerContentMockFn).toHaveBeenCalled()
        expect(mainContentMockFn).toHaveBeenCalled()
    })

})