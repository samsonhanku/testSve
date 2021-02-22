<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    
    function sayHello() {
        dispatch("mas", {
            text: "Hell0.0o!",
        });
    }
</script>

<button on:click={sayHello}> Click to say hello </button>
