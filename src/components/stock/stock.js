export default {
    name: "stock",
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            console.log(order);
            this.$store.dispatch('buyStock', order);
            this.quantity = 0;
        }
    }

};