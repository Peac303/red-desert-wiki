'use client'

import Link from 'next/link'
import Sidebar from '../../components/Sidebar'

export default function CharactersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-earth-beige via-desert-sand to-earth-tan">
      {/* Sidebar Navigation */}
      <Sidebar />

      <main className="pt-24 md:pl-64">
        {/* Breadcrumb */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-desert-sand/30 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/" className="text-rust-dark hover:text-desert-gold transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-ash-medium mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <Link href="/database" className="text-rust-dark hover:text-desert-gold transition-colors">
                      Database
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-ash-medium mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-ash-medium">
                      Characters
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Characters Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-rust-dark mb-12 font-adventure">
              Character Database
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Warrior */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-desert-sand/30">
                <div className="h-64 relative">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20Warrior%20character%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                    <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                      [Image Source: Pearl Abyss Official]
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-rust-dark mb-2 font-adventure">
                    Warrior
                  </h2>
                  <p className="text-ash-medium mb-4">
                    A melee combatant specializing in close-quarters combat with swords and shields. They excel at tanking damage and protecting allies. [Source: Pearl Abyss]
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Strength</span>
                      <span className="font-semibold text-rust-dark">90</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Intelligence</span>
                      <span className="font-semibold text-rust-dark">30</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Dexterity</span>
                      <span className="font-semibold text-rust-dark">50</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Vitality</span>
                      <span className="font-semibold text-rust-dark">80</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Luck</span>
                      <span className="font-semibold text-rust-dark">40</span>
                    </div>
                  </div>
                  <Link 
                    href="/database/characters/warrior" 
                    className="text-desert-gold font-medium hover:text-desert-amber transition-colors flex items-center gap-1"
                  >
                    View Details <span>→</span>
                  </Link>
                </div>
              </div>
              
              {/* Mage */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-desert-sand/30">
                <div className="h-64 relative">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20Mage%20character%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                    <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                      [Image Source: Pearl Abyss Official]
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-rust-dark mb-2 font-adventure">
                    Mage
                  </h2>
                  <p className="text-ash-medium mb-4">
                    A ranged spellcaster specializing in elemental magic. They deal high damage from a distance but have low defense. [Source: Pearl Abyss]
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Strength</span>
                      <span className="font-semibold text-rust-dark">30</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Intelligence</span>
                      <span className="font-semibold text-rust-dark">90</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Dexterity</span>
                      <span className="font-semibold text-rust-dark">60</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Vitality</span>
                      <span className="font-semibold text-rust-dark">40</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Luck</span>
                      <span className="font-semibold text-rust-dark">50</span>
                    </div>
                  </div>
                  <Link 
                    href="/database/characters/mage" 
                    className="text-desert-gold font-medium hover:text-desert-amber transition-colors flex items-center gap-1"
                  >
                    View Details <span>→</span>
                  </Link>
                </div>
              </div>
              
              {/* Archer */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-desert-sand/30">
                <div className="h-64 relative">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20Archer%20character%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                    <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                      [Image Source: Pearl Abyss Official]
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-rust-dark mb-2 font-adventure">
                    Archer
                  </h2>
                  <p className="text-ash-medium mb-4">
                    A ranged combatant specializing in bows and arrows. They excel at dealing consistent damage from a distance. [Source: Pearl Abyss]
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Strength</span>
                      <span className="font-semibold text-rust-dark">50</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Intelligence</span>
                      <span className="font-semibold text-rust-dark">40</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Dexterity</span>
                      <span className="font-semibold text-rust-dark">90</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Vitality</span>
                      <span className="font-semibold text-rust-dark">50</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Luck</span>
                      <span className="font-semibold text-rust-dark">60</span>
                    </div>
                  </div>
                  <Link 
                    href="/database/characters/archer" 
                    className="text-desert-gold font-medium hover:text-desert-amber transition-colors flex items-center gap-1"
                  >
                    View Details <span>→</span>
                  </Link>
                </div>
              </div>
              
              {/* Assassin */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-desert-sand/30">
                <div className="h-64 relative">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20Assassin%20character%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                    <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                      [Image Source: Pearl Abyss Official]
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-rust-dark mb-2 font-adventure">
                    Assassin
                  </h2>
                  <p className="text-ash-medium mb-4">
                    A melee combatant specializing in stealth and burst damage. They excel at quickly eliminating enemies. [Source: Pearl Abyss]
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Strength</span>
                      <span className="font-semibold text-rust-dark">70</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Intelligence</span>
                      <span className="font-semibold text-rust-dark">50</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Dexterity</span>
                      <span className="font-semibold text-rust-dark">90</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Vitality</span>
                      <span className="font-semibold text-rust-dark">40</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Luck</span>
                      <span className="font-semibold text-rust-dark">80</span>
                    </div>
                  </div>
                  <Link 
                    href="/database/characters/assassin" 
                    className="text-desert-gold font-medium hover:text-desert-amber transition-colors flex items-center gap-1"
                  >
                    View Details <span>→</span>
                  </Link>
                </div>
              </div>
              
              {/* Healer */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-desert-sand/30">
                <div className="h-64 relative">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20Healer%20character%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                    <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                      [Image Source: Pearl Abyss Official]
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-rust-dark mb-2 font-adventure">
                    Healer
                  </h2>
                  <p className="text-ash-medium mb-4">
                    A support class specializing in healing and buffing allies. They ensure the survival of their team. [Source: Pearl Abyss]
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Strength</span>
                      <span className="font-semibold text-rust-dark">40</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Intelligence</span>
                      <span className="font-semibold text-rust-dark">90</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Dexterity</span>
                      <span className="font-semibold text-rust-dark">60</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Vitality</span>
                      <span className="font-semibold text-rust-dark">70</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Luck</span>
                      <span className="font-semibold text-rust-dark">50</span>
                    </div>
                  </div>
                  <Link 
                    href="/database/characters/healer" 
                    className="text-desert-gold font-medium hover:text-desert-amber transition-colors flex items-center gap-1"
                  >
                    View Details <span>→</span>
                  </Link>
                </div>
              </div>
              
              {/* Desert Walker */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-desert-sand/30">
                <div className="h-64 relative">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20Desert%20Walker%20character%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                    <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                      [Image Source: Pearl Abyss Official]
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-rust-dark mb-2 font-adventure">
                    Desert Walker
                  </h2>
                  <p className="text-ash-medium mb-4">
                    A versatile class that harnesses the power of sand and wind. They can manipulate sand to create barriers and launch projectiles. [Source: Pearl Abyss]
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Strength</span>
                      <span className="font-semibold text-rust-dark">60</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Intelligence</span>
                      <span className="font-semibold text-rust-dark">70</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Dexterity</span>
                      <span className="font-semibold text-rust-dark">80</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Vitality</span>
                      <span className="font-semibold text-rust-dark">60</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Luck</span>
                      <span className="font-semibold text-rust-dark">70</span>
                    </div>
                  </div>
                  <Link 
                    href="/database/characters/desert-walker" 
                    className="text-desert-gold font-medium hover:text-desert-amber transition-colors flex items-center gap-1"
                  >
                    View Details <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-starry-indigo to-starry-blue text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 font-adventure text-shadow">
              Stay Updated
            </h2>
            <p className="mb-10 opacity-90 text-lg">
              Subscribe to our newsletter for the latest news, updates, and events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg text-ash-dark focus:outline-none focus:ring-2 focus:ring-desert-gold"
              />
              <button className="bg-desert-gold text-ash-dark px-8 py-3 rounded-lg font-medium hover:bg-desert-amber transition-all duration-300 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}