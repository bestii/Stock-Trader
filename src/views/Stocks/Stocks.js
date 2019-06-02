// @ is an alias to /src
import Header from '@/components/header';
import Stock from '@/components/stock';
export default {
    name: 'stocks',
    components: {
        Header,
        Stock
    },
    computed: {
        stocks(){
            return this.$store.getters.stocks;
        }
    }
}