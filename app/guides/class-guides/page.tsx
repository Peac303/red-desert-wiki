'use client'

import Link from 'next/link'
import Sidebar from '../../components/Sidebar'

export default function ClassGuidesPage() {
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
                      Class Guides
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Class Guides Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-rust-dark mb-12 font-adventure">
              Class Guides
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Warrior */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-desert-sand/30">
                <div className="h-48 relative">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20Warrior%20class%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                    <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                      [Image Source: Pearl Abyss Official]
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-rust-dark mb-4 font-adventure">
                    Warrior
                  </h2>
                  <p className="text-ash-medium mb-6 leading-relaxed">
                    The Warrior is a melee combatant specializing in close-quarters combat with swords and shields. They excel at tanking damage and protecting allies. [Source: Pearl Abyss]
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Strength</span>
                      <div className="w-2/3 bg-earth-beige rounded-full h-2">
                        <div className="bg-desert-gold h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Intelligence</span>
                      <div className="w-2/3 bg-earth-beige rounded-full h-2">
                        <div className="bg-desert-gold h-2 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Dexterity</span>
                      <div className="w-2/3 bg-earth-beige rounded-full h-2">
                        <div className="bg-desert-gold h-2 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Vitality</span>
                      <div className="w-2/3 bg-earth-beige rounded-full h-2">
                        <div className="bg-desert-gold h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                  <Link 
                    href="/guides/class-guides/warrior" 
                    className="text-desert-gold font-medium hover:text-desert-amber transition-colors flex items-center gap-1"
                  >
                    View Guide <span>→</span>
                  </Link>
                </div>
              </div>
              
              {/* Mage */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-desert-sand/30">
                <div className="h-48 relative">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20Mage%20class%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                    <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                      [Image Source: Pearl Abyss Official]
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-rust-dark mb-4 font-adventure">
                    Mage
                  </h2>
                  <p className="text-ash-medium mb-6 leading-relaxed">
                    The Mage is a ranged spellcaster specializing in elemental magic. They deal high damage from a distance but have low defense. [Source: Pearl Abyss]
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Strength</span>
                      <div className="w-2/3 bg-earth-beige rounded-full h-2">
                        <div className="bg-desert-gold h-2 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Intelligence</span>
                      <div className="w-2/3 bg-earth-beige rounded-full h-2">
                        <div className="bg-desert-gold h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Dexterity</span>
                      <div className="w-2/3 bg-earth-beige rounded-full h-2">
                        <div className="bg-desert-gold h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Vitality</span>
                      <div className="w-2/3 bg-earth-beige rounded-full h-2">
                        <div className="bg-desert-gold h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                  </div>
                  <Link 
                    href="/guides/class-guides/mage" 
                    className="text-desert-gold font-medium hover:text-desert-amber transition-colors flex items-center gap-1"
                  >
                    View Guide <span>→</span>
                  </Link>
                </div>
              </div>
              
              {/* Archer */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-desert-sand/30">
                <div className="h-48 relative">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20Archer%20class%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                    <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                      [Image Source: Pearl Abyss Official]
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-rust-dark mb-4 font-adventure">
                    Archer
                  </h2>
                  <p className="text-ash-medium mb-6 leading-relaxed">
                    The Archer is a ranged combatant specializing in bows and arrows. They excel at dealing consistent damage from a distance. [Source: Pearl Abyss]
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Strength</span>
                      <div className="w-2/3 bg-earth-beige rounded-full h-2">
                        <div className="bg-desert-gold h-2 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Intelligence</span>
                      <div className="w-2/3 bg-earth-beige rounded-full h-2">
                        <div className="bg-desert-gold h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Dexterity</span>
                      <div className="w-2/3 bg-earth-beige rounded-full h-2">
                        <div className="bg-desert-gold h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Vitality</span>
                      <div className="w-2/3 bg-earth-beige rounded-full h-2">
                        <div className="bg-desert-gold h-2 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                  </div>
                  <Link 
                    href="/guides/class-guides/archer" 
                    className="text-desert-gold font-medium hover:text-desert-amber transition-colors flex items-center gap-1"
                  >
                    View Guide <span>→</span>
                  </Link>
                </div>
              </div>
              
              {/* Assassin */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-desert-sand/30">
                <div className="h-48 relative">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20Assassin%20class%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                    <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                      [Image Source: Pearl Abyss Official]
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-rust-dark mb-4 font-adventure">
                    Assassin
                  </h2>
                  <p className="text-ash-medium mb-6 leading-relaxed">
                    The Assassin is a melee combatant specializing in stealth and burst damage. They excel at quickly eliminating enemies. [Source: Pearl Abyss]
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Strength</span>
                      <div className="w-2/3 bg-earth-beige rounded-full h-2">
                        <div className="bg-desert-gold h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Intelligence</span>
                      <div className="w-2/3 bg-earth-beige rounded-full h-2">
                        <div className="bg-desert-gold h-2 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Dexterity</span>
                      <div className="w-2/3 bg-earth-beige rounded-full h-2">
                        <div className="bg-desert-gold h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Vitality</span>
                      <div className="w-2/3 bg-earth-beige rounded-full h-2">
                        <div className="bg-desert-gold h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                  </div>
                  <Link 
                    href="/guides/class-guides/assassin" 
                    className="text-desert-gold font-medium hover:text-desert-amber transition-colors flex items-center gap-1"
                  >
                    View Guide <span>→</span>
                  </Link>
                </div>
              </div>
              
              {/* Healer */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-desert-sand/30">
                <div className="h-48 relative">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20Healer%20class%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                    <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                      [Image Source: Pearl Abyss Official]
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-rust-dark mb-4 font-adventure">
                    Healer
                  </h2>
                  <p className="text-ash-medium mb-6 leading-relaxed">
                    The Healer is a support class specializing in healing and buffing allies. They ensure the survival of their team. [Source: Pearl Abyss]
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Strength</span>
                      <div className="w-2/3 bg-earth-beige rounded-full h-2">
                        <div className="bg-desert-gold h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Intelligence</span>
                      <div className="w-2/3 bg-earth-beige rounded-full h-2">
                        <div className="bg-desert-gold h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Dexterity</span>
                      <div className="w-2/3 bg-earth-beige rounded-full h-2">
                        <div className="bg-desert-gold h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Vitality</span>
                      <div className="w-2/3 bg-earth-beige rounded-full h-2">
                        <div className="bg-desert-gold h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                  </div>
                  <Link 
                    href="/guides/class-guides/healer" 
                    className="text-desert-gold font-medium hover:text-desert-amber transition-colors flex items-center gap-1"
                  >
                    View Guide <span>→</span>
                  </Link>
                </div>
              </div>
              
              {/* Desert Walker */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-desert-sand/30">
                <div className="h-48 relative">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20Desert%20Walker%20class%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                    <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                      [Image Source: Pearl Abyss Official]
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-rust-dark mb-4 font-adventure">
                    Desert Walker
                  </h2>
                  <p className="text-ash-medium mb-6 leading-relaxed">
                    The Desert Walker is a versatile class that harnesses the power of sand and wind. They can manipulate sand to create barriers and launch projectiles. [Source: Pearl Abyss]
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Strength</span>
                      <div className="w-2/3 bg-earth-beige rounded-full h-2">
                        <div className="bg-desert-gold h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Intelligence</span>
                      <div className="w-2/3 bg-earth-beige rounded-full h-2">
                        <div className="bg-desert-gold h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Dexterity</span>
                      <div className="w-2/3 bg-earth-beige rounded-full h-2">
                        <div className="bg-desert-gold h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Vitality</span>
                      <div className="w-2/3 bg-earth-beige rounded-full h-2">
                        <div className="bg-desert-gold h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </div>
                  <Link 
                    href="/guides/class-guides/desert-walker" 
                    className="text-desert-gold font-medium hover:text-desert-amber transition-colors flex items-center gap-1"
                  >
                    View Guide <span>→</span>
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