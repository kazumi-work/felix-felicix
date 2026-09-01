'use client'

import { useEffect, useState } from 'react'

interface SiteContent {
  site: {
    contact: {
      email: string
      instagram: string
      threads: string
      dcard: string
    }
  }
}

export default function Footer() {
  const [contact, setContact] = useState({
    email: '',
    instagram: '',
    threads: '',
    dcard: '',
  })

  useEffect(() => {
    fetch('/content.json')
      .then(res => res.json())
      .then((data: SiteContent) => {
        setContact(data.site.contact)
      })
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-sand-900 text-sand-50 py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h4 className="font-serif text-2xl font-bold mb-2 text-sand-100">Kazumi</h4>
            <p className="text-sand-300 text-sm">
              文化為脈絡，創意為羽翼。
            </p>
          </div>

          {/* Links */}
          <div>
            <h5 className="font-semibold mb-3 text-sand-100">快速連結</h5>
            <ul className="space-y-2 text-sm text-sand-300">
              <li>
                <a href="/portfolio" className="hover:text-primary transition">
                  作品集
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-primary transition">
                  服務
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-primary transition">
                  關於我
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold mb-3 text-sand-100">聯絡方式</h5>
            <ul className="space-y-2 text-sm text-sand-300">
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-primary transition">
                  {contact.email}
                </a>
              </li>
              {contact.instagram && (
                <li>
                  <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                    Instagram
                  </a>
                </li>
              )}
              {contact.dcard && (
                <li>
                  <a href={contact.dcard} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                    Dcard
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-sand-700 pt-8">
          <p className="text-center text-sm text-sand-400">
            © {currentYear} Kazumi. All rights reserved. | Designed & built with care
          </p>
        </div>
      </div>
    </footer>
  )
}
