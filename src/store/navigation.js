export default {
  state: {
    links: [
      {
        name: "Главная страница",
        icon: "mdi-home",
        to: "/",
      },
      {
        name: "Рецепты",
        icon: "mdi-glass-cocktail",
        to: "/recipes",
      },
      {
        name: "Ингредиенты",
        icon: "mdi-bottle-wine-outline",
        to: "/ingredients",
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    get_links(state) {
      return state.links;
    },
  },
};
