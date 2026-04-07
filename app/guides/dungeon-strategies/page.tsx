'use client'

import Link from 'next/link'
import Sidebar from '../../components/Sidebar'

export default function DungeonStrategiesPage() {
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
                    <Link href="/guides" className="text-rust-dark hover:text-desert-gold transition-colors">
                      Guides
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-ash-medium mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-ash-medium">
                      Dungeon Strategies
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Dungeon Strategies Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-rust-dark mb-12 font-adventure">
              Dungeon Strategies
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Dungeon List */}
              <div className="lg:col-span-2">
                {/* Desert Tomb */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-desert-sand/30 mb-8">
                  <div className="h-48 relative">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20Desert%20Tomb%20dungeon%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                      <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                        [Image Source: Pearl Abyss Official]
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold text-rust-dark font-adventure">
                        Desert Tomb
                      </h2>
                      <span className="bg-desert-gold/20 text-desert-gold px-3 py-1 rounded-full text-xs font-medium">
                        Level 30
                      </span>
                    </div>
                    <p className="text-ash-medium mb-6 leading-relaxed">
                      The Desert Tomb is an ancient burial site filled with traps and undead guardians. This dungeon requires careful navigation and teamwork to overcome its challenges. [Source: Pearl Abyss]
                    </p>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                          Recommended Party Composition
                        </h3>
                        <ul className="list-disc list-inside text-ash-medium space-y-1">
                          <li>1 Tank (Warrior)</li>
                          <li>1 Healer</li>
                          <li>2 DPS (Mage, Archer, or Assassin)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                          Key Mechanics
                        </h3>
                        <ul className="list-disc list-inside text-ash-medium space-y-1">
                          <li>Pressure plates that trigger traps</li>
                          <li>Undead enemies that resurrect if not properly defeated</li>
                          <li>Environmental hazards (sandstorms, collapsing ceilings)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                          Boss Strategy
                        </h3>
                        <p className="text-ash-medium">
                          The final boss, the Desert Pharaoh, uses sand-based attacks and can summon undead minions. Focus on destroying the summoning pillars first, then attack the boss when it's vulnerable. [Source: Pearl Abyss]
                        </p>
                      </div>
                    </div>
                    <Link 
                      href="/guides/dungeon-strategies/desert-tomb" 
                      className="text-desert-gold font-medium hover:text-desert-amber transition-colors flex items-center gap-1"
                    >
                      View Detailed Strategy <span>→</span>
                    </Link>
                  </div>
                </div>
                
                {/* Oasis Temple */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-desert-sand/30">
                  <div className="h-48 relative">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20Oasis%20Temple%20dungeon%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                      <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                        [Image Source: Pearl Abyss Official]
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold text-rust-dark font-adventure">
                        Oasis Temple
                      </h2>
                      <span className="bg-desert-gold/20 text-desert-gold px-3 py-1 rounded-full text-xs font-medium">
                        Level 40
                      </span>
                    </div>
                    <p className="text-ash-medium mb-6 leading-relaxed">
                      The Oasis Temple is a sacred site built around a magical oasis. This dungeon features water-based puzzles and elemental enemies. [Source: Pearl Abyss]
                    </p>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                          Recommended Party Composition
                        </h3>
                        <ul className="list-disc list-inside text-ash-medium space-y-1">
                          <li>1 Tank (Warrior or Desert Walker)</li>
                          <li>1 Healer</li>
                          <li>1 DPS (Mage for elemental damage)</li>
                          <li>1 Utility (Archer for ranged attacks)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                          Key Mechanics
                        </h3>
                        <ul className="list-disc list-inside text-ash-medium space-y-1">
                          <li>Water puzzles that require coordination</li>
                          <li>Elemental enemies with resistance to certain damage types</li>
                          <li>Moving platforms and environmental hazards</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                          Boss Strategy
                        </h3>
                        <p className="text-ash-medium">
                          The final boss, the Water Elemental, uses water-based attacks and can create water clones. Use fire-based attacks to counter its healing abilities, and focus on destroying the clones first. [Source: Pearl Abyss]
                        </p>
                      </div>
                    </div>
                    <Link 
                      href="/guides/dungeon-strategies/oasis-temple" 
                      className="text-desert-gold font-medium hover:text-desert-amber transition-colors flex items-center gap-1"
                    >
                      View Detailed Strategy <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Dungeon Tips */}
              <div className="lg:col-span-1">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30 mb-8">
                  <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                    Dungeon Tips
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-desert-gold pl-4 py-2">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Preparation
                      </h3>
                      <p className="text-ash-medium">
                        Always bring enough potions and healing items before entering a dungeon. Check your equipment durability and repair if needed. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="border-l-4 border-desert-gold pl-4 py-2">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Teamwork
                      </h3>
                      <p className="text-ash-medium">
                        Communication is key in dungeons. Assign roles and coordinate your actions to overcome challenges efficiently. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="border-l-4 border-desert-gold pl-4 py-2">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Mechanics
                      </h3>
                      <p className="text-ash-medium">
                        Learn the mechanics of each dungeon and boss fight. Understanding patterns and timing can make difficult encounters much easier. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="border-l-4 border-desert-gold pl-4 py-2">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Loot
                      </h3>
                      <p className="text-ash-medium">
                        Dungeons drop valuable loot and materials. Focus on objectives to maximize your rewards. [Source: Pearl Abyss]
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Dungeon Difficulty */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30">
                  <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                    Dungeon Difficulty
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-ash-medium">Desert Tomb</span>
                      <div className="flex">
                        <span className="text-desert-gold">★★★</span>
                        <span className="text-ash-light">★★</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-ash-medium">Oasis Temple</span>
                      <div className="flex">
                        <span className="text-desert-gold">★★★★</span>
                        <span className="text-ash-light">★</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-ash-medium">Sandstorm Citadel</span>
                      <div className="flex">
                        <span className="text-desert-gold">★★★★★</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-ash-medium">Ancient Ruins</span>
                      <div className="flex">
                        <span className="text-desert-gold">★★★</span>
                        <span className="text-ash-light">★★</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-ash-medium">Dragon's Lair</span>
                      <div className="flex">
                        <span className="text-desert-gold">★★★★★</span>
                      </div>
                    </div>
                  </div>
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