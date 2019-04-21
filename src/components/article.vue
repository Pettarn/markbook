<template>
    <section>
        <!-- 列表渲染出notes，有search则用过滤器筛选符合条件的note，并且设置路由，用户可以把该note点开 -->
        <router-link v-for="(note, index) in filtered_notes" :key="note.date" to="{path: 'view', params: {note.date}}">
            <!-- 对该note进行编辑==========图标 -->
            <router-link to="{path: '/create/', params: {note.date}}">Edit</router-link>

            <!-- 把该note删除=========图标 -->
            <input type="button" @click="removeNote(index)">

            <p>{{ note.title | capitalized }}</p>
            <p>{{ note.date | formatDate }}</p>
            <p>{{ note.text | render }}</p>
        </router-link>
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
    // 从vuex获得search
    vuex: {
        getters: {
            search: store => store.search
        }
    },

    // 实例的data
    data () {
        return {
            notes: []
        }
    },
    methods: {
        // 从loaclStorage获得notes数组
        getNotes () {
            let markbook = localStorage.getItem('markbook')
            markbook = JSON.parse(markbook)
            markbook.notes.forEach(n => {
                this.notes.push(n)
            })
        },

        // 直接从localStorage删除该索引下的note
        removeNote (index) {
            let markbook = localStorage.getItem('markbook')
            markbook = JSON.parse(markbook)
            markbook.notes.splice(index, 1)
            localStorage.setItem('markbook', JSON.stringify(markbook))
            this.notes = []
            this.getNotes()
        },
    },

    filters: {
        capitalized (value) {
            if(!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        },
        render (value) {
            return marked(value)
        },
        formatDate (value) {
            value = new Date(value)
            const month = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".splice(' ')
            return `${ value.getDate() } ${ month[value.getMonth()] } ${ value.getFullYear() }`
        }
    }
    
}
</script>

