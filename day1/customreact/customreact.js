// basic approach 

function ownRender(reactElements ,thridcontainer) {

// render two things what (kya )aur  where (kha )
// what (kya) -reactElements
// where (kha) -thridcontainer


    // const domELe = document.createElement(reactElements.type)
    // domELe.innerHTML =reactElements.children

    /**
     * 1. store value  in domELe
     * 2. create element in reactElements and type of element
     * 3. access the value by domELe innerHTML  in reactElements ki children value
     */

//     domELe.setAttribute('href' ,reactElements.props.href)
//     domELe.setAttribute('target' ,reactElements.props.target)

//     thridcontainer.appendChild(domELe)
// 


//  by loop -------------

const  domELe =document.createElement(reactElements.type)
domELe.innerHTML = reactElements.children
for (const prop in reactElements.props ) {
    if(prop === 'children')continue;
    domELe.setAttribute(prop ,reactElements.props[prop])
    
}

thridcontainer.appendChild(domELe)


}




 /**
     * 1. jo element create kiya tha us mein attribute set karna 
     * 2. aue reactElements ki propety ko lena
     * 3. then value get kar thrid container mein appendchild se
     */


const reactElements = {
    type: 'A',
    props :{
        href :'https://granthcodes.com/',
        target : '_blank'
    },
    children: 'Click me to  visit portfolio'
}

/**
 * phale ek element create karo object hai jo ki type set karo imp baat
 * type mein only single value store kar saket ho
 * then whatever property you want us set kar do
 * 
 * what want you show on web in come with child 
 */

const secondContainer = document.querySelector('#root')

ownRender(reactElements ,secondContainer)



/**
 * jaise react mein hota root kaise value store hota hai yha par secondContainer
 * mein store hai aur document ki query selector se root ko select kiya hai 
 * 
 * own render jo create kiya tha wo hai 
 * us mein reactElements - jaise mein sare element hai 
 * secondContainer - jaise mein value store ki hai 
 */























// function customRender (reactElement, container) { 
    
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children

//     domElement.setAttribute('href' ,reactElement.props.href)
//     domElement.setAttribute('target' , reactElement.props.target)
    
//     container.appendChild(domElement)
    
    
// }

//react elements 

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// const mainContainer = document.querySelector('#root')

// customRender(reactElement, mainContainer)


// const mainContainer = document.querySelector('#root')
// // selected root 

// customRender(reactElement ,mainContainer)


//render 


/**
 * 1. container - root karke condation ko uda liya , render method se  render kar le in containes
 * 2 toh smajha nahi toh hum ne ek element create kiya   
 * baisc approch 
 * loop approch 
 * custom render methods 
 * mainjs method  direct exe
 * rect in tree 
 * mera element 
 * html deta hoon and mera mn nahi chal
 * react element 
 * chlienden 
 * finally 
 * 
 * crete element -> jsx ko direct call kar skat  hai 
 * 
 */