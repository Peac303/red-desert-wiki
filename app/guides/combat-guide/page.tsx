'use client'

import Link from 'next/link'
import Sidebar from '../../components/Sidebar'

export default function CombatGuidePage() {
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
                      Combat Guide
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Combat Guide Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-rust-dark mb-12 font-adventure">
              Combat Guide
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30 mb-8">
                  <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                    Basic Combat Mechanics
                  </h2>
                  
                  <div className="relative mb-6">
                    <div className="w-full h-64 bg-cover bg-center rounded-xl" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20combat%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_16_9)' }}>
                      <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                        [Image Source: Pearl Abyss Official]
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Attack Types
                      </h3>
                      <p className="text-ash-medium">
                        Red Desert features three main attack types: light attacks, heavy attacks, and special attacks. Each class has unique combinations and animations. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Dodge and Block
                      </h3>
                      <p className="text-ash-medium">
                        Mastering dodge and block mechanics is essential for survival. Timing is crucial - perfect dodges can create openings for counterattacks, while blocks reduce damage taken. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Combos
                      </h3>
                      <p className="text-ash-medium">
                        String together light and heavy attacks to create powerful combos. Each class has unique combo chains that can be unlocked as you progress. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Skills
                      </h3>
                      <p className="text-ash-medium">
                        Skills are powerful abilities that can turn the tide of battle. Each class has a unique set of skills that can be customized and upgraded. [Source: Pearl Abyss]
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30">
                  <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                    Advanced Combat Strategies
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-desert-gold pl-4 py-2">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Positioning
                      </h3>
                      <p className="text-ash-medium">
                        Proper positioning is key to success in combat. Use the environment to your advantage, and always be aware of your surroundings. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="border-l-4 border-desert-gold pl-4 py-2">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Resource Management
                      </h3>
                      <p className="text-ash-medium">
                        Manage your stamina and mana effectively. Don't waste resources on unnecessary attacks, and always have enough for critical skills. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="border-l-4 border-desert-gold pl-4 py-2">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Enemy Patterns
                      </h3>
                      <p className="text-ash-medium">
                        Learn enemy attack patterns and exploit their weaknesses. Each enemy type has unique behaviors that can be countered with the right strategy. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="border-l-4 border-desert-gold pl-4 py-2">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Team Coordination
                      </h3>
                      <p className="text-ash-medium">
                        In group content, coordination is essential. Assign roles, communicate effectively, and support your teammates to achieve victory. [Source: Pearl Abyss]
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Combat Tips */}
              <div className="lg:col-span-1">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30 mb-8">
                  <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                    Combat Tips
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="bg-earth-beige/50 rounded-xl p-4 border border-desert-sand/30">
                      <h3 className="font-semibold text-rust-dark mb-2 font-adventure">
                        Practice Makes Perfect
                      </h3>
                      <p className="text-ash-medium text-sm">
                        Spend time in training areas to master your class's abilities and combos. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="bg-earth-beige/50 rounded-xl p-4 border border-desert-sand/30">
                      <h3 className="font-semibold text-rust-dark mb-2 font-adventure">
                        Gear Matters
                      </h3>
                      <p className="text-ash-medium text-sm">
                        Equip the best gear you can find and upgrade it regularly to maximize your combat effectiveness. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="bg-earth-beige/50 rounded-xl p-4 border border-desert-sand/30">
                      <h3 className="font-semibold text-rust-dark mb-2 font-adventure">
                        Know Your Class
                      </h3>
                      <p className="text-ash-medium text-sm">
                        Understand your class's strengths and weaknesses to play to your advantages. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="bg-earth-beige/50 rounded-xl p-4 border border-desert-sand/30">
                      <h3 className="font-semibold text-rust-dark mb-2 font-adventure">
                        Adapt to Situations
                      </h3>
                      <p className="text-ash-medium text-sm">
                        Be flexible in your approach. Different enemies and situations require different strategies. [Source: Pearl Abyss]
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* PvP Tips */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30">
                  <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                    PvP Tips
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-rust-light pl-4 py-2">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Map Awareness
                      </h3>
                      <p className="text-ash-medium">
                        Always be aware of your surroundings and use the terrain to your advantage. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="border-l-4 border-rust-light pl-4 py-2">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Team Composition
                      </h3>
                      <p className="text-ash-medium">
                        Build a balanced team with tanks, healers, and damage dealers for the best results. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="border-l-4 border-rust-light pl-4 py-2">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Communication
                      </h3>
                      <p className="text-ash-medium">
                        Communicate with your team to coordinate attacks and strategies. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="border-l-4 border-rust-light pl-4 py-2">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Practice
                      </h3>
                      <p className="text-ash-medium">
                        Regularly participate in PvP to improve your skills and learn from your mistakes. [Source: Pearl Abyss]
                      </p>
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