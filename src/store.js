import {createStore} from "vuex"

const store = createStore({
    state(){
        return {
            theme: 'light'
        }
    },

    mutations:{
        changeTheme(state, value){
            state.theme = value
        }
    }
})

export default store