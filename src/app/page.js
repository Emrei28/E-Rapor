import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faFilePdf, faLock, faUserCircle, faCheckCircle, faStar, faQuoteLeft, faCheck } from '@fortawesome/free-solid-svg-icons';

export const metadata = {
  title: 'Beranda - Raport Digital',
  description: 'Aplikasi raport digital untuk guru, memudahkan input nilai dan cetak PDF.',
  keywords: 'raport digital, aplikasi penilaian, guru, sekolah, PDF',
  openGraph: {
    title: 'Raport Digital',
    description: 'Kelola nilai siswa dengan mudah dan cetak raport dalam format PDF.',
    images: ['/images/hero-image.jpg'],
  },
};

export default function Home() {
  return (
    <div>
      {/* Hero Section yang telah diperbarui */}
      <section className="bg-gradient-to-r from-sky-500 to-blue-600 text-white min-h-[85vh] py-24 lg:py-32 flex items-center relative overflow-hidden">
        {/* Latar belakang abstrak */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.pexels.com/photos/5212687/pexels-photo-5212687.jpeg"
            alt="Abstract background"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="transform scale-110"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Konten Teks */}
            <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0" data-aos="fade-right">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg" data-aos="fade-up" data-aos-delay="100">
                Kelola Nilai Lebih Mudah dari Sebelumnya
              </h1>
              <p className="text-lg sm:text-xl mb-8 max-w-md mx-auto lg:mx-0 drop-shadow-md" data-aos="fade-up" data-aos-delay="200">
                Aplikasi raport digital modern untuk guru. Sederhanakan pekerjaan, hemat waktu, dan hasilkan raport PDF profesional.
              </p>
              <a
                href="https://rafordigital.netlify.app/"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300 shadow-xl transform hover:scale-105"
                data-aos="fade-up" data-aos-delay="300"
              >
                Coba Sekarang
              </a>
            </div>

            {/* Gambar yang diperbarui */}
            <div className="lg:w-1/2 relative lg:h-[450px] w-full h-[300px] flex items-center justify-center" data-aos="fade-left" data-aos-delay="100">
              <div className="relative w-full h-full p-4">
                <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl ring-4 ring-white ring-opacity-50">
                  <Image
                    src="https://images.pexels.com/photos/5212687/pexels-photo-5212687.jpeg"
                    alt="Antarmuka Raport Digital"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    className="transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-12 text-gray-900" data-aos="fade-up">Berusaha Memberi Solusi Terbaik</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
            <Image
              src="https://images.pexels.com/photos/10643471/pexels-photo-10643471.jpeg"
              alt="Logo Sekolah 1"
              width={150}
              height={150}
              className="grayscale hover:grayscale-0 transition duration-300 w-full h-auto"
              data-aos="fade-up" data-aos-delay="100"
            />
            <Image
              src="https://images.pexels.com/photos/7743253/pexels-photo-7743253.jpeg"
              alt="Logo Sekolah 2"
              width={150}
              height={150}
              className="grayscale hover:grayscale-0 transition duration-300 w-full h-auto"
              data-aos="fade-up" data-aos-delay="200"
            />
            <Image
              src="https://images.pexels.com/photos/8457428/pexels-photo-8457428.jpeg"
              alt="Logo Sekolah 3"
              width={150}
              height={150}
              className="grayscale hover:grayscale-0 transition duration-300 w-full h-auto"
              data-aos="fade-up" data-aos-delay="300"
            />
            <Image
              src="https://images.pexels.com/photos/6326370/pexels-photo-6326370.jpeg"
              alt="Logo Sekolah 4"
              width={150}
              height={150}
              className="grayscale hover:grayscale-0 transition duration-300 w-full h-auto"
              data-aos="fade-up" data-aos-delay="400"
            />
            <Image
              src="https://images.pexels.com/photos/8197549/pexels-photo-8197549.jpeg"
              alt="Logo Sekolah 5"
              width={150}
              height={150}
              className="grayscale hover:grayscale-0 transition duration-300 w-full h-auto"
              data-aos="fade-up" data-aos-delay="500"
            />
          </div>
        </div>
      </section>

      {/* Fitur Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900" data-aos="fade-up">Fitur Unggulan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in" data-aos-delay="100">
              <FontAwesomeIcon icon={faPencilAlt} className="text-blue-600 w-8 h-8 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 text-center">Input Nilai Mudah</h3>
              <p className="text-gray-600 text-center">Masukkan nilai siswa dengan antarmuka yang intuitif dan ramah pengguna.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in" data-aos-delay="200">
              <FontAwesomeIcon icon={faFilePdf} className="text-blue-600 w-8 h-8 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 text-center">Cetak PDF</h3>
              <p className="text-gray-600 text-center">Ekspor raport ke format PDF dengan desain profesional.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in" data-aos-delay="300">
              <FontAwesomeIcon icon={faLock} className="text-blue-600 w-8 h-8 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 text-center">Akses Aman</h3>
              <p className="text-gray-600 text-center">Lindungi data siswa dengan autentikasi yang aman.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bagaimana Cara Kerjanya Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900" data-aos="fade-up">Bagaimana Cara Kerjanya?</h2>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Horizontal Line */}
            <div className="hidden md:block absolute top-8 left-12 right-12 h-1 bg-blue-300 transform -translate-y-1/2 -z-10"></div>
            
            {/* Step 1 */}
            <div className="flex flex-col items-center z-10" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faUserCircle} className="text-blue-600 w-8 h-8" />
              </div>
              <p className="font-semibold text-lg text-gray-900 mb-1">Daftar & Login</p>
              <p className="text-gray-600 max-w-xs">Buat akun Anda atau masuk ke platform kami dengan mudah.</p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center z-10" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faPencilAlt} className="text-blue-600 w-8 h-8" />
              </div>
              <p className="font-semibold text-lg text-gray-900 mb-1">Input Nilai</p>
              <p className="text-gray-600 max-w-xs">Masukkan data Kelas, Mapel dan Sekolah anda. Input nilai siswa Anda melalui antarmuka yang intuitif.</p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center z-10" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 w-8 h-8" />
              </div>
              <p className="font-semibold text-lg text-gray-900 mb-1">Cetak Raport</p>
              <p className="text-gray-600 max-w-xs">Selesai! Cetak raport dalam format PDF yang siap dibagikan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900" data-aos="fade-up">Pilih Paket yang Cocok untuk Anda</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Kami menawarkan berbagai pilihan paket yang dirancang untuk memenuhi kebutuhan setiap sekolah.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center" data-aos="zoom-in" data-aos-delay="100">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Paket Dasar</h3>
              <p className="text-gray-600 mb-4">Cocok untuk penggunaan pribadi</p>
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-blue-600">Gratis</span>
              </div>
              <ul className="text-left w-full space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 w-4 h-4 mr-2" />
                  <span>Input nilai hingga 10 siswa</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 w-4 h-4 mr-2" />
                  <span>Cetak raport PDF</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 w-4 h-4 mr-2" />
                  <span>Dukungan komunitas</span>
                </li>
              </ul>
              <a href="https://rafordigital.netlify.app/" className="mt-auto block w-full bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition duration-300">
                Mulai Gratis
              </a>
            </div>

            {/* Premium Plan */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-blue-600 flex flex-col items-center" data-aos="zoom-in" data-aos-delay="200">
              <h3 className="text-2xl font-bold mb-2 text-blue-600">Paket Premium</h3>
              <p className="text-gray-600 mb-4">Paling populer untuk sekolah kecil</p>
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-blue-600">Rp 100rb</span>
                <span className="text-gray-600">/bulan</span>
              </div>
              <ul className="text-left w-full space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 w-4 h-4 mr-2" />
                  <span>Input nilai hingga 100 siswa</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 w-4 h-4 mr-2" />
                  <span>Cetak raport PDF tanpa batas</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 w-4 h-4 mr-2" />
                  <span>Fitur kustomisasi raport</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 w-4 h-4 mr-2" />
                  <span>Dukungan prioritas</span>
                </li>
              </ul>
              <a href="https://app.raportdigital.com/login" className="mt-auto block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Pilih Paket Ini
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center" data-aos="zoom-in" data-aos-delay="300">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Paket Sekolah</h3>
              <p className="text-gray-600 mb-4">Untuk kebutuhan sekolah besar</p>
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-gray-800">Hubungi Kami</span>
              </div>
              <ul className="text-left w-full space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 w-4 h-4 mr-2" />
                  <span>Jumlah siswa tidak terbatas</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 w-4 h-4 mr-2" />
                  <span>Integrasi sistem sekolah</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 w-4 h-4 mr-2" />
                  <span>Dukungan khusus 24/7</span>
                </li>
              </ul>
              <a href="/kontak" className="mt-auto block w-full bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition duration-300">
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}