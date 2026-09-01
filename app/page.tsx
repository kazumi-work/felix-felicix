"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-khaki to-warmbeige">
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-accent">Kazumi</h1>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold text-darkbrown mb-4">
          設計的吟唱者
        </h1>
        <p className="text-2xl text-accent mb-8">
          故事的雕琢者，文化的紡織者
        </p>
        <a
          href="/portfolio"
          className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90"
        >
          來看我的作品
        </a>
      </main>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-8">關於我</h2>
        <p className="text-lg text-center">
          文化為脈絡，創意為羽翼。透過設計語言，訴說品牌故事。
        </p>
      </section>

      <footer className="bg-darkbrown text-white py-12 px-4 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">聯絡我</p>
          <a href="mailto:kazumiwolf31@gmail.com" className="hover:text-accent">
            kazumiwolf31@gmail.com
          </a>
          <p className="mt-8 text-sm opacity-75">
            © 2024 Kazumi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
