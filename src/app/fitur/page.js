import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faBookOpen, faSchool, faTable, faUsers, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import FAQSection from '@/components/FAQSection';

export { metadata } from './metadata';

export default function Fitur() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-sky-500 to-blue-600 text-white py-12" data-aos="fade-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Fitur Unggulan Raport Digital</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Revolusi penilaian sekolah dengan alat canggih yang hemat waktu dan mudah digunakan.
          </p>
        </div>
      </section>

      {/* Fitur Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900" data-aos="fade-up">Mengapa Memilih Raport Digital?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-sky-200 shadow-lg hover:scale-105 transition-transform duration-300" data-aos="fade-right" data-aos-delay="100">
              <FontAwesomeIcon icon={faChalkboardTeacher} className="fa-icon mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-900 text-center mb-2">Manajemen Data Kelas</h3>
              <p className="text-gray-600 text-center">
                Atur data kelas dengan mudah, termasuk nama kelas, wali kelas, dan data siswa seperti NISN, dalam satu platform terpusat.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-sky-200 shadow-lg hover:scale-105 transition-transform duration-300" data-aos="fade-left" data-aos-delay="100">
              <FontAwesomeIcon icon={faBookOpen} className="fa-icon mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-900 text-center mb-2">Manajemen Mata Pelajaran & Bab</h3>
              <p className="text-gray-600 text-center">
                Susun data mata pelajaran dan bab dengan rapi, memudahkan perencanaan dan pelacakan pembelajaran.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-sky-200 shadow-lg hover:scale-105 transition-transform duration-300" data-aos="fade-right" data-aos-delay="200">
              <FontAwesomeIcon icon={faSchool} className="fa-icon mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-900 text-center mb-2">Manajemen Data Sekolah</h3>
              <p className="text-gray-600 text-center">
                Kelola semua data sekolah dalam sistem yang aman dan terorganisir, dari profil hingga laporan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-sky-200 shadow-lg hover:scale-105 transition-transform duration-300" data-aos="fade-left" data-aos-delay="200">
              <FontAwesomeIcon icon={faTable} className="fa-icon mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-900 text-center mb-2">Input Nilai Otomatis & Ekspor PDF</h3>
              <p className="text-gray-600 text-center">
                Input nilai dengan tabel interaktif yang otomatis menghitung rata-rata. Simpan, edit, dan cetak raport PDF profesional dengan sekali klik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistik Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900" data-aos="fade-up">Dampak Raport Digital</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-sky-50 p-6 rounded-xl border-2 border-sky-200 shadow-lg" data-aos="zoom-in" data-aos-delay="100">
              <FontAwesomeIcon icon={faUsers} className="fa-icon mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">1000+</h3>
              <p className="text-gray-600 text-center">Guru menggunakan Raport Digital</p>
            </div>
            <div className="bg-sky-50 p-6 rounded-xl border-2 border-sky-200 shadow-lg" data-aos="zoom-in" data-aos-delay="200">
              <FontAwesomeIcon icon={faSchool} className="fa-icon mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">500+</h3>
              <p className="text-gray-600 text-center">Sekolah terhubung</p>
            </div>
            <div className="bg-sky-50 p-6 rounded-xl border-2 border-sky-200 shadow-lg" data-aos="zoom-in" data-aos-delay="300">
              <FontAwesomeIcon icon={faFileAlt} className="fa-icon mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">10K+</h3>
              <p className="text-gray-600 text-center">Raport dihasilkan</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-16 bg-sky-100" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Wujudkan Penilaian Modern Sekarang!</h2>
          <p className="text-lg sm:text-xl mb-6 text-gray-600 max-w-2xl mx-auto">
            Bergabung dengan ribuan guru yang menyederhanakan penilaian dengan Raport Digital. Coba gratis hari ini!
          </p>
          <a
            href="https://rafordigital.netlify.app/"
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