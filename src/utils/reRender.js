export const reRender = async (components, docElement) =>{
    if(components){
        document.querySelector(docElement).innerHTML = await components.render()
    }
    if(components.afterRender) await components.afterRender();
}