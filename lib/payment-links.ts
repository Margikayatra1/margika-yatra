export const PAYMENT_LINKS: Record<string, string> = {
  "Char Dham & Do Dham Yatra": "https://rzp.io/rzp/EENWEiY",
  Varanasi: "",
  "Ujjain & Omkareshwar": "",
  "3 Jyotirling of Maharashtra": "",
  "Varanasi-Ayodhya-Prayagraj": "",
  Rameshwaram: "",
  "Jagannath Puri": "",
  Meghalaya: "",
}

export function getPaymentLink(packageName: string) {
  return PAYMENT_LINKS[packageName]?.trim() || "https://rzp.io/rzp/zCOhd60"
}

export function openPaymentLink(packageName: string, price: string) {
  const paymentLink = getPaymentLink(packageName)

  if (paymentLink) {
    window.open(paymentLink, "_blank", "noopener,noreferrer")
    return
  }

  alert(`Payment link is not configured for ${packageName} (${price}). Please add the gateway link in lib/payment-links.ts.`)
}
