import { headerContent } from "../content/headerContent";
import { mainContent } from "../content/mainContent";
import { footerContent } from "../content/footerContent";



function createPage(headerContent, mainContent, footerContent){
    const page = document.querySelector('.page-content');
    const pageElements = {
        header: function(){
            const newHeader = page.appendChild(document.createElement('main'))
            newHeader.classList.add('header');

            newHeader.appendChild(headerContent);
        },
        main: function(){
             const newMain = page.appendChild(document.createElement("main"));
             newMain.classList.add("main");
             newMain.appendChild(mainContent);
        },
        footer: function(){
            const newFooter = page.appendChild(document.createElement('footer'));
            newFooter.classList.add('footer');
            newFooter.appendChild(footerContent);
        }
    }
    pageElements.header();
    pageElements.main();
    pageElements.footer();
}

module.exports = createPage;