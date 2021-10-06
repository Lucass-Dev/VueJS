<template>
  <div class="admin">
    <ul>
      <li v-for="(item, index) in items" :key="item.task">
        <span v-bind:style="styleObject">
          {{ item.task }}
        </span>
        <button @click="color(index)">Editer</button> <button v-on:click="suppr(key)">Supprimer</button>
      </li>
    </ul>
    <input v-model="tasks" placeholder="Ajoutez-moi" />
    <button v-on:click="add">Ajouter</button>

  </div>
</template>

<script>
export default {
  name: "Admin",
  
  data() {
    return {
      items: [{ task: "fo" }, { task: "bar" }],
      tasks: null,
    };
  },
  methods: {

    suppr(index) {
      this.items.splice(index, 1);
    },

    add() {
      this.items.push({ task: this.tasks });
    },
  },
};
</script>

<style>
</style>