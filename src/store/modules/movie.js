import Api from "../../services/api";

const state = {
  movies: [],
  movie:null,
  cart:[]
};

const mutations = {
  SET_Movies(currentState, list) {
    currentState.movies = list;
  },
  ADD_TO_CART(state,{movie}){
    state.cart.push({
      movie
    })
  }
};

const actions = {
  async getMovies({ commit }) {
    const api = new Api();
    return new Promise((resolve, reject) => {
      api
        .getMovies()
        .then((movies) => {
          commit("SET_Movies", movies);
          resolve(movies);
        })
        .catch((err) => reject(err));
    });
  },
};

const getters = {
  getMovieList(currentState) {
    return currentState.movies;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export const addMovieToCart=({commit},{movie})=>{
  commit('ADD_TO_CART',{movie});
}
