import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import Sidebar from '../../components/Sidebar'

// Mock news data
const newsData = [
  {
    id: 1,
    title: 'Red Desert Launch Date Announced',
    content: 'The wait is finally over! Red Desert will officially launch on June 15, 2026. Prepare for an epic adventure in the vast desert world.\n\nAfter years of development, we are excited to bring Red Desert to players worldwide. The game features a vast open world, dynamic weather systems, and a deep combat system that allows for endless strategic possibilities.\n\nPre-orders will begin on May 1, 2026, with exclusive bonuses for early adopters. Stay tuned for more information about the launch event and special in-game celebrations.\n\nThe development team has been working tirelessly to create a game that delivers on our vision of an immersive desert adventure. We can\'t wait for you to experience it!',
    date: '2026-04-01',
    category: 'Announcement',
    author: 'Red Desert Team',
    readTime: '3 min read'
  },
  {
    id: 2,
    title: 'New Class Revealed: Desert Walker',
    content: 'Introducing the Desert Walker, a new class that harnesses the power of sand and wind to defeat enemies. Learn more about their unique abilities.\n\nThe Desert Walker is a versatile class that excels in both ranged and melee combat. They can manipulate sand to create barriers, launch projectiles, and even teleport short distances.\n\nKey abilities include Sandstorm, which creates a swirling vortex of sand that damages enemies and obscures vision, and Desert Shroud, which turns the player temporarily invisible in sandy environments.\n\nThe Desert Walker will be available at launch, and players can start creating their characters now in the character creator.\n\nWe\'ve designed this class to offer a unique playstyle that complements the existing classes in Red Desert. Whether you prefer to engage from a distance or up close, the Desert Walker has options for every situation.',
    date: '2026-03-25',
    category: 'Game Update',
    author: 'Game Designer Team',
    readTime: '4 min read'
  },
  {
    id: 3,
    title: 'Closed Beta Test Results',
    content: 'Thank you to all participants in the closed beta test. We\'ve gathered valuable feedback and are making improvements before launch.\n\nThe closed beta test was a tremendous success, with over 100,000 players participating from around the world. We received thousands of pieces of feedback, which we are actively implementing.\n\nSome of the key improvements include better performance on lower-end systems, more varied enemy AI, and additional content in the early game areas.\n\nWe want to express our sincere gratitude to everyone who took part in the beta test. Your feedback has been invaluable in making Red Desert the best game it can be.\n\nWe\'re now in the final stages of development, and we\'re confident that the launch version will exceed your expectations. Stay tuned for more updates as we approach the release date!',
    date: '2026-03-10',
    category: 'Community',
    author: 'Community Manager',
    readTime: '2 min read'
  }
]

interface NewsDetailProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: NewsDetailProps): Promise<Metadata> {
  const news = newsData.find(item => item.id === parseInt(params.id))
  
  if (!news) {
    return {
      title: 'News Not Found - Red Desert Wiki',
      description: 'The news article you are looking for does not exist.'
    }
  }
  
  return {
    title: `${news.title} - Red Desert Wiki`,
    description: news.content.substring(0, 160) + '...',
    openGraph: {
      title: news.title,
      description: news.content.substring(0, 160) + '...',
      type: 'article',
      url: `https://reddesertwiki.com/news/${news.id}`,
      publishedTime: news.date
    }
  }
}

export default function NewsDetailPage({ params }: NewsDetailProps) {
  const news = newsData.find(item => item.id === parseInt(params.id))
  
  if (!news) {
    notFound()
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-earth-beige via-desert-sand to-earth-tan">
      {/* Sidebar Navigation */}
      <Sidebar />

      <main className="pt-24 md:pl-64">
        {/* Breadcrumb */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-desert-sand/30 py-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    <Link href="/news" className="text-rust-dark hover:text-desert-gold transition-colors">
                      News
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-ash-medium mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-ash-medium truncate max-w-xs">
                      {news.title}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* News Detail Content */}
        <section className="py-12 bg-white/90 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <div className="mb-8">
              <Link 
                href="/news" 
                className="inline-flex items-center gap-2 text-desert-gold font-medium hover:text-desert-amber transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to News
              </Link>
            </div>

            {/* News Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="bg-desert-gold/20 text-desert-gold px-4 py-1 rounded-full text-sm font-medium">
                  {news.category}
                </span>
                <span className="text-ash-medium text-sm">
                  {news.date}
                </span>
                <span className="text-ash-medium text-sm">
                  •
                </span>
                <span className="text-ash-medium text-sm">
                  {news.readTime}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-rust-dark mb-4 font-adventure">
                {news.title}
              </h1>
              <div className="flex items-center gap-2 text-ash-medium mb-6">
                <span className="text-lg">👤</span>
                <span>{news.author}</span>
              </div>
            </div>

            {/* News Content */}
            <div className="mb-12">
              {news.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-ash-dark leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Related News */}
            <div className="border-t border-desert-sand/30 pt-8">
              <h3 className="text-xl font-semibold text-rust-dark mb-6 font-adventure">
                Related News
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {newsData
                  .filter(item => item.id !== news.id)
                  .slice(0, 2)
                  .map((relatedNews) => (
                    <Link 
                      key={relatedNews.id} 
                      href={`/news/${relatedNews.id}`} 
                      className="group bg-earth-beige/50 rounded-lg p-6 hover:bg-desert-sand/30 transition-colors border border-desert-sand/30"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-desert-gold/20 text-desert-gold px-3 py-1 rounded-full text-xs font-medium">
                          {relatedNews.category}
                        </span>
                        <span className="text-ash-medium text-sm">
                          {relatedNews.date}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-rust-dark mb-2 group-hover:text-desert-gold transition-colors font-adventure">
                        {relatedNews.title}
                      </h4>
                      <p className="text-ash-medium line-clamp-2">
                        {relatedNews.content.substring(0, 120)}...
                      </p>
                    </Link>
                  ))}
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