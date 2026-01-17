import { Inter } from 'next/font/google'
import Script from "next/script";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RETORNOS DE PAREJA',
  description: 'HABLANOS YA HAY SOLUCION',
}

export default function RootLayout({ children }) {

  const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID
  const TEST_CODE = process.env.NEXT_PUBLIC_TEST_CODE

  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Code */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView', {}, { eventID: ${TEST_CODE} });
            `,
          }}
        />

      </head>
      <body className='bg-gray-800'>
        {children}
        {/* <Script
          id="fb-whatsapp-fallback"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          function attachWhatsAppEvent() {
            var boton = document.getElementById('whatsappButton');
            if (boton) {
              console.log("Script encontrado botón y agregó listener");
              boton.addEventListener('click', function() {
                console.log("FALLBACK TRACK ejecutado");
                if (typeof fbq === 'function') {
                  fbq('trackCustom', 'WhatsAppClick');
                }
              });
              return;
            }
            setTimeout(attachWhatsAppEvent, 100);
          }
          attachWhatsAppEvent();
        `,
          }}
        /> */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </body>
    </html>
  )
}
