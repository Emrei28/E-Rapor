import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Semua field wajib diisi' }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'Raport Digital <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL,
      subject: `Pesan Baru dari ${name} - Raport Digital`,
      html: `
        <h2>Pesan Baru dari Form Kontak</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Pesan berhasil dikirim', data }, { status: 200 });
  } catch (error) {
    console.error('Error mengirim email:', error);
    return NextResponse.json({ error: 'Gagal mengirim pesan' }, { status: 500 });
  }
}