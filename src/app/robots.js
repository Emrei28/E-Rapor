// app/robots.js

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*', // Berlaku untuk semua bot (Googlebot, Bing, dsb.)
        allow: '/',     // Izinkan merayapi seluruh situs
      },
    ],
    sitemap: 'https://emrei.id/sitemap.xml', // Pastikan URL domain Anda benar di sini
  }
}