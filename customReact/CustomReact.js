
function customRender(reactElement,mainContainer){

   /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    const domEle= document.createElement(reactElement.type);

    domEle.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
       if(prop === 'children') continue

       domEle.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domEle);

}

const reactElement ={   
    type: 'a',
    props: {
        href:  'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer= document.querySelector('#root');

customRender(reactElement,mainContainer);  // inject the ele in main container ele







