/**
 * Structure de données de nos recettes
 */

export interface Recipe {
  id?: number;
  imageUrl?: string;
  thumbnailUrl?: string;
  stars: number;
  published_at: string;
  author?: string;
  title: string;
  description: string;
}

/**
 * Mock
 */

export const MockRecipes: Recipe[] = [
  {
    id: 1,
    imageUrl: "assets/images/recipes/hamburger.jpg",
    thumbnailUrl: "assets/images/recipes/hamburger.thumb.jpg",
    stars: 97,
    published_at: "2018-09-11",
    author: "Ervin Howell",
    title: "Hamburger",
    description: "Les hamburgers ne sont pas forcément ce truc gras et mou qu'on mange dans les fast-food, bien fait c'est excellent. De plus c'est un plat très convivial car on pose tout sur la table, et chacun compose le sien à son goût."
  },
  {
    id: 2,
    imageUrl: "assets/images/recipes/chips-pommes.jpg",
    thumbnailUrl: "assets/images/recipes/chips-pommes.thumb.jpg",
    stars: 15,
    published_at: "2018-01-05",
    author: "Alan Job",
    title: "Chips de pommes",
    description: "Voilà une recette extrêmement simple, presque rien à faire, à part attendre que les chips se fassent, doucement, dans le four."
  },
  {
    id: 3,
    imageUrl: "assets/images/recipes/babas-au-rhum.jpg",
    thumbnailUrl: "assets/images/recipes/babas-au-rhum.thumb.jpg",
    stars: 55,
    published_at: "2018-09-11",
    author: "Paulin Rogers",
    title: "Babas au rhum",
    description: "Le baba au rhum est un dessert classique de la pâtisserie française, c'est un petit biscuit léger et rond, imbibé d'un sirop au rhum et recouvert d'un peu de crème Chantilly."
  },
  {
    id: 37,
    imageUrl: "assets/images/recipes/saumon-four.jpg",
    thumbnailUrl: "assets/images/recipes/saumon-four.thumb.jpg",
    stars: 23,
    published_at: "2018-07-10",
    author: "Tony Ramos",
    title: "Filet de saumon au four",
    description: "Recette rapide que ce filet de saumon cuit au four, avec jus de citron, huile d'olive et herbes, le tout entouré de rondelles de pommes de terre."
  },
  {
    id: 17,
    imageUrl: "assets/images/recipes/moules-marinieres.jpg",
    thumbnailUrl: "assets/images/recipes/moules-marinieres.thumb.jpg",
    stars: 15,
    published_at: "2010-02-10",
    author: "Eddy Lucas",
    title: "Moules marinières",
    description: "La façon la plus classique de préparer des moules, simple mais délicieuse."
  }, {
    id: 18,
    imageUrl: "assets/images/recipes/cocktail-margarita.jpg",
    thumbnailUrl: "assets/images/recipes/cocktail-margarita.thumb.jpg",
    stars: 43,
    published_at: "2013-01-11",
    author: "Alan Turing",
    title: "Cocktail Margarita",
    description: "La recette originale du délicieux cocktail, revisitée à la téquila. À déguster avec une rondelle de citron."
  }
  , {
    id: 22,
    imageUrl: "assets/images/recipes/cookies.thumb.jpg",
    thumbnailUrl: "assets/images/recipes/cookies.jpg",
    stars: 124,
    published_at: "1942-01-11",
    author: "Robert Cookie",
    title: "Cookies",
    description: "Recette traditionnelle américaine de petits gâteaux familiaux, qui se décline en différents parfums ou ajouts (céréales, fruits secs, chocolat, etc...)."
  }
  , {
    id: 23,
    imageUrl: "assets/images/recipes/tomates-farcies.jpg",
    thumbnailUrl: "assets/images/recipes/tomates-farcies.thumb.jpg",
    stars: 7,
    published_at: "2013-01-11",
    author: "Albert Brock",
    title: "Tomates farcies",
    description: "Pour ces tomates farcies un peu spéciales, la farce va être constituée de chair à saucisse de Morteau aux oignons, de riz et de cancoillotte."
  },
];