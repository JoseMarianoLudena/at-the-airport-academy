// Utilidades para formatear datos
export const formatCurrency = (amount, currency = '€') => {
  return `${currency}${amount}`;
};

export const buildWhatsAppUrl = (phone, message) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}/?text=${encodedMessage}`;
};

export const getImageSrc = (imagePath, fallback = '/assets/images/logo.png') => {
  console.log('🖼️ getImageSrc llamado:');
  console.log('- imagePath recibido:', imagePath);
  console.log('- fallback:', fallback);
  console.log('- resultado final:', imagePath || fallback);
  
  // Si no hay imagePath, usar el fallback
  const finalPath = imagePath || fallback;
  console.log('- path final que se va a usar:', finalPath);
  
  return finalPath;
};