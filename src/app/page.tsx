"use client";

import dynamic from 'next/dynamic';

// hay que desactivar el SSR para que funcione el mapa en nextr
const MapWithNoSSR = dynamic(
  () => import('@/components/map'),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4">
      <header className="flex items-center gap-2 mb-8">
        <h1 className="text-3xl font-bold">Ejemplo de Mapa con Next.js y Leaflet</h1>
      </header>

      <div className="h-full">
        <MapWithNoSSR />
      </div>

      <footer className="mt-8 text-center text-sm text-muted-foreground">
        <p>Ejemplo </p>
      </footer>
    </main>
  );
}