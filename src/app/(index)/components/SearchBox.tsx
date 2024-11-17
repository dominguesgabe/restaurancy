"use client";

import {searchAction} from "./actions";

export default function SearchBox({q}: {q: string}) {
  return (
    <form action={searchAction} className="mb-4 inline-flex gap-2">
      <input className="px-2" defaultValue={q || ""} name="query" />
      <button className="bg-white/20 p-2" type="submit">
        Buscar
      </button>
    </form>
  );
}
