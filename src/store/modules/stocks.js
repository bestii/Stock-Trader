import stocks from '../../data/stocks';

const state = {
    stocks: []
}

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCK'() {

    }
}

const actions = {
    buyStocks: ({ commit }, order) => {
        commit('BUY_STOCK', order);
    },
    initStocks: ({ commit }) => {
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks: ({ commit }) => {
        commit('RND_STOCKS');
    }
}

const getters = {
    stocks: stock => {
        return state.stocks;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}