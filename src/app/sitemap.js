// app/sitemap.js

// 1. IMPORT DATA DARI posts.json (Pastikan path-nya benar: '..' naik satu level dari 'app')
import posts from '../data/posts.json';

const baseUrl = 'https://emrei.id';

export default async function sitemap() {

  // 2. OLAH DATA BLOG DINAMIS
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    
    // Menggunakan properti 'date' dari JSON sebagai lastModified. 
    // Next.js akan memformatnya menjadi format tanggal yang benar di XML.
    lastModified: new Date(post.date), 
    
    changeFrequency: 'weekly', 
    priority: 0.8,
  }));

  // 3. DAFTAR URL HALAMAN STATIS
  const staticUrls = [
    {
      url: baseUrl, // Halaman utama (root)
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`, // Halaman index Blog
      lastModified: new Date(),
      changeFrequency: 'daily', 
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fitur`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tentang`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // 4. GABUNGKAN SEMUA URL (Statis + Dinamis)
  return [...staticUrls, ...blogUrls];
}