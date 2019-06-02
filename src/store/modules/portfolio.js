const state = {
    funds: 10000,
    stocks: []
}

const mutations = {
    'BUY_STOCK'(state, { stockID, quantity, stockPrice }) {
        const record = state.stocks.find(element => element.id === stockId);
        if (record) {
            record.qunatity += quantity;
        } else {
            state.stocks.push();
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK'(state, { stockId, quantity, stockPrice }) {
        const record = state.stocks.find(element => element.id === stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    }
};

const actions = {
    sellStock({ commit }, order) {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio(state, getters) {
        return state.stocks.map(stocks => {
            const record = state.stocks.find(element => element.id === stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds() {
        return state.funds;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}