'use client'

import Link from 'next/link'
import Sidebar from '../components/Sidebar'

// Guide categories based on Pearl Abyss official information
const guideCategories = [
  {
    id: 1,
    title: 'Class Guides',
    description: 'Detailed guides for each character class in Red Desert, including ability builds, playstyles, and combat strategies. [Source: Pearl Abyss]',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20class%20guides%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3',
    href: '/guides/classes'
  },
  {
    id: 2,
    title: 'Dungeon Strategies',
    description: 'Comprehensive guides for dungeon encounters, including boss mechanics, team composition, and loot rewards. [Source: Pearl Abyss]',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20dungeon%20strategies%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3',
    href: '/guides/dungeons'
  },
  {
    id: 3,
    title: 'Resource Maps',
    description: 'Interactive maps showing resource locations, gathering points, and valuable item spawns across the Red Desert. [Source: Pearl Abyss]',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20resource%20maps%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3',
    href: '/guides/resources'
  },
  {
    id: 4,
    title: 'Combat Guide',
    description: 'Master Red Desert\'s action combat system with detailed guides on combos, dodging, and skill progression. [Source: Pearl Abyss]',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20combat%20guide%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3',
    href: '/guides/combat'
  },
  {
    id: 5,
    title: 'Mount Guide',
    description: 'Complete guide to acquiring and upgrading mounts, including flying mounts for aerial exploration. [Source: Pearl Abyss]',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20mount%20guide%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3',
    href: '/guides/mounts'
  },
  {
    id: 6,
    title: 'Crafting Guide',
    description: 'Learn the ins and outs of Red Desert\'s crafting system, including recipes, materials, and crafting stations. [Source: Pearl Abyss]',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20crafting%20guide%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3',
    href: '/guides/crafting'
  }
]

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-earth-beige via-desert-sand to-earth-tan">
      {/* Sidebar Navigation */}
      <Sidebar />

      <main className="pt-24 md:pl-64">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-rust-dark mb-12 font-adventure">
              Guides & Strategies
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guideCategories.map((category) => (
                <Link 
                  key={category.id} 
                  href={category.href} 
                  className="bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg card-hover animate-fade-in border border-desert-sand/30"
                >
                  <div className="h-48 relative">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${category.image})` }}>
                      <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                        [Image Source: Pearl Abyss Official]
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-rust-dark mb-4 font-adventure group-hover:text-desert-gold transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-ash-medium mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="text-desert-gold font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Explore Guide <span>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}