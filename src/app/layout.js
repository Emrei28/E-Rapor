import './globals.css';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import AOSProvider from '@/components/AOSProvider';

export const metadata = {
  title: 'Raport Digital - Solusi Penilaian Sekolah Modern',
  description: 'Raport Digital adalah platform modern untuk penilaian sekolah, membantu guru mengelola data siswa dan menghasilkan raport dengan mudah.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <AOSProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16">{children}</main>
            <footer className="bg-gray-800 text-white py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Raport Digital</h3>
                    <p className="text-gray-400">
                      Solusi modern untuk penilaian sekolah, membantu guru dan sekolah mengelola data dengan efisien.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/tentang" className="text-gray-400 hover:text-sky-400">
                          Tentang
                        </Link>
                      </li>
                      <li>
                        <Link href="/fitur" className="text-gray-400 hover:text-sky-400">
                          Fitur
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog" className="text-gray-400 hover:text-sky-400">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link href="/kontak" className="text-gray-400 hover:text-sky-400">
                          Kontak
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
                    <p className="text-gray-400">Email: mreihan2804@gmail.com</p>
                    <p className="text-gray-400">Telepon: +62 821 7069 0733</p>
                    <p className="text-gray-400">Jl. Pendidikan No. 123, Jakarta</p>
                  </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
                  <p>&copy; 2025 Raport Digital. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
        </AOSProvider>
      </body>
    </html>
  );
}