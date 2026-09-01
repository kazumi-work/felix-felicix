'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface Portfolio {
  id: string
  title: string
  category: string
  year: number
  description: string
  images: string[]
  tags: string[]
}

interface ContentData {
  portfolio: Portfolio[]
}

export default function PortfolioDetailPage() {
  const params = useParams()
  const id = params.id as string
  
  const [content, setContent] = useState<ContentData | null>(null)
  const [project, setProject] = useState<Portfolio | null>(null)

  useEffect(() => {
    fetch('/content.json')
      .then(res => res.json())
      .then((data: ContentData) => {
        setContent(data)
        const found = data.portfolio.find(p => p.id === id)
        setProject(found || null)
      })
  }, [id])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="text-center">
          <h2 className="mb-4">專案未找到</h2>
          <Link href="/portfolio" className="btn">
            返回作品集
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/portfolio" className="text-primary hover:underline text-sm font-medium">
            ← 返回作品集
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h1 className="flex-1">{project.title}</h1>
            <span className="text-sand-600 font-medium whitespace-nowrap mt-2">
              {project.year}
            </span>
          </div>
          <p className="text-lg text-sand-600 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Images */}
        <div className="space-y-6 mb-12">
          {project.images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden bg-sand-100 aspect-video">
              <img
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 md:p-12 text-center">
          <h3 className="mb-4">對這個案例感興趣？</h3>
          <p className="text-sand-600 mb-6">
            讓我們一起為你的品牌打造獨特的設計故事。
          </p>
          <a href="#contact" className="btn">
            開始合作
          </a>
        </div>

        {/* Related Works */}
        {content && content.portfolio.length > 1 && (
          <div className="mt-16 pt-12 border-t border-sand-200">
            <h3 className="mb-8">更多作品</h3>
            <div className="grid-2">
              {content.portfolio
                .filter(p => p.id !== id)
                .slice(0, 2)
                .map((work) => (
                  <Link key={work.id} href={`/portfolio/${work.id}`}>
                    <div className="portfolio-card cursor-pointer group">
                      {work.images[0] && (
                        <div className="relative h-60 overflow-hidden bg-sand-100">
                          <img
                            src={work.images[0]}
                            alt={work.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="portfolio-card-content">
                        <h4 className="mb-1">{work.title}</h4>
                        <p className="text-sand-600 text-sm">
                          {work.description.substring(0, 60)}...
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
