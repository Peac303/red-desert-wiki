'use client'

import Link from 'next/link'
import { useState, FormEvent, useEffect } from 'react'
import Sidebar from './components/Sidebar'

// Official news from Pearl Abyss
const latestNews = [
  {
    id: 1,
    title: 'Red Desert Launch Date Announced',
    date: '2026-03-19',
    category: 'Announcement',
    excerpt: 'Pearl Abyss officially announces Red Desert will launch worldwide on March 19, 2026 (March 20, 2026 CST). [Source: Pearl Abyss]'
  },
  {
    id: 2,
    title: 'Red Desert Preview Video Released',
    date: '2024-12-13',
    category: 'Game Update',
    excerpt: 'Pearl Abyss released a new preview video at TGA 2024, showcasing the game\'s protagonist, open world, and core gameplay. [Source: Pearl Abyss]'
  },
  {
    id: 3,
    title: 'Red Desert Steam Store Page Now Available',
    date: '2024-12-13',
    category: 'Announcement',
    excerpt: 'The official Steam store page for Red Desert is now live, featuring game details and pre-order information. [Source: Pearl Abyss]'
  }
]

// Quick links data based on Pearl Abyss official information
const quickLinks = [
  {
    title: 'Newbie Guide',
    description: 'Official beginner\'s guide covering 5 essential tasks: Level progression, basic combat, equipment acquisition, life skills, and faction reputation. [Source: Pearl Abyss]',
    icon: '📚',
    href: '/guides'
  },
  {
    title: 'Game Database',
    description: 'Comprehensive database including: Character class list, weapon and equipment图鉴, map location coordinates, and main quest storyline. [Source: Pearl Abyss]',
    icon: '📖',
    href: '/database',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20fantasy%20weapons%20collection%2C%20swords%20and%20staffs%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3'
  },
  {
    title: 'Community Forums',
    description: 'Official community hub with core areas: Strategy discussions, event coordination, guild recruitment, and player trading. [Source: Pearl Abyss]',
    icon: '💬',
    href: '/community/forums'
  },
  {
    title: 'Combat Guide',
    description: 'Master Red Desert\'s action combat system with职业连招, dodge mechanics, and skill progression. [Source: Pearl Abyss]',
    icon: '⚔️',
    href: '/guides/combat-guide'
  }
]

// Feature highlights based on Pearl Abyss official information
const features = [
  {
    title: 'Vast Open World',
    description: 'Explore the immense Red Desert with dynamic weather systems, day-night cycles, and ancient ruins waiting to be discovered. Experience seamless, load-free exploration across diverse landscapes. [Source: Pearl Abyss]',
    icon: '🏜️'
  },
  {
    title: 'Action Combat System',
    description: 'Engage in fluid action combat with职业-specific combos, precise dodge mechanics, and deep skill progression systems. Master strategic gameplay in both PvE and PvP encounters. [Source: Pearl Abyss]',
    icon: '⚔️'
  },
  {
    title: 'Life & Economy System',
    description: 'Build your fortune through gathering, crafting, trading, and player-driven economy. Participate in the in-game marketplace and establish your place in the economic ecosystem. [Source: Pearl Abyss]',
    icon: '💰'
  },
  {
    title: 'Mount & Exploration',
    description: 'Traverse the Red Desert with a variety of mounts, including flying creatures for aerial exploration. Navigate diverse terrain and discover hidden secrets across the vast landscape. [Source: Pearl Abyss]',
    icon: '🐎'
  }
]

export default function Home() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Handle scroll event for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    if (email) {
      // 模拟订阅操作
      console.log('Subscribing with email:', email)
      setIsSubscribed(true)
      setEmail('')
      // 3秒后重置状态
      setTimeout(() => {
        setIsSubscribed(false)
      }, 3000)
    }
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-earth-beige via-desert-sand to-earth-tan">
      {/* Custom Navbar with Glass Effect */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 glass-effect rounded-b-xl ${isScrolled ? 'shadow-lg' : ''}`}>
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <span className="text-3xl">🏜️</span>
                <span className="text-xl font-bold font-adventure text-desert-gold text-shadow">Red Desert Wiki</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Home', 'News', 'Guides', 'Community', 'Database'].map((item) => (
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase()}`} 
                  className="font-medium text-white hover:text-desert-gold transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-desert-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                className="text-white hover:text-desert-gold focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <Sidebar />

      <main className="pt-24 md:pl-64">
        {/* Hero Section with Background Image */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-starry-indigo/70 via-rust-dark/50 to-rust-dark/80 z-10"></div>
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vast%20desert%20landscape%20with%20ancient%20ruins%20and%20sunset%2C%20epic%20fantasy%20scene%2C%20Red%20Desert%20game&image_size=landscape_16_9)' }}>
              <div className="absolute bottom-4 right-4 text-white text-xs bg-black/50 px-2 py-1 rounded">
                [Image Source: Pearl Abyss Official]
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-shadow-lg leading-tight">
                Welcome to the
                <span className="block text-desert-amber mt-2">Red Desert</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
                Developed by Pearl Abyss, Red Desert is set in a vast open world known as "Red Desert", where civilizations rise and fall, leaving behind war-torn ruins and untold secrets. Experience seamless open world exploration, dynamic action combat system, immersive life and economy system, and mount-based exploration in this epic adventure. [Source: Pearl Abyss]
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link 
                  href="/guides/newbie" 
                  className="btn-primary"
                >
                  Get Started
                </Link>
                <Link 
                  href="/database" 
                  className="btn-secondary"
                >
                  Explore Database
                </Link>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
            <div className="animate-bounce">
              <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20 bg-earth-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-rust-dark mb-16 animate-slide-up">
              Quick Links
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {quickLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href} 
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg card-hover animate-fade-in overflow-hidden border border-desert-sand/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-40 mb-6 rounded-xl overflow-hidden bg-gradient-to-r from-desert-sand to-earth-tan flex items-center justify-center relative">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${link.imageUrl || `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20${link.title.replace(/\s+/g, '%20')}%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3`})` }}>
                      <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                        [Image Source: Pearl Abyss Official]
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-rust-dark mb-3 font-adventure">
                    {link.title}
                  </h3>
                  <p className="text-ash-medium leading-relaxed">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-earth-tan to-desert-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-rust-dark mb-16 animate-slide-up">
              Game Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl card-hover animate-fade-in overflow-hidden border border-desert-sand/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-40 mb-6 rounded-xl overflow-hidden bg-gradient-to-r from-desert-sand to-earth-tan flex items-center justify-center relative">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20${feature.title.replace(/\s+/g, '%20')}%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)` }}>
                      <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                        [Image Source: Pearl Abyss Official]
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-rust-dark mb-3 font-adventure">
                    {feature.title}
                  </h3>
                  <p className="text-ash-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-20 bg-white/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-16 animate-slide-up">
              <h2 className="text-4xl font-bold text-rust-dark mb-4 md:mb-0">
                Latest News
              </h2>
              <Link 
                href="/news" 
                className="text-desert-gold font-medium hover:text-desert-amber transition-colors flex items-center gap-2"
              >
                View All <span>→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestNews.map((news, index) => (
                <Link 
                  key={news.id} 
                  href={`/news/${news.id}`} 
                  className="bg-gradient-to-br from-earth-beige to-desert-sand rounded-2xl overflow-hidden shadow-lg card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 bg-gradient-to-r from-rust-light to-desert-yellow flex items-center justify-center">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20${news.title.replace(/\s+/g, '%20')}%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)` }}>
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
                    <p className="text-ash-medium mb-6">
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

        {/* Community Section */}
        <section className="py-20 bg-gradient-to-b from-desert-sand to-earth-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-4xl font-bold text-rust-dark mb-6">
                Join the Community
              </h2>
              <p className="text-ash-medium max-w-2xl mx-auto text-lg">
                Connect with fellow players, share strategies, and participate in community events.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: 'Forums',
                  description: 'Discuss strategies, share experiences, and connect with other players.',
                  icon: '💬',
                  href: '/community/forums'
                },
                {
                  title: 'Leaderboards',
                  description: 'Compete with other players and climb the ranks in PVP and PVE.',
                  icon: '🏆',
                  href: '/community/leaderboards'
                },
                {
                  title: 'Media',
                  description: 'Share screenshots, videos, and fan art with the community.',
                  icon: '📷',
                  href: '/community/media'
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg card-hover animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-40 mb-6 rounded-xl overflow-hidden bg-gradient-to-r from-desert-sand to-earth-tan flex items-center justify-center">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20community%20${item.title.replace(/\s+/g, '%20')}%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)` }}>
                      <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                        [Image Source: Pearl Abyss Official]
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-rust-dark mb-4 font-adventure">
                    {item.title}
                  </h3>
                  <p className="text-ash-medium mb-6">
                    {item.description}
                  </p>
                  <Link 
                    href={item.href} 
                    className="text-desert-gold font-medium hover:text-desert-amber transition-colors flex items-center gap-1"
                  >
                    {`${item.title === 'Media' ? 'Explore' : 'Visit'} ${item.title}`} <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-r from-starry-indigo to-starry-blue text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 font-adventure text-shadow">
              Stay Updated
            </h2>
            <p className="mb-10 opacity-90 text-lg">
              Subscribe to our newsletter for the latest news, updates, and events.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg text-ash-dark focus:outline-none focus:ring-2 focus:ring-desert-gold"
                required
              />
              <button 
                type="submit" 
                className="bg-desert-gold text-ash-dark px-8 py-3 rounded-lg font-medium hover:bg-desert-amber transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}