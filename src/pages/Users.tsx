import type { Component } from 'solid-js'
import Store from '../store';
import styles from '../App.module.css';
import { For, onMount } from 'solid-js';


const Users: Component = () => {
    const [store, setStore] = Store;

    onMount(() =>{
        if(store.users.length < 4) {
            setStore('users', [...store.users, 'user-4'])
        }
    })

    return (
   <div class={styles.padding}>
    <h1>List of Users</h1>
    <For each={store.users}>
        {(user, i) => <p class={styles.paddingLeft}>{i() + 1}: {user}</p>}
    </For>
    </div>
    )
}
   export default Users