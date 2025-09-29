import { notFound } from 'next/navigation';
import posts from '@/data/posts.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

export async function generateMetadata({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: 'Artikel Tidak Ditemukan - Raport Digital',
      description: 'Artikel yang Anda cari tidak ditemukan.',
    };
  }
  return {
    title: `${post.title} - Raport Digital`,
    description: post.excerpt,
    keywords: `raport digital, ${post.title.toLowerCase()}, teknologi pendidikan`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: ['/images/hero-image.jpg'],
    },
  };
}

export default function Post({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-sky-500 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">{post.excerpt}</p>
          <p className="text-gray-300 text-sm mt-2">{post.date}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl border-2 border-sky-200 shadow-lg animate-fade-in">
            <FontAwesomeIcon icon={faNewspaper} className="text-sky-600 w-20 h-20 mb-4" />
            <div
              className="prose prose-gray max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Tertarik dengan Solusi Kami?</h2>
          <p className="text-lg sm:text-xl mb-6 text-gray-600 max-w-2xl mx-auto">
            Mulai pengalaman penilaian modern dengan Raport Digital. Coba gratis sekarang!
          </p>
          <a
            href="https://e-rapor.emrei.id/"
            className="inline-block bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-sky-700 hover:scale-105 transition duration-300"
          >
            Coba Gratis Sekarang
          </a>
        </div>
      </section>
    </div>
  );
}