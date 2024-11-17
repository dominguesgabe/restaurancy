"use client";

export default function ErrorPage({error}: {error: Error}) {
  return (
    <div className="flex min-h-screen items-center justify-center text-lg font-semibold">
      Algo deu errado, tente novamente!
    </div>
  );
}
