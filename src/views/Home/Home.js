// @ is an alias to /src
import Header from '@/components/header';
export default {
    name: "home",
    components: {
        Header
    }, computed: {
        funds(){
            return this.$store.getters.funds;
        }
    }

};