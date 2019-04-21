<template>
  <section>
    <div>
        <h1>{{ title }}</h1>
        {{ text }}
    </div>
  </section>
</template>

<script>
import marked from 'marked'
import highlight from 'highlight.js'

marked.setOptions({
    highlight (code) {
        return highlight.highlightAuto(code).value
    }
})

export default {
    created () {
        this.getNote(id)
    },
    date () {
        return {
            title: '',
            text: ''
        }
    },
    methods: {
        getNote (noteId) {
            const markbook = JSON.parse(localStorage.getItem('markbook'))
            markbook.notes.filter(note => {
                if(note.date == noteId) {
                    this.title = note.title
                    this.text = marked(note.text)
                }
            })
        }
    }
}
</script>

