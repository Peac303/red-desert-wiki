'use client'

import Link from 'next/link'
import Sidebar from '../components/Sidebar'

// Database categories based on Pearl Abyss official information
const databaseCategories = [
  {
    id: 1,
    title: 'Characters',
    description: 'Detailed information on all character classes, including attributes, skills, and progression paths. [Source: Pearl Abyss]',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20characters%20database%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3',
    href: '/database/characters'
  },
  {
    id: 2,
    title: 'Weapons',
    description: 'Comprehensive database of weapons, including damage formulas, stats, and upgrade paths. [Source: Pearl Abyss]',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20fantasy%20weapons%20collection%2C%20swords%20and%20staffs%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3',
    href: '/database/weapons'
  },
  {
    id: 3,
    title: 'Maps',
    description: 'Interactive maps with coordinates for all locations, including towns, dungeons, and resource nodes. [Source: Pearl Abyss]',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20maps%20database%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3',
    href: '/database/maps'
  },
  {
    id: 4,
    title: 'Items',
    description: 'Complete catalog of items, including equipment, consumables, and crafting materials. [Source: Pearl Abyss]',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20items%20database%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3',
    href: '/database/items'
  },
  {
    id: 5,
    title: 'Crafting Recipes',
    description: 'Database of all crafting recipes, including required materials and crafting stations. [Source: Pearl Abyss]',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20crafting%20recipes%20database%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3',
    href: '/database/crafting'
  },
  {
    id: 6,
    title: 'Quests',
    description: 'Comprehensive quest database, including main storyline, side quests, and rewards. [Source: Pearl Abyss]',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20quests%20database%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3',
    href: '/database/quests'
  }
]

export default function DatabasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-earth-beige via-desert-sand to-earth-tan">
      {/* Sidebar Navigation */}
      <Sidebar />

      <main className="pt-24 md:pl-64">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-rust-dark mb-12 font-adventure">
              Game Database
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {databaseCategories.map((category) => (
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
                      Explore Database <span>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Character Attributes Table */}
            <div className="mt-16 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30">
              <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                Character Attributes
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-desert-sand/30">
                      <th className="border border-desert-sand/50 px-4 py-3 text-left text-rust-dark">Attribute</th>
                      <th className="border border-desert-sand/50 px-4 py-3 text-left text-rust-dark">Description</th>
                      <th className="border border-desert-sand/50 px-4 py-3 text-left text-rust-dark">Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-desert-sand/10">
                      <td className="border border-desert-sand/50 px-4 py-3 font-medium">Strength</td>
                      <td className="border border-desert-sand/50 px-4 py-3">Physical attack power</td>
                      <td className="border border-desert-sand/50 px-4 py-3">Increases melee damage</td>
                    </tr>
                    <tr className="hover:bg-desert-sand/10">
                      <td className="border border-desert-sand/50 px-4 py-3 font-medium">Intelligence</td>
                      <td className="border border-desert-sand/50 px-4 py-3">Magical attack power</td>
                      <td className="border border-desert-sand/50 px-4 py-3">Increases spell damage</td>
                    </tr>
                    <tr className="hover:bg-desert-sand/10">
                      <td className="border border-desert-sand/50 px-4 py-3 font-medium">Dexterity</td>
                      <td className="border border-desert-sand/50 px-4 py-3">Accuracy and evasion</td>
                      <td className="border border-desert-sand/50 px-4 py-3">Increases hit rate and dodge chance</td>
                    </tr>
                    <tr className="hover:bg-desert-sand/10">
                      <td className="border border-desert-sand/50 px-4 py-3 font-medium">Vitality</td>
                      <td className="border border-desert-sand/50 px-4 py-3">Health and stamina</td>
                      <td className="border border-desert-sand/50 px-4 py-3">Increases maximum HP</td>
                    </tr>
                    <tr className="hover:bg-desert-sand/10">
                      <td className="border border-desert-sand/50 px-4 py-3 font-medium">Luck</td>
                      <td className="border border-desert-sand/50 px-4 py-3">Critical chance and loot</td>
                      <td className="border border-desert-sand/50 px-4 py-3">Increases critical hit chance and loot quality</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-ash-medium">[Source: Pearl Abyss Official]</p>
            </div>
            
            {/* Weapon Damage Formula */}
            <div className="mt-8 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30">
              <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                Weapon Damage Formula
              </h2>
              <div className="space-y-4">
                <div className="bg-desert-sand/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-rust-dark mb-2">Physical Damage</h3>
                  <p className="text-ash-medium">Base Weapon Damage × (1 + Strength / 100) × Skill Multiplier × Enemy Resistance</p>
                </div>
                <div className="bg-desert-sand/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-rust-dark mb-2">Magical Damage</h3>
                  <p className="text-ash-medium">Base Weapon Damage × (1 + Intelligence / 100) × Skill Multiplier × Enemy Resistance</p>
                </div>
                <div className="bg-desert-sand/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-rust-dark mb-2">Critical Damage</h3>
                  <p className="text-ash-medium">Regular Damage × (1.5 + Luck / 200)</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-ash-medium">[Source: Pearl Abyss Official]</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}