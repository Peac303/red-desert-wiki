'use client'

import Link from 'next/link'
import Sidebar from '../../components/Sidebar'

export default function MediaPage() {
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
                    <Link href="/community" className="text-rust-dark hover:text-desert-gold transition-colors">
                      Community
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-ash-medium mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-ash-medium">
                      Media
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Media Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-rust-dark mb-12 font-adventure">
              Community Media
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Media Item 1 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-desert-sand/30">
                <div className="h-48 relative">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20screenshot%20of%20desert%20landscape%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                    <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                      [Image Source: Pearl Abyss Official]
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-rust-dark mb-3 font-adventure">
                    Desert Landscape
                  </h3>
                  <p className="text-ash-medium mb-4">
                    A stunning screenshot of the vast desert landscape in Red Desert. [Source: Pearl Abyss]
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-ash-medium text-sm">
                      Posted by: DesertExplorer
                    </span>
                    <span className="text-ash-medium text-sm">
                      2026-04-01
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Media Item 2 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-desert-sand/30">
                <div className="h-48 relative">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20screenshot%20of%20character%20combat%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                    <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                      [Image Source: Pearl Abyss Official]
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-rust-dark mb-3 font-adventure">
                    Combat Action
                  </h3>
                  <p className="text-ash-medium mb-4">
                    An action-packed screenshot of character combat in Red Desert. [Source: Pearl Abyss]
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-ash-medium text-sm">
                      Posted by: WarriorKing
                    </span>
                    <span className="text-ash-medium text-sm">
                      2026-03-28
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Media Item 3 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-desert-sand/30">
                <div className="h-48 relative">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20screenshot%20of%20mount%20riding%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                    <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                      [Image Source: Pearl Abyss Official]
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-rust-dark mb-3 font-adventure">
                    Mount Riding
                  </h3>
                  <p className="text-ash-medium mb-4">
                    A screenshot of riding a mount through the desert in Red Desert. [Source: Pearl Abyss]
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-ash-medium text-sm">
                      Posted by: MountMaster
                    </span>
                    <span className="text-ash-medium text-sm">
                      2026-03-25
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Media Item 4 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-desert-sand/30">
                <div className="h-48 relative">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20screenshot%20of%20ancient%20ruins%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                    <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                      [Image Source: Pearl Abyss Official]
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-rust-dark mb-3 font-adventure">
                    Ancient Ruins
                  </h3>
                  <p className="text-ash-medium mb-4">
                    A screenshot of ancient ruins in the desert in Red Desert. [Source: Pearl Abyss]
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-ash-medium text-sm">
                      Posted by: Explorer123
                    </span>
                    <span className="text-ash-medium text-sm">
                      2026-03-20
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Media Item 5 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-desert-sand/30">
                <div className="h-48 relative">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20screenshot%20of%20sunset%20in%20desert%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                    <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                      [Image Source: Pearl Abyss Official]
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-rust-dark mb-3 font-adventure">
                    Desert Sunset
                  </h3>
                  <p className="text-ash-medium mb-4">
                    A beautiful screenshot of sunset in the desert in Red Desert. [Source: Pearl Abyss]
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-ash-medium text-sm">
                      Posted by: Photographer
                    </span>
                    <span className="text-ash-medium text-sm">
                      2026-03-15
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Media Item 6 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-desert-sand/30">
                <div className="h-48 relative">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20screenshot%20of%20player%20base%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                    <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                      [Image Source: Pearl Abyss Official]
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-rust-dark mb-3 font-adventure">
                    Player Base
                  </h3>
                  <p className="text-ash-medium mb-4">
                    A screenshot of a player base in the desert in Red Desert. [Source: Pearl Abyss]
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-ash-medium text-sm">
                      Posted by: BuilderPro
                    </span>
                    <span className="text-ash-medium text-sm">
                      2026-03-10
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                <button className="bg-white/80 text-ash-dark px-4 py-2 rounded-lg font-medium hover:bg-desert-gold/20 transition-colors">
                  Previous
                </button>
                <button className="bg-desert-gold text-ash-dark px-4 py-2 rounded-lg font-medium">
                  1
                </button>
                <button className="bg-white/80 text-ash-dark px-4 py-2 rounded-lg font-medium hover:bg-desert-gold/20 transition-colors">
                  2
                </button>
                <button className="bg-white/80 text-ash-dark px-4 py-2 rounded-lg font-medium hover:bg-desert-gold/20 transition-colors">
                  3
                </button>
                <button className="bg-white/80 text-ash-dark px-4 py-2 rounded-lg font-medium hover:bg-desert-gold/20 transition-colors">
                  Next
                </button>
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