<script>
    import {  createEventDispatcher  } from "svelte";
    const thisDispatcher = createEventDispatcher();

    function handleClick(){
        thisDispatcher("alert",{
                text : "Something Error",
            });
    }

</script>

<button on:click={handleClick}>Alert Message</button>



