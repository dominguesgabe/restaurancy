import Link from "next/link";
// import {cookies}  from "next/headers";

import {RestaurantCard} from "../components/RestaurantCard";

import SearchBox from "./components/SearchBox";

import api from "@/api";

export default async function HomePage({searchParams}: {searchParams: Promise<{q: string}>}) {
  const {q} = await searchParams;
  const restaurants = await api.search(q);

  return (
    <>
      <SearchBox q={q} />
      <section className="grid h-full w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {!!restaurants.length ? (
          restaurants.map((restaurant) => {
            return (
              <Link
                key={restaurant.id}
                className="transition hover:opacity-90"
                href={`/${restaurant.id}`}
              >
                <RestaurantCard restaurant={restaurant} />
              </Link>
            );
          })
        ) : (
          <div className="col-span-3 flex items-center justify-center">
            Nenhum resultado encontrado.
          </div>
        )}
      </section>
    </>
  );
}
