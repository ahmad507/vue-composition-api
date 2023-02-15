<template>
    <div>
        <div>Parent : {{nilai}}</div>
        <banner :isian="counter"/>
        <button @click.prevent="increment(1)">INCREMENT</button>
        <button @click.prevent="decrement(1)">DECREMENT</button>
    </div>
</template>

<script>
    import Banner from "../../components/banners/Banner";
    import {mapActions, mapGetters, mapState} from "vuex";
    export default {
        name: "HomeView",
        setup(props, {root})
        {
            console.log(root)
        },
        components: {Banner},
        computed :{
            ...mapState({
                nilai : state => state.counter + 1
            }),
            ...mapGetters({
                counter : "counter"
            })
        },
        methods:{
            ...mapActions({
                increment : "increment",
                decrement : "decrement"
            })
        }
    }
</script>

<style scoped>

</style>
