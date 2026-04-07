'use client'

import Link from 'next/link'
import Sidebar from '../../../components/Sidebar'
import { useParams } from 'next/navigation'

// Mock media data
const mediaData = [
  { id: '1', title: 'Red Desert Cinematic Trailer', type: 'Video', author: 'Official', views: '1.2M', description: 'The official cinematic trailer for Red Desert, showcasing the game\'s stunning visuals and epic story.' },
  { id: '2', title: 'Mount Collection Showcase', type: 'Image', author: 'Player123', views: '45K', description: 'A collection of rare mounts from Red Desert, including desert horses, giant lizards, and flying creatures.' },
  { id: '3', title: 'PVP Tournament Highlights', type: 'Video', author: 'RedDesertTV', views: '87K', description: 'Highlights from the recent PVP tournament, featuring intense battles and skilled players.' },
  { id: '4', title: 'Desert Oasis Screenshot', type: 'Image', author: 'ExplorerX', views: '23K', description: 'A beautiful screenshot of a hidden desert oasis found deep in the Red Desert.' }
]

export default function MediaDetailPage() {
  const params = useParams()
  const mediaId = params?.id as string
  const media = mediaId ? mediaData.find(item => item.id === mediaId) : undefined

  if (!media) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-earth-beige via-desert-sand to-earth-tan">
        <Sidebar />
        <main className="pt-24 md:pl-64">
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-bold text-rust-dark font-adventure mb-8">
                Media Not Found
              </h1>
              <p className="text-ash-dark text-lg">
                The requested media item could not be found.
              </p>
              <Link 
                href="/community" 
                className="mt-6 inline-block bg-desert-gold text-ash-dark px-6 py-3 rounded-lg font-medium hover:bg-desert-amber transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Back to Community
              </Link>
            </div>
          </section>
        </main>
      </div>
    )
  }

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
                <li>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-ash-medium mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <Link href="/community/media" className="text-rust-dark hover:text-desert-gold transition-colors">
                      Media
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-ash-medium mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-ash-medium">
                      {media.title}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Media Content */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-desert-sand/30 overflow-hidden">
              {/* Media Preview */}
              <div className="bg-desert-gold/10 p-12 flex items-center justify-center">
                <span className="text-10xl">{media.type === 'Video' ? '🎬' : '📷'}</span>
              </div>
              
              {/* Media Details */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-rust-dark font-adventure mb-2">
                      {media.title}
                    </h1>
                    <div className="flex items-center gap-4 text-ash-medium">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${media.type === 'Video' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                        {media.type}
                      </span>
                      <span>{media.views} views</span>
                    </div>
                  </div>
                  <button className="bg-desert-gold text-ash-dark px-6 py-2 rounded-lg font-medium hover:bg-desert-amber transition-all duration-300 shadow-md hover:shadow-lg">
                    Share
                  </button>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-rust-dark mb-4 font-adventure">
                    Description
                  </h2>
                  <p className="text-ash-dark">
                    {media.description}
                  </p>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-rust-dark mb-4 font-adventure">
                    Author
                  </h2>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-desert-gold/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👤</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-rust-dark">{media.author}</h3>
                      <p className="text-ash-medium text-sm">Content Creator</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold text-rust-dark mb-4 font-adventure">
                    Comments
                  </h2>
                  <div className="space-y-4">
                    <div className="border-b border-desert-sand/30 pb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-desert-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">👤</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-rust-dark">DesertExplorer</h4>
                            <span className="text-ash-medium text-sm">2 hours ago</span>
                          </div>
                          <p className="text-ash-dark">
                            This is amazing! I can't wait to explore the Red Desert world.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-desert-sand/30 pb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-desert-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">👤</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-rust-dark">MountCollector</h4>
                            <span className="text-ash-medium text-sm">4 hours ago</span>
                          </div>
                          <p className="text-ash-dark">
                            The mount designs are incredible! I hope there are even more rare ones to discover.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <textarea 
                      placeholder="Add a comment..." 
                      className="w-full p-4 border border-desert-sand/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-desert-gold focus:border-transparent"
                      rows={3}
                    ></textarea>
                    <div className="mt-4 flex justify-end">
                      <button className="bg-desert-gold text-ash-dark px-6 py-2 rounded-lg font-medium hover:bg-desert-amber transition-all duration-300 shadow-md hover:shadow-lg">
                        Post Comment
                      </button>
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