import { Component } from 'solid-js'
import { createSignal, createEffect, onMount } from 'solid-js';
// import { createStore } from 'solid-js/store'

const Home: Component = () => {
    //createSignal(string, number), single, works with objects and arrays too, creates a new object in memory
    //createStore(object, array), does not work with string or number, creates just new element, not the whole thing
    //both are like useState in react
    const [ pageName, setPageName] = createSignal('Settings');

    createEffect(() => setPageName('Home'))    
    
    // onMount(() =>setPageName('Home'))
    // same as the empty array at the end of a useEffect in react

    return (
   <h1>This is the {pageName()} page</h1>
    )
}
   export default Home;