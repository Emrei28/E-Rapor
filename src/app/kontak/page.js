import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { metadata as pageMetadata } from './metadata';
import ContactForm from '@/components/ContactForm';

export const metadata = pageMetadata;

export default function Kontak() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-sky-500 to-blue-600 text-white py-12" data-aos="fade-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Kami siap membantu Anda dengan pertanyaan, dukungan, atau informasi tentang solusi penilaian modern.
          </p>
        </div>
      </section>

      {/* Kontak Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900" data-aos="fade-up">Kirim Pesan atau Hubungi Kami</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Kontak */}
            <ContactForm />
            {/* Info Kontak */}
            <div className="bg-white p-8 rounded-xl border-2 border-sky-200 shadow-lg" data-aos="fade-left">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-sky-600 w-6 h-6 mr-3" />
                  <div>
                    <p className="text-gray-900 font-medium">Email</p>
                    <p className="text-gray-600">mreihan2804@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faPhone} className="text-sky-600 w-6 h-6 mr-3" />
                  <div>
                    <p className="text-gray-900 font-medium">Telepon</p>
                    <p className="text-gray-600">+62 821 7069 0733</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-sky-600 w-6 h-6 mr-3" />
                  <div>
                    <p className="text-gray-900 font-medium">Alamat</p>
                    <p className="text-gray-600">Jl. Pendidikan No. 123, Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-100" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Siap Mencoba Raport Digital?</h2>
          <p className="text-lg sm:text-xl mb-6 text-gray-600 max-w-2xl mx-auto">
            Mulai pengalaman penilaian modern dengan alat yang dirancang untuk guru dan sekolah.
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