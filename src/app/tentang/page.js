import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar, faRocket, faUsers, faLock, faBook, faChalkboardTeacher, faHeadset } from '@fortawesome/free-solid-svg-icons';
import TestimonialCard from './TestimonialCard';
import { ValueCard } from '@/components/ValueCard';
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: 'Tentang - Emrei',
  description: 'Temukan cerita, visi, dan testimoni pengguna Raport Digital, solusi penilaian modern untuk pendidikan.',
  keywords: 'raport digital, tentang kami, aplikasi penilaian, guru, sekolah, testimoni',
  openGraph: {
    title: 'Tentang Raport Digital',
    description: 'Temukan cerita, visi, dan testimoni pengguna Raport Digital, solusi penilaian modern untuk pendidikan.',
    images: ['/images/hero-image.jpg'],
  },
};


export default function Tentang() {

  const testimonials = [
    {
      quote: "Mencetak raport dalam format PDF jadi sangat mudah. Desainnya profesional dan rapi.",
      name: "Pak Budi",
      title: "Guru SMP Harapan",
      rating: 5,
    },
    {
      quote: "Keamanan data siswa terjamin, dan saya bisa fokus mengajar tanpa khawatir administrasi.",
      name: "Ibu Rina",
      title: "Guru SMA Cemerlang",
      rating: 5,
    },
    {
      quote: "Aplikasi ini benar-benar revolusioner. Sangat membantu kerja saya sehari-hari.",
      name: "Pak Eko",
      title: "Guru SMP Bintang",
      rating: 5,
    },
    {
      quote: "Aplikasi ini benar-benar revolusioner. Sangat membantu kerja saya sehari-hari.",
      name: "Pak Eko",
      title: "Guru SMP Bintang",
      rating: 5,
    },
    {
      quote: "Aplikasi ini benar-benar revolusioner. Sangat membantu kerja saya sehari-hari.",
      name: "Pak Eko",
      title: "Guru SMP Bintang",
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <section
        className="py-16 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-center"
        data-aos="fade-down"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Tentang Kami</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Raport Digital hadir untuk mempermudah guru, sekolah, dan orang tua
          dalam mengelola penilaian pendidikan secara modern, aman, dan efisien.
        </p>
      </section>

      {/* Visi & Misi */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-4 text-sky-700">Visi</h2>
            <p className="text-lg leading-relaxed">
              Menjadi platform pendidikan digital terdepan yang mendukung guru
              untuk fokus pada hal terpenting: mengajar dan mendidik generasi
              penerus bangsa.
            </p>
          </div>
          <div data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-4 text-sky-700">Misi</h2>
            <ul className="space-y-3">
              <li className="flex items-start" data-aos="fade-up">
                <ValueCard
                  icon={faCheckCircle}
                  text="Mempermudah proses input nilai dan cetak raport digital."
                />
              </li>
              <li className="flex items-start" data-aos="fade-up" data-aos-delay="100">
                <ValueCard
                  icon={faCheckCircle}
                  text="Menyediakan sistem aman untuk menyimpan data siswa."
                />
              </li>
              <li className="flex items-start" data-aos="fade-up" data-aos-delay="200">
                <ValueCard
                  icon={faCheckCircle}
                  text="Membangun komunikasi yang transparan antara guru, siswa, dan orang tua."
                />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/*  Nilai Utama Kami */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900" data-aos="fade-up"> Nilai Utama Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm" data-aos="zoom-in" data-aos-delay="100">
              <FontAwesomeIcon icon={faRocket} className="text-sky-600 w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Inovasi</h3>
              <p className="text-gray-600">
                Kami menghadirkan teknologi terkini untuk mempermudah administrasi sekolah.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm" data-aos="zoom-in" data-aos-delay="200">
              <FontAwesomeIcon icon={faUsers} className="text-sky-600 w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Kolaborasi</h3>
              <p className="text-gray-600">
                Membangun komunikasi yang solid antara guru, siswa, dan orang tua.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm" data-aos="zoom-in" data-aos-delay="300">
              <FontAwesomeIcon icon={faLock} className="text-sky-600 w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Keamanan</h3>
              <p className="text-gray-600">
                Data siswa terlindungi dengan standar keamanan modern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900" data-aos="fade-up">Apa Kata Pengguna Kami</h2>
          {/* Container baru untuk scrolling horizontal */}
          <div className="flex space-x-8 overflow-x-auto pb-6 scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="flex-none w-[320px]">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tim Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900" data-aos="fade-up">Tim Kami</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-24 h-24 bg-sky-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900">M Reihan</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-24 h-24 bg-sky-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900">Budi</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-24 h-24 bg-sky-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900">Fauza Lestari</h3>
              <p className="text-gray-600">Education Consultant</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-100" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Bergabung dengan Raport Digital</h2>
          <p className="text-lg sm:text-xl mb-6 text-gray-600 max-w-2xl mx-auto">
            Jadilah bagian dari revolusi penilaian pendidikan yang mudah dan efisien.
          </p>
          <a
            href="https://rafordigital.netlify.app/"
            className="inline-block bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-sky-700 hover:scale-105 transition duration-300"
            data-aos="zoom-in" data-aos-delay="100"
          >
            Mulai Sekarang
          </a>
        </div>
      </section>
    </div>
  );
}