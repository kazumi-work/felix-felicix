'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Service {
  id: string
  name: string
  description: string
  icon: string
}

interface ContentData {
  services: Service[]
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    fetch('/content.json')
      .then(res => res.json())
      .then((data: ContentData) => {
        setServices(data.services)
      })
  }, [])

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-4">服務項目</h1>
          <p className="text-sand-600 max-w-2xl mx-auto text-lg">
            從品牌定位到內容製作，我提供完整的設計服務方案。<br />
            無論是新品牌籌備或既有品牌升級，都能量身打造。
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid_3 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="card group hover:border-primary"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {getServiceIcon(service.icon)}
              </div>
              <h3 className="mb-3">{service.name}</h3>
              <p className="text-sand-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-12 text-center">
          <h2 className="mb-4">準備開始了嗎？</h2>
          <p className="text-sand-600 mb-8 max-w-2xl mx-auto">
            每個品牌都有獨特的故事。讓我們一起用設計為你的故事增添美學與力量。
          </p>
          <a href="#contact" className="btn">
            聯絡我進行諮詢
          </a>
        </div>

        {/* Process Section */}
        <section className="mt-16 pt-12 border-t border-sand-200">
          <h2 className="text-center mb-12">我的工作流程</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: '品牌溝通',
                  description: '深入了解你的品牌理念、目標客群與核心價值。'
                },
                {
                  step: '02',
                  title: '概念發想',
                  description: '構思創意方向，提出初步概念與視覺方向。'
                },
                {
                  step: '03',
                  title: '設計製作',
                  description: '根據反饋進行設計，完成視覺呈現與詳細應用。'
                },
                {
                  step: '04',
                  title: '修改潤色',
                  description: '聽取意見，進行必要調整，確保完全符合期望。'
                },
                {
                  step: '05',
                  title: '交付支持',
                  description: '提供完整檔案與使用指南，持續支持後續應用。'
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-semibold text-sm">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sand-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16 pt-12 border-t border-sand-200">
          <h2 className="text-center mb-12">常見問題</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: '你通常需要多少時間完成一個專案？',
                a: '這取決於專案的複雜度。簡單的設計（如名片）約 3-5 天，品牌完整系統可能需要 2-4 週。我們會在溝通時提供詳細的時程規劃。'
              },
              {
                q: '你如何確保設計符合我的品牌調性？',
                a: '在初期溝通中，我會深入了解你的品牌理念、目標客群、競爭環境。基於這些資訊提出概念方向，確保設計完全契合你的期望。'
              },
              {
                q: '修改次數有限制嗎？',
                a: '每個合約都會清楚標明修改次數與範圍。通常包含 2-3 輪的主要修改。超出範圍的修改會另行計費。'
              },
              {
                q: '你提供後續的內容製作服務嗎？',
                a: '是的！我提供社群內容企劃、定期貼文製作、Reels 製作等長期社群管理服務，可以按月或按案件計費。'
              }
            ].map((item, index) => (
              <div key={index} className="border-b border-sand-200 pb-6">
                <h4 className="font-semibold mb-2">{item.q}</h4>
                <p className="text-sand-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

function getServiceIcon(icon: string): string {
  const icons: { [key: string]: string } = {
    'palette': '🎨',
    'camera-video': '📹',
    'box': '📦',
    'layout-2': '🏗️',
    'social': '📱',
    'bulb': '💡',
    'pencil': '✍️',
    'calendar-event': '📅',
    'link': '🔗',
  }
  return icons[icon] || '✨'
}
