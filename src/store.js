import {createStore} from "vuex"

const store = createStore({
    state(){
        return {
            theme: 'light',
            animKey: 0
        }
    },

    mutations:{
        changeTheme(state, value){
            state.theme = value
        },
        increaseAnimkey(state){
            state.animKey++
        }
    }
})

export default store