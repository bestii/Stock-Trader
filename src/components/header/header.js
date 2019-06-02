export default {
    name: "Header",
    computed: {
        funds(){
            return this.$store.getters.funds;
        }
    }
};