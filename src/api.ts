import {Restaurant} from "./types";

const api = {
  // Obtener todos los restaurantes
  list: async (): Promise<Restaurant[]> => {
    // Obtemos a informação do Google Sheets em formato texto e a dividimos por linhas, pulamos a primeira linha porque é o cabeçalho
    const [, ...data] = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTsKjZVGuTnTM2Zt8C-whcMbnHxfYEKftbnEPU5n-NlwVwtQko8EGpmO1PbY3zvJnIUeYS1kteZ1J3U/pub?output=csv",
      {next: {revalidate: 60, tags: ["restaurants"]}},
    )
      .then((res) => res.text())
      .then((text) => text.split("\n"));

    const restaurants: Restaurant[] = data.map((row) => {
      const [id, name, description, address, score, ratings, image] = row.split(",");

      return {
        id,
        name,
        description,
        address,
        score: Number(score),
        ratings: Number(ratings),
        image,
      };
    });

    return restaurants;
  },
  fetch: async (id: Restaurant["id"]): Promise<Restaurant> => {
    const restaurants = await api.list();
    const restaurant = restaurants.find((restaurant) => restaurant.id === id);

    if (!restaurant) {
      throw new Error(`Restaurant with id ${id} not found`);
    }

    return restaurant;
  },
  search: async (query: string = ""): Promise<Restaurant[]> => {
    // Obtemos os restaurantes
    const results = await api.list();

    // Filtramos por nome
    return results.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(query.toLowerCase()),
    );
  },
};

export default api;
