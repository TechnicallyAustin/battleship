import { headerContent } from "../content/headerContent";
import { mainContent } from "../content/mainContent";
import { footerContent } from "../content/footerContent";
import { buildPage } from "../content/buildPage";


export function createPage(){
    const page = document.querySelector('.page-content');
    const pageElements = {
        header: function(){
            const newHeader = page.appendChild(document.createElement('header'))
            newHeader.setAttribute("class", 'header w-100 h-100 bg-black d-flex justify-content-start align-items-center');
        },
        main: function(){
             const newMain = page.appendChild(document.createElement("main"));
             newMain.setAttribute("class", "main w-100 h-100 bg-black");
        },
        footer: function(){
            const newFooter = page.appendChild(document.createElement('footer'));
            newFooter.setAttribute("class", 'footer w-100 h-100 bg-black');
        }
    }
    pageElements.header();
    pageElements.main();
    pageElements.footer();
    buildPage();

    console.log(typeof createPage);
}


