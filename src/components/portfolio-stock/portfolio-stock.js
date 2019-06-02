import { mapActions } from 'vuex';

export default {
    name: "portfolio-stock",
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        ...mapActions({ 
            placeSellOrder: 'sellStock' 
        }),

        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity,
            };
            this.placeSellOrder(order);
            this.quantity = 0;

        }
    }

};