import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Wrong method' });
  }

  try {
    const { name, message, email, subject } = req.body;

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'giannixavier10@gmail.com',
      subject: subject || 'Nuevo mensaje de contacto',
      html: `<p><strong>De:</strong> ${email}</p>
       <p><strong>Nombre:</strong> ${name}</p>
       <p><strong>Asunto:</strong> ${subject}</p>
       <p><strong>Mensaje:</strong> ${message}</p>`,
    });

    return res.status(200).json({ data });
    } catch (error) {
    console.error('Email error:', error);
    return res.status(502).json({ error: error.message || 'Failed to send email' });
  }
};

export default handler;