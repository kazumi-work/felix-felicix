'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Portfolio {
  id: string
  title: string
  category: string
  year: number
  description: string
  images: string[]
  tags: string[]
}

interface PortfolioCategory {
  id: string
  name: string
  description: string
}

interface ContentData {
  portfolio: Portfolio[]
  portfolioCategories: PortfolioCategory[]
}

export default function PortfolioPage() {
  const [content, setContent] = useState<ContentData | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [filtered, setFiltered] = useState<Portfolio[]>([])

  useEffect(() => {
    fetch('/content.json')
      .then(res => res.json())
      .then((data: ContentData) => {
        setContent(data)
        setFiltered(data.portfolio)
      })
  }, [])

  useEffect(() => {
    if (!content) return
    
    if (activeCategory === 'all') {
      setFiltered(content.portfolio)
    } else {
      setFiltered(content.portfolio.filter(p => p.category === activeCategory))
    }
  }, [activeCategory, content])

  if (!content) return <div className="min-h-screen flex items-center justify-center">載入中...</div>

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1>作品集</h1>
          <p className="text-sand-600 max-w-2xl mx-auto">
            品牌設計、社群內容、平面物料——用設計說故事的每個案例。
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-primary text-white'
                : 'bg-sand-100 text-sand-700 hover:bg-sand-200'
            }`}
          >
            全部
          </button>
          {content.portfolioCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary text-white'
                  : 'bg-sand-100 text-sand-700 hover:bg-sand-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid-2">
          {filtered.map((work) => (
            <Link key={work.id} href={`/portfolio/${work.id}`}>
              <div className="portfolio-card cursor-pointer group">
                {work.images[0] && (
                  <div className="relative h-80 overflow-hidden bg-sand-100">
                    <img
                      src={work.images[0]}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                        查看詳情
                      </span>
                    </div>
                  </div>
                )}
                <div className="portfolio-card-content">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold flex-1">{work.title}</h3>
                    <span className="text-xs text-sand-500 font-medium ml-2 whitespace-nowrap">
                      {work.year}
                    </span>
                  </div>
                  <p className="text-sand-600 text-sm mb-4 line-clamp-2">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {work.tags.map((tag) => (
                      <span key={tag} className="tag text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-sand-600 text-lg">
              此分類尚無作品。請選擇其他類別。
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
