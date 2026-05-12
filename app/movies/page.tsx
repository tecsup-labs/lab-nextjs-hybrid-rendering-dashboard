import axios from 'axios'
import MovieSearch from './MovieSearch'
import { GlowCard } from '@/components/GlowCard'
import { SafeImage } from '@/components/SafeImage'

const API_KEY = 'f1def80d'

async function getPopularMovies() {
  try {
    // Buscamos películas de Marvel, pero filtramos las que no tienen póster
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=marvel&type=movie`)
    const movies = response.data.Search || []
    return movies.filter((m: any) => m.Poster !== 'N/A').slice(0, 8) // Solo las mejores 8 con póster
  } catch (error) {
    console.error("Error fetching popular movies", error)
    return []
  }
}

export default async function MoviesPage() {
  const popularMovies = await getPopularMovies()

  return (
    <div className="min-h-screen bg-[#020617] p-8 font-sans selection:bg-cyan-500 selection:text-white text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Compacto */}
        <header className="mb-8 pt-4">
          <h1 className="text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-2 animate-gradient">
            CineVault
          </h1>
          <p className="text-gray-400 text-lg font-light tracking-widest uppercase">Gallery • SSR + CSR</p>
        </header>

        {/* Sección CSR Compacta */}
        <section className="relative mb-12">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="flex items-center gap-3 mb-6">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </div>
            <h2 className="text-2xl font-black text-white uppercase tracking-widest">Buscador (CSR)</h2>
          </div>
          <MovieSearch />
        </section>

        {/* Sección SSR - Destacados Ordenados */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 w-20 bg-green-500 rounded-full"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-[0.2em]">Destacados (SSR)</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {popularMovies.map((movie: any, index: number) => {
              const colors: Array<'blue' | 'purple' | 'green' | 'orange'> = ['green', 'blue', 'purple', 'orange'];

              return (
                <div key={movie.imdbID} className="h-[450px]">
                  <GlowCard
                    glowColor={colors[index % colors.length] as any}
                    customSize={true}
                    className="h-full w-full"
                  >
                    <div className="relative h-full w-full group rounded-xl overflow-hidden">
                      {/* Imagen de fondo a pantalla completa de la tarjeta */}
                      <SafeImage
                        src={movie.Poster}
                        alt={movie.Title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay para legibilidad */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90 transition-opacity"></div>

                      {/* Contenido de texto inferior */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <span className="text-green-400 font-mono text-[9px] font-black px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded tracking-widest uppercase mb-2 inline-block">
                          SSR Content
                        </span>
                        <h3 className="text-lg font-black text-white leading-tight drop-shadow-2xl">
                          {movie.Title}
                        </h3>
                        <p className="text-gray-400 font-bold text-xs mt-1">{movie.Year}</p>
                      </div>
                    </div>
                  </GlowCard>
                </div>
              )
            })}
          </div>
        </section>

        {/* Footer Justification */}
        <footer className="mt-32 pt-16 border-t border-white/5 pb-10">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-400 uppercase tracking-widest">Análisis de Estrategias</h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-green-500/10 to-transparent p-8 rounded-[2.5rem] border border-green-500/20 hover:border-green-500/40 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-500/20 rounded-2xl text-green-400 text-2xl font-bold">SSR</div>
                <h4 className="text-white text-xl font-black">Página Principal</h4>
              </div>
              <p className="text-gray-400 leading-relaxed">
                He usado **Server-Side Rendering** para la lista de populares porque es el contenido que queremos que indexen los buscadores.
                El usuario recibe la lista de inmediato, mejorando el LCP (Largest Contentful Paint) y asegurando que la página no se vea "vacía" al cargar.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent p-8 rounded-[2.5rem] border border-cyan-500/20 hover:border-cyan-400/40 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-cyan-500/20 rounded-2xl text-cyan-400 text-2xl font-bold">CSR</div>
                <h4 className="text-white text-xl font-black">Búsqueda Interactiva</h4>
              </div>
              <p className="text-gray-400 leading-relaxed">
                He usado **Client-Side Rendering** para el buscador porque requiere **estado de React** (`useState`) y **efectos** (`useEffect`).
                Permite filtrar resultados sin recargar la página y manejar modales de detalle de forma fluida, ofreciendo una experiencia tipo "App".
              </p>
            </div>
          </div>
          <p className="text-center mt-20 text-gray-600 font-mono text-sm">
            Lab 09 - Desarrollo de Aplicaciones Web • 2026
          </p>
        </footer>
      </div>
    </div>
  )
}
