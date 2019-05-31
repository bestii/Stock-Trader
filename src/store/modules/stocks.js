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
    buyStocks: ({commit}, order) => {
        commit();
    },
    setStocks: ({commit}) =>{
        commit('SET_STOCKS');
    }
}