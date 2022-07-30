export const state = () => ({
  user: null,
  showLogin: false
})

export const mutations = {
  updateUser (state, user) {
    state.user = user
  },
  updateShowLogin (state, value) {
    state.showLogin = value
  }
}

export const getters = {
  isAuth (state) {
    return state.user !== null
  },
  isAccess (state) {
    return state.user?.access || false
  },
  isAdmin (state) {
    return state.user?.admin || false
  },
  showLogin (state) {
    return state.showLogin
  },
  user (state) {
    return state.user
  }
}

export const actions = {
  async CheckAuth (state) {
    try {
      if (process.client) {
        const response = await this.$axios.get('/user/refresh', { withCredentials: true })
        state.commit('updateUser', response.data.user)
      }
    } catch (e) {
      console.log(e)
      if (e.response.status === 401 && this.$cookies.get('accessToken')) {
        this.$cookies.remove('accessToken')
        state.commit('updateUser', null)
      }
    }
  },

  async Logout (state) {
    try {
      if (process.client) {
        await this.$axios.get('/user/logout', { withCredentials: true })
        this.$cookies.remove('accessToken')
        state.commit('updateUser', null)
      }
    } catch (e) {
      console.log(e)
    }
  },

  async Login (state, payload) {
    try {
      await this.$axios.post('user/login2',
        {
          email: payload.email,
          code: payload.code
        }, { withCredentials: true }).then((response) => {
        if (response) {
          console.log(response.data)
          state.commit('updateUser', response.data.user)
          return null
        }
      }).catch((err) => {
        console.log(err.response.data.message)
        return err.response.data.message
      })
    } catch (e) {
      console.log(e)
    }
  }
}
