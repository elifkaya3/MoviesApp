import Api from "../../services/api";

const state = {
  movies: [],
};

const mutations = {
  SET_Movies(currentState, list) {
    currentState.movies = list;
  },
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