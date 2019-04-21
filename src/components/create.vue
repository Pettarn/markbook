<template>
    <section>
        <!-- 展示title -->
        <input type="text" v-model="note.titel" placeholder="Title note" @keyup="control_setNote()">
        <!-- 展示text -->
        <textarea placeholder="This is my note written in Markdown" v-model="note.text" @keyup="control_setNote()"></textarea>
    </section>
</template>

<script>
export default {
    created () {
        this.getNote($route.params.noteId)
    },
    vuex: {
        actions: {
            setNote ({ dispatch }) {
                this.note.date = new Date().getTime()
                dispatch(SET_NOTE, this.note)
            }
        }
    },
    data () {
        return {
            note: {
                title: '',
                text: ''
            }
        }
    },
    methods: {
        control_setNote () {
            setTimeout(setNote(), 500)
        },
        // 直接从localStorage中获得note对象的属性
        getNote (id) {
            const markbook = JSON.parse(localStorage.getItem('markbook'))
            markbook.notes.filter(n => {
                if(n.date == id) {
                    this.note.title = n.title
                    this.note.text = n.text
                }
            })
        }
    }
}
</script>