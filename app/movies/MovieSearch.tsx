'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { motion, AnimatePresence } from 'framer-motion'

import { GlowCard } from '@/components/GlowCard'
import { GlowingShadow } from '@/components/GlowingShadow'
import { SafeImage } from '@/components/SafeImage'

const API_KEY = 'f1def80d'

export default function MovieSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [selectedMovie, setSelectedMovie] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const searchMovies = async () => {
      if (query.length < 3) {
        setResults([])
        return
      }
      setLoading(true)
      try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
        if (response.data.Search) {
          setResults(response.data.Search)
        }
      } catch (error) {
        console.error("Error buscando películas", error)
      }
      setLoading(false)
    }

    const timeoutId = setTimeout(searchMovies, 500)
    return () => clearTimeout(timeoutId)
  }, [query])

  const fetchDetails = async (id: string) => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      setSelectedMovie(response.data)
    } catch (error) {
      console.error("Error obteniendo detalles", error)
    }
  }

  return (
    <div className="mt-4">
      <div className="flex flex-col items-center justify-center mb-10">
        <label className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Escribe para explorar el multiverso</label>
        
        <div id="poda" className="relative flex items-center justify-center group scale-110">
          <div className="absolute z-[-1] overflow-hidden h-full w-full max-h-[70px] max-w-[654px] rounded-xl blur-[3px] 
                          before:absolute before:content-[''] before:z-[-2] before:w-[1200px] before:h-[1200px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-60
                          before:bg-[conic-gradient(#000,#402fb5_5%,#000_38%,#000_50%,#cf30aa_60%,#000_87%)] before:transition-all before:duration-2000
                          group-hover:before:rotate-[-120deg] group-focus-within:before:rotate-[420deg] group-focus-within:before:duration-[4000ms]">
          </div>
          <div className="absolute z-[-1] overflow-hidden h-full w-full max-h-[65px] max-w-[652px] rounded-xl blur-[3px] 
                          before:absolute before:content-[''] before:z-[-2] before:w-[1000px] before:h-[1000px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[82deg]
                          before:bg-[conic-gradient(rgba(0,0,0,0),#18116a,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%,#6e1b60,rgba(0,0,0,0)_60%)] before:transition-all before:duration-2000
                          group-hover:before:rotate-[-98deg] group-focus-within:before:rotate-[442deg] group-focus-within:before:duration-[4000ms]">
          </div>
          
          <div className="absolute z-[-1] overflow-hidden h-full w-full max-h-[63px] max-w-[647px] rounded-lg blur-[2px] 
                          before:absolute before:content-[''] before:z-[-2] before:w-[1000px] before:h-[1000px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[83deg]
                          before:bg-[conic-gradient(rgba(0,0,0,0)_0%,#a099d8,rgba(0,0,0,0)_8%,rgba(0,0,0,0)_50%,#dfa2da,rgba(0,0,0,0)_58%)] before:brightness-140
                          before:transition-all before:duration-2000 group-hover:before:rotate-[-97deg] group-focus-within:before:rotate-[443deg] group-focus-within:before:duration-[4000ms]">
          </div>

          <div className="absolute z-[-1] overflow-hidden h-full w-full max-h-[59px] max-w-[643px] rounded-xl blur-[0.5px] 
                          before:absolute before:content-[''] before:z-[-2] before:w-[1000px] before:h-[1000px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-70
                          before:bg-[conic-gradient(#1c191c,#402fb5_5%,#1c191c_14%,#1c191c_50%,#cf30aa_60%,#1c191c_64%)] before:brightness-130
                          before:transition-all before:duration-2000 group-hover:before:rotate-[-110deg] group-focus-within:before:rotate-[430deg] group-focus-within:before:duration-[4000ms]">
          </div>

          <div id="main" className="relative group">
            <input 
              placeholder="Escribe el nombre de una película..." 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-[#010201] border-none w-[641px] h-[56px] rounded-lg text-white px-[59px] text-lg focus:outline-none placeholder-gray-500" 
            />
            <div id="input-mask" className="pointer-events-none w-[200px] h-[20px] absolute bg-gradient-to-r from-transparent to-black top-[18px] left-[150px] group-focus-within:hidden"></div>
            <div id="pink-mask" className="pointer-events-none w-[30px] h-[20px] absolute bg-[#cf30aa] top-[10px] left-[5px] blur-2xl opacity-80 transition-all duration-2000 group-hover:opacity-0"></div>
            <div className="absolute h-[42px] w-[40px] overflow-hidden top-[7px] right-[7px] rounded-lg
                            before:absolute before:content-[''] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-90
                            before:bg-[conic-gradient(rgba(0,0,0,0),#3d3a4f,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_50%,#3d3a4f,rgba(0,0,0,0)_100%)]
                            before:brightness-135 before:animate-spin-slow">
            </div>
            <div id="filter-icon" className="absolute top-2 right-2 flex items-center justify-center z-[2] max-h-10 max-w-[38px] h-full w-full [isolation:isolate] overflow-hidden rounded-lg bg-gradient-to-b from-[#161329] via-black to-[#1d1b4b] border border-transparent">
              <svg preserveAspectRatio="none" height="20" width="20" viewBox="4.8 4.56 14.832 15.408" fill="none">
                <path d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z" stroke="#d6d6e6" strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <div id="search-icon" className="absolute left-5 top-[15px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" height="20" fill="none" className="feather feather-search">
                <circle stroke="url(#search)" r="8" cy="11" cx="11"></circle>
                <line stroke="url(#searchl)" y2="16.65" y1="22" x2="16.65" x1="22"></line>
                <defs>
                  <linearGradient gradientTransform="rotate(50)" id="search">
                    <stop stopColor="#f8e7f8" offset="0%"></stop>
                    <stop stopColor="#b6a9b7" offset="50%"></stop>
                  </linearGradient>
                  <linearGradient id="searchl">
                    <stop stopColor="#b6a9b7" offset="0%"></stop>
                    <stop stopColor="#837484" offset="50%"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {loading && (
        <div className="flex justify-center mb-10">
          <div className="w-10 h-10 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Galería Ordenada con Tamaños Dinámicos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {results.map((movie: any, index: number) => {
          const colors: Array<'blue' | 'purple' | 'green' | 'orange'> = ['blue', 'purple', 'green', 'orange'];
          
          return (
            <div 
              key={movie.imdbID}
              onClick={() => fetchDetails(movie.imdbID)}
              className="cursor-pointer group"
            >
              <GlowCard 
                className="w-full h-[400px]"
                glowColor={colors[index % colors.length] as any}
              >
                <div className="flex flex-col h-full p-4">
                  <div className="relative flex-1 rounded-2xl overflow-hidden mb-4 bg-gray-900">
                    <SafeImage 
                      src={movie.Poster} 
                      alt={movie.Title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="px-2">
                    <h3 className="text-white font-bold text-lg leading-tight truncate">{movie.Title}</h3>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-cyan-400 font-mono text-[10px] font-bold uppercase">{movie.Type}</span>
                      <span className="text-gray-500 text-xs font-bold">{movie.Year}</span>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          )
        })}
      </div>

      {/* Modal de Detalles Premium con Framer Motion */}
      <AnimatePresence>
        {selectedMovie && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/60 backdrop-blur-md"
          >
            {/* Fondo Cinemático (Poster Desenfocado) */}
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              className="absolute inset-0 z-0 overflow-hidden"
            >
              <SafeImage 
                src={selectedMovie.Poster} 
                className="w-full h-full object-cover blur-[100px] saturate-150"
                alt=""
              />
            </motion.div>

            <motion.div 
              initial={{ y: 100, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative z-10 w-full max-w-6xl shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]"
            >
              <GlowingShadow>
                <div className="relative w-full overflow-hidden">
                  <button 
                    onClick={() => setSelectedMovie(null)}
                    className="absolute top-8 right-8 z-50 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 p-3 rounded-full transition-all hover:rotate-90"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                  
                  <div className="flex flex-col lg:flex-row h-full">
                    {/* Poster con Brillo */}
                    <motion.div 
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="lg:w-[450px] p-8 lg:p-12"
                    >
                      <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
                        <SafeImage 
                          src={selectedMovie.Poster} 
                          alt={selectedMovie.Title}
                          className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      </div>
                    </motion.div>

                    {/* Información con Staggered Animation */}
                    <div className="flex-1 p-8 lg:p-12 lg:pl-0 flex flex-col justify-center">
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-black tracking-widest uppercase border border-cyan-500/20">
                            {selectedMovie.Type}
                          </span>
                          <span className="text-gray-500 font-bold">•</span>
                          <span className="text-yellow-500 font-black flex items-center gap-1">
                            {selectedMovie.imdbRating} <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                          </span>
                        </div>
                        
                        <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tighter">
                          {selectedMovie.Title}
                        </h2>

                        <p className="text-xl text-gray-400 leading-relaxed mb-10 font-medium italic border-l-4 border-cyan-500 pl-6 bg-cyan-500/5 py-4 rounded-r-2xl">
                          "{selectedMovie.Plot}"
                        </p>

                        <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                          {[
                            { label: 'Director', value: selectedMovie.Director },
                            { label: 'Reparto', value: selectedMovie.Actors },
                            { label: 'Género', value: selectedMovie.Genre },
                            { label: 'Duración', value: selectedMovie.Runtime }
                          ].map((item, i) => (
                            <motion.div 
                              key={item.label}
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.4 + (i * 0.1) }}
                            >
                              <p className="text-cyan-500 font-black uppercase text-[10px] tracking-[0.2em] mb-2">{item.label}</p>
                              <p className="text-gray-200 font-bold text-lg">{item.value}</p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </GlowingShadow>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
