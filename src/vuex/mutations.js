export default {

    // 把vuex的note保存到localStorage
    ADD_NOTE (store, noteId) {
        let markbook = JSON.parse(localStorage.getItem('markbook'))

        // 去除相同ID的旧文章
        markbook.notes.forEach((n, index) => {
            if(n.date == noteId) markbook.notes.splice(index, 1)
        })

        // 增加新文章
        markbook.notes.unshift(store.note)



        //把markbook重新保存到localStorage
        localStorage.setItem('markbook', JSON.stringify(markbook))

    },

    // 给vuex传递搜索值
    SET_ENGINE_SEARCH (store, engine) {
        store.search = engine
    },

    // 给vuex传递新的note
    SET_NOTE (store, note) {
        store.note = note
    }
}