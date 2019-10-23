import axios from 'axios'

// console.log("table");
export const state = {
  count: 1,
  items: null,
}

export const getters = {}

export const mutations = {
  cache_items(state, newUser) {
    state.items = newUser
  },
  increment(state) {
    // mutate state
    state.count++
  },
}

export const actions = {
  init(state) {
    return axios({
      method: 'GET',
      url: 'https://m3m6ddar2g.execute-api.us-west-2.amazonaws.com/dev/items',
      headers: {
        'x-api-key': '19ImRQ6XWY1ukNyZDWWfy3NiIlgI4IH658VZqtHU',
        'Content-Type': 'application/json; charset=utf-8',
      },
    }).then((response) => {
      const user = response.data
      // console.log(this);
      state.commit('increment')
      state.commit('cache_items', user)
    })
  },
  fetchItems({ commit, state }) {
    // console.log("Fetch was called");
    // 2. Check if we've already fetched and cached the user.
    const matchedItems = state.items
    if (matchedItems) {
      return Promise.resolve(matchedItems)
    }

    return axios({
      method: 'GET',
      url: 'https://m3m6ddar2g.execute-api.us-west-2.amazonaws.com/dev/items',
      headers: {
        'x-api-key': '19ImRQ6XWY1ukNyZDWWfy3NiIlgI4IH658VZqtHU',
        'Content-Type': 'application/json; charset=utf-8',
      },
    }).then((response) => {
      const user = response.data
      commit('cache_items', user)
      return user
    })
  },
}
