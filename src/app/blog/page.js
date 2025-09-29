import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { metadata as pageMetadata } from './metadata'; // Ganti nama untuk menghindari konflik
import posts from '@/data/posts.json';

// Ekspor metadata
export const metadata = pageMetadata;

export default function Blog() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-sky-500 to-blue-600 text-white py-12" data-aos="fade-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog Raport Digital</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Temukan artikel, tips, dan panduan terbaru tentang penilaian sekolah modern dan teknologi pendidikan.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900" data-aos="fade-up">Artikel Terbaru</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border-2 border-sky-200 shadow-lg hover:scale-105 transition-transform duration-300"
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
              >
                <FontAwesomeIcon icon={faNewspaper} className="text-sky-600 w-20 h-20 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-block bg-sky-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-sky-700 transition duration-300"
                >
                  Baca Selengkapnya
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-100" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Tertarik dengan Solusi Kami?</h2>
          <p className="text-lg sm:text-xl mb-6 text-gray-600 max-w-2xl mx-auto">
            Mulai pengalaman penilaian modern dengan Raport Digital. Coba gratis sekarang!
          </p>
          <a
            href="https://e-rapor.emrei.id/"
            className="inline-block bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-sky-700 hover:scale-105 transition duration-300"
            data-aos="zoom-in" data-aos-delay="100"
          >
            Coba Gratis Sekarang
          </a>
        </div>
      </section>
    </div>
  );
}