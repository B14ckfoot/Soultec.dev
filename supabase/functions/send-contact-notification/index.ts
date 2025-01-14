// @ts-ignore
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { to, subject, name, email, phone, message } = await req.json();

    const emailBody = `
New Contact Form Submission

From: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Subject: ${subject}

Message:
${message}
    `;

    const resendApiKey = Deno.env.get('RESEND_API_KEY')!;
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: Deno.env.get('EMAIL_FROM')!,
        to: [to],
        subject: subject,
        text: emailBody,
      }),
    });

    if (!response.ok) {
      throw new Error(`Resend API error: ${await response.text()}`);
    }

    return new Response(
      JSON.stringify({ message: 'Email sent successfully via Resend' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    );
  }
});
