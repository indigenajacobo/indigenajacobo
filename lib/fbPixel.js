export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID

// Evento estándar de vista de página
export const pageview = () => {
  window.fbq && window.fbq('track', 'PageView')
}

// Evento personalizado (Lead, Click, etc.)
export const event = (name, options = {}) => {
  window.fbq && window.fbq('track', name, options)
}
