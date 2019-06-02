// @ is an alias to /src
import Header from '@/components/header';
import { mapGetters } from 'vuex';
import Stock from '@/components/portfolio-stock';

export default {
    name: "portfolio",
    components: {
        Header,
        Stock
    },
    computed:{
        ...mapGetters({
            stocks: 'stockPortfolio'
        })
    },

};