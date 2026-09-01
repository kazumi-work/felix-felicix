'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Portfolio {
  id: string
  title: string
  category: string
  year: number
  description: string
  images: string[]
  tags: string[]
  featured: boolean
}

interface ContentData {
  site: {
    name: string
    tagline: string
    description: string
    about: string
  }
  portfolio: Portfolio[]
}

export default function Home() {
  const [content, setContent] = useState<ContentData | null>(null)
  const [featured, setFeatured] = useState<Portfolio[]>([])

  useEffect(() => {
    fetch('/content.json')
      .then(res => res.json())
      .then((data: ContentData) => {
        setContent(data)
        setFeatured(data.portfolio.filter(p => p.featured))
      })
  }, [])

  if (!content) return <div className="min-h-screen flex items-center justify-center">載入中...</div>

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-16">
        <div className="container">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase">
                創意設計師
              </span>
            </div>
            <h1 className="mb-6">{content.site.name}</h1>
            <p className="text-sand-600 font-serif text-2xl italic mb-8">
              "{content.site.tagline}"
            </p>
            <p className="text-lg text-sand-700 max-w-2xl leading-relaxed mb-8">
              {content.site.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/portfolio" className="btn">
                查看作品集
              </Link>
              <Link href="/services" className="btn btn-outline">
                瞭解服務
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      {featured.length > 0 && (
        <section className="bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2>精選作品</h2>
              <p className="text-sand-600 max-w-xl mx-auto">
                從品牌識別到社群策劃，每一個專案都是故事與美學的結合。
              </p>
            </div>

            <div className="grid-2 mb-12">
              {featured.map((work) => (
                <Link key={work.id} href={`/portfolio/${work.id}`}>
                  <div className="portfolio-card cursor-pointer group">
                    {work.images[0] && (
                      <div className="relative h-64 overflow-hidden bg-sand-100">
                        <img
                          src={work.images[0]}
                          alt={work.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="portfolio-card-content">
                      <h3 className="text-lg font-semibold mb-2">{work.title}</h3>
                      <p className="text-sand-600 text-sm mb-4 line-clamp-2">
                        {work.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {work.tags.slice(0, 2).map((tag) => (
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

            <div className="text-center">
              <Link href="/portfolio" className="btn btn-secondary">
                查看全部作品
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      <section id="about">
        <div className="container max-w-3xl">
          <h2 className="text-center mb-8">關於我</h2>
          <p className="text-lg text-sand-700 leading-relaxed mb-8 text-center">
            {content.site.about}
          </p>
          
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h3 className="text-center mb-6">核心專長</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">→</span>
                <span className="text-sand-700">品牌識別系統設計（CI/VI）</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">→</span>
                <span className="text-sand-700">平面設計與物料製作</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">→</span>
                <span className="text-sand-700">社群媒體內容策劃與製作</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">→</span>
                <span className="text-sand-700">品牌策略與企劃文案</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">→</span>
                <span className="text-sand-700">展場與活動視覺設計</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
