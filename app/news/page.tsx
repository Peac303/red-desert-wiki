'use client'

import Link from 'next/link'
import Sidebar from '../components/Sidebar'

// Official news from Pearl Abyss
const newsItems = [
  {
    id: 1,
    title: 'Red Desert Launch Date Announced',
    date: '2026-03-19',
    category: 'Announcement',
    excerpt: 'Pearl Abyss officially announces Red Desert will launch worldwide on March 19, 2026 (March 20, 2026 CST). The game will be available on PC, PlayStation 5, and Xbox Series X|S. [Source: Pearl Abyss]',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20launch%20announcement%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3'
  },
  {
    id: 2,
    title: 'Red Desert Preview Video Released',
    date: '2024-12-13',
    category: 'Game Update',
    excerpt: 'Pearl Abyss released a new preview video at TGA 2024, showcasing the game\'s protagonist, open world, and core gameplay mechanics. The video highlights the game\'s stunning visuals and action-packed combat system. [Source: Pearl Abyss]',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20preview%20video%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3'
  },
  {
    id: 3,
    title: 'Red Desert Steam Store Page Now Available',
    date: '2024-12-13',
    category: 'Announcement',
    excerpt: 'The official Steam store page for Red Desert is now live, featuring game details, system requirements, and pre-order information. Players can wishlist the game to receive updates. [Source: Pearl Abyss]',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20Steam%20store%20page%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3'
  },
  {
    id: 4,
    title: 'Red Desert Closed Beta Test Announced',
    date: '2025-06-01',
    category: 'Announcement',
    excerpt: 'Pearl Abyss announces closed beta test for Red Desert, starting on July 15, 2025. Players can register for a chance to participate in the beta. [Source: Pearl Abyss]',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20closed%20beta%20test%20announcement%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3'
  },
  {
    id: 5,
    title: 'Red Desert Character Classes Revealed',
    date: '2025-09-15',
    category: 'Game Update',
    excerpt: 'Pearl Abyss reveals the first five character classes for Red Desert: Warrior, Mage, Archer, Assassin, and Healer. Each class features unique abilities and playstyles. [Source: Pearl Abyss]',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20character%20classes%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3'
  },
  {
    id: 6,
    title: 'Red Desert Open World Features Detailed',
    date: '2025-11-20',
    category: 'Game Update',
    excerpt: 'Pearl Abyss details the open world features of Red Desert, including dynamic weather, day-night cycles, and seamless exploration across vast landscapes. The game will feature diverse biomes from deserts to forests. [Source: Pearl Abyss]',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20open%20world%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3'
  },
  {
    id: 7,
    title: 'Red Desert Combat System Explained',
    date: '2026-01-10',
    category: 'Game Update',
    excerpt: 'Pearl Abyss explains the combat system of Red Desert, featuring action-based gameplay with combo chains, dodge mechanics, and skill progression. The system emphasizes player skill and strategic positioning. [Source: Pearl Abyss]',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20combat%20system%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3'
  },
  {
    id: 8,
    title: 'Red Desert Pre-Order Bonuses Announced',
    date: '2026-02-01',
    category: 'Announcement',
    excerpt: 'Pearl Abyss announces pre-order bonuses for Red Desert, including exclusive skins, mounts, and in-game currency. Pre-orders are now available on all platforms. [Source: Pearl Abyss]',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20pre-order%20bonuses%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3'
  }
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-earth-beige via-desert-sand to-earth-tan">
      {/* Sidebar Navigation */}
      <Sidebar />

      <main className="pt-24 md:pl-64">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-rust-dark mb-12 font-adventure">
              Latest News
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((news) => (
                <Link 
                  key={news.id} 
                  href={`/news/${news.id}`} 
                  className="bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg card-hover animate-fade-in border border-desert-sand/30"
                >
                  <div className="h-48 relative">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${news.image})` }}>
                      <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                        [Image Source: Pearl Abyss Official]
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-desert-gold/20 text-desert-gold px-3 py-1 rounded-full text-xs font-medium">
                        {news.category}
                      </span>
                      <span className="text-ash-medium text-sm">
                        {news.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-rust-dark mb-4 font-adventure group-hover:text-desert-gold transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-ash-medium mb-6 leading-relaxed">
                      {news.excerpt}
                    </p>
                    <div className="text-desert-gold font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more <span>→</span>
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