<template>
    <header class="header">
        <!-- Search -->
        <div class="header_searchbox">
            <input type="text" :disabled="$route.path == '/create/'" class="header_searchbox--input" v-model="quest" @keyup="setEngineSearch(quest)" placeholder="Search your notes.">    
        </div>
    
        <!-- button-group -->
        <div class="header_btngroup">
            <!-- Add -->
            <router-link to="/create/" tag="div" class="header_btngroup--new">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-jia"></use>
                </svg>            
            </router-link>

            <!-- Save -->
            <router-link v-if="($route.path == '/create/') || ($route.name == 'edit')" to="/" tag="div" @click="addNote($rotue.params.noteId)" class="header_btngroup--save">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-check"></use>
                </svg>
            </router-link>        
        </div>
    </header>
</template>

<script>
export default {
    vuex: {
        actions: {
            addNote ({ dispatch }, noteId) {
                dispatch(ADD_NOTE, noteId)
            },
            setEngineSearch ({ dispatch }, engine) {
                dispatch(SET_ENGINE_SEARCH, engine)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
$gray_first: #f2f2f2;
$gray_second: #e6e6e6;
$main_color: #ff9999;

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}



</style>


