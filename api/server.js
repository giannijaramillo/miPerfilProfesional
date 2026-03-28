import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Wrong method' });
  }

  try {
    const { name, message, email } = req.body;

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'giannixavier10@gmail.com',
      subject: 'hello world',
      html: `<strong>it works!</strong>
      <strong>${message}</strong>`,
    });

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(502).json({ error });
  }
};

const handleSendEmail = async (e) => {
    e.preventDefault();
    const data = await fetch('/api/server', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message
        })
    });
    const res = await data.json();
    console.log(res);
}

export default handler;