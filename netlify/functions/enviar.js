exports.handler = async function(event, context) {
  // Verificamos que sea una petición POST válida
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Método no permitido" };
  }

  const datos = JSON.parse(event.body);
  
  const token = process.env.TELEGRAM_TOKEN; 
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const texto = `🚀 ¡Nuevo mensaje del Portfolio!\n\n👤 Nombre: ${datos.nombre}\n📧 Email: ${datos.email}\n💬 Mensaje: ${datos.mensaje}`;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: texto })
    });
    
    return { statusCode: 200, body: "Mensaje enviado correctamente" };
  } catch (error) {
    return { statusCode: 500, body: "Error interno del servidor" };
  }
};
