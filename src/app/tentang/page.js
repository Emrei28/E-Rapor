import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar, faRocket, faUsers, faLock, faBook, faChalkboardTeacher, faHeadset } from '@fortawesome/free-solid-svg-icons';

export const metadata = {
  title: 'Tentang - Raport Digital',
  description: 'Temukan cerita, visi, dan testimoni pengguna Raport Digital, solusi penilaian modern untuk pendidikan.',
  keywords: 'raport digital, tentang kami, aplikasi penilaian, guru, sekolah, testimoni',
  openGraph: {
    title: 'Tentang Raport Digital',
    description: 'Temukan cerita, visi, dan testimoni pengguna Raport Digital, solusi penilaian modern untuk pendidikan.',
    images: ['/images/hero-image.jpg'],
  },
};

export default function Tentang() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-sky-500 to-blue-600 text-white py-12" data-aos="fade-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Raport Digital</h1>
          <p className="text-lg sm:text-xl max-w-4xl mx-auto">
            Raport Digital adalah platform manajemen sekolah yang dirancang untuk **membebaskan guru dari tumpukan pekerjaan administratif**. Kelola data sekolah, mulai dari **input data kelas, siswa, mata pelajaran, hingga input nilai** dengan antarmuka yang intuitif. Nikmati kemudahan **mencetak rapor digital dalam format PDF** yang profesional. Dengan Raport Digital, Anda bisa fokus pada hal yang paling penting: mengajar dan mendidik generasi penerus.
          </p>
        </div>
      </section>

      {/* Kisah Kami Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Kisah Kami</h2>
              <p className="text-gray-600 text-lg mb-4">
                Raport Digital bermula dari pemahaman mendalam akan tantangan yang dihadapi oleh para pendidik. Kami melihat bagaimana proses penilaian yang rumit, pencatatan manual, dan pekerjaan administratif yang memakan waktu sering kali menghalangi guru untuk fokus pada interaksi dengan siswa.
              </p>
              <p className="text-gray-600 text-lg">
                Dengan visi untuk memodernisasi ekosistem pendidikan, kami menciptakan platform yang tidak hanya mempermudah pekerjaan, tetapi juga menjadi mitra bagi setiap sekolah. Kami berkomitmen untuk terus berinovasi demi pendidikan Indonesia yang lebih baik.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
              <div className="w-full h-64 md:h-80 bg-sky-100 rounded-lg shadow-lg flex items-center justify-center text-sky-600">
                <FontAwesomeIcon icon={faBook} className="text-sky-600 w-20 h-20 mb-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Kami Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900" data-aos="fade-up">Visi Kami: Mengubah Cara Penilaian Pendidikan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm" data-aos="zoom-in" data-aos-delay="100">
              <FontAwesomeIcon icon={faRocket} className="text-sky-600 w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Efisiensi Tanpa Batas</h3>
              <p className="text-gray-600">
                Lupakan proses manual yang rumit dan tumpukan kertas. Raport Digital mengotomatisasi penilaian,
                membebaskan waktu Anda untuk fokus mengajar dan berinteraksi dengan siswa.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm" data-aos="zoom-in" data-aos-delay="200">
              <FontAwesomeIcon icon={faUsers} className="text-sky-600 w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Kolaborasi yang Kuat</h3>
              <p className="text-gray-600">
                Kami menjembatani komunikasi antara guru, siswa, dan orang tua. Pantau kemajuan siswa
                bersama-sama untuk hasil pendidikan yang lebih baik.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm" data-aos="zoom-in" data-aos-delay="300">
              <FontAwesomeIcon icon={faLock} className="text-sky-600 w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Keamanan Terjamin</h3>
              <p className="text-gray-600">
                Data siswa adalah prioritas utama kami. Dengan sistem keamanan canggih, Anda bisa
                tenang karena semua informasi terlindungi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900" data-aos="fade-up">Apa Kata Pengguna Kami</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="100">
              <FontAwesomeIcon icon={faQuoteLeft} className="text-sky-600 text-lg w-5 h-5 mb-4" />
              <p className="text-gray-600 mb-4 italic">
                &quot;Raport Digital sangat memudahkan saya mengelola nilai siswa. Antarmukanya intuitif dan hemat waktu!&quot;
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-sky-200 rounded-full mr-3"></div>
                <div>
                  <p className="text-gray-900 font-semibold">Ibu Sari</p>
                  <p className="text-gray-600 text-sm">Guru SD Nusantara</p>
                </div>
              </div>
              <div className="flex justify-center mt-3">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400 text-xs" />
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="200">
              <FontAwesomeIcon icon={faQuoteLeft} className="text-sky-600 text-lg w-5 h-5 mb-4" />
              <p className="text-gray-600 mb-4 italic">
                &quot;Mencetak raport dalam format PDF jadi sangat mudah. Desainnya profesional dan rapi.&quot;
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-sky-200 rounded-full mr-3"></div>
                <div>
                  <p className="text-gray-900 font-semibold">Pak Budi</p>
                  <p className="text-gray-600 text-sm">Kepala Sekolah SMP Harapan</p>
                </div>
              </div>
              <div className="flex justify-center mt-3">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400 text-xs" />
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="300">
              <FontAwesomeIcon icon={faQuoteLeft} className="text-sky-600 text-lg w-5 h-5 mb-4" />
              <p className="text-gray-600 mb-4 italic">
                &quot;Keamanan data siswa terjamin, dan saya bisa fokus mengajar tanpa khawatir administrasi.&quot;
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-sky-200 rounded-full mr-3"></div>
                <div>
                  <p className="text-gray-900 font-semibold">Ibu Rina</p>
                  <p className="text-gray-600 text-sm">Guru SMA Cemerlang</p>
                </div>
              </div>
              <div className="flex justify-center mt-3">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400 text-xs" />
                ))}
              </div>
            </div>
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
              <h3 className="text-lg font-semibold text-gray-900">Budi Santoso</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-24 h-24 bg-sky-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900">Ani Lestari</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-24 h-24 bg-sky-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900">Siti Rahmah</h3>
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