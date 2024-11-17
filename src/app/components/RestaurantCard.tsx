import {Restaurant} from "@/types";

interface ArticleProps {
  restaurant: Restaurant;
}

export function RestaurantCard({restaurant}: ArticleProps) {
  return (
    <article>
      <img
        alt={restaurant.name}
        className="mb-3 h-[300px] w-full rounded object-cover"
        src={restaurant.image}
      />
      <h2 className="inline-flex gap-2 text-lg font-bold">
        <span>{restaurant.name}</span>
        <small className="inline-flex gap-1">
          <span>⭐</span>
          <span>{restaurant.score}</span>
          <span className="font-normal opacity-75">({restaurant.ratings})</span>
        </small>
      </h2>
      <p className="opacity-90">{restaurant.description}</p>
    </article>
  );
}
