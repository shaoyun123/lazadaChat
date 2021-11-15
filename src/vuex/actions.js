//test
export const increment = ({commit}) => {
    commit('INCREMENT')
}
export const decrement = ({commit}) => {
    commit('DECREMENT')
}

export const toChat = ({commit,name}) => {
    commit('TOCHAT')
}
