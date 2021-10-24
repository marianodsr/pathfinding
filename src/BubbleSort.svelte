<script>
    let array = [10, 2, 40, 56, 20, 14, 59 ,43, 5, 4, 90, 32, 11, 65, 33]
    let currentI 
    let currentJ

    const refillArray = () => {
        array = []
        for(let i= 0; i<15; i++) {
             array.push(Math.random() * 100)
        }
        array = array
    }

     async function  bubbleSort() {
        for (let i = 0; i< array.length; i++) {
            for (let j = i; j < array.length; j++) {
                await new Promise(r => setTimeout(r, 35));
                currentI = i
                currentJ = j
                if (array[j] < array[i]) {
                     swap(i, j)
                }
            }
        }
    }

    const swap = (i, j) => {
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    </script>

<main>
    <div>
        <button class="green"on:click="{() => {refillArray()}}">Generate new array</button>
        <button class="red"on:click="{bubbleSort}">Sort!</button>
    </div>
    <section>
        {#each array as elem, i (elem)}
            <div style="width: 40px; height: {elem}%; margin-right: 10px;" 
            class="white" class:green="{i === currentI}" class:red="{i === currentJ}"></div>
        {/each}
    </section>
</main>


<style>
    main {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    section {
        margin-top: 3rem;
        display: flex;
        height: 50%;
        align-items: flex-end;
        padding: 1rem 0;
    }

    .white {
        background-color: #f8f9fa;
    }

    .green {
        background-color: #80ffdb;
        color: #1d3557;
        margin-right: 1rem;
    }

    .green:hover {
        background-color: #1d3557;
        color: #80ffdb;
    }

    .red {
        background-color: #f72585;
        
    }
    
    .red:hover {
        background-color: #f8f9fa;
    color: #f72585;

    }

    button {
        outline: none;
        border: none;
        padding: .5rem 1rem;
        color: #f8f9fa;
        box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
cursor: pointer;
font-size: 1.2rem;
    }
</style>
