// Configuración de los regalos
const gifts = {
    gift1: {
        image: 'images/gift1-modal.jpg', // Imagen para el modal del regalo 1
        audio: 'audio/Nahuel Pennisi - Princesa (Lyric Video).mp3', // Canción para el regalo 1
        message: 'Porque sos mi princesa todos los días, el 15/11 a las 21 te espero para escuchar juntos la canción que mejor te describe.'
    },
    gift2: {
        image: 'images/gift2-modal.jpg', // Imagen para el modal del regalo 2
        audio: 'audio/Nahuel Pennisi - Ni Ahora Ni Mañana Ni Después.mp3', // Canción para el regalo 2
        message: 'Dicen que el amor también es una obra de arte… por eso te regalo una noche de teatro para compartirla juntos el 06/12 a las 22.30. Te amo'
    },
    gift3: {
        image: 'images/Imagen de WhatsApp 2025-11-03 a las 19.22.43_e2de0778.jpg', // Imagen para el modal del regalo 3
        audio: 'audio/Nahuel Pennisi - Princesa (Lyric Video).mp3', // Misma canción que el regalo 1
        message: 'Porque cada historia merece ser recordada, te regalo una forma nueva de guardar las tuyas. Busca debajo de tu cama. Te amo princes, feliz vida!'
    }
};

// Elementos del DOM
const giftButtons = document.querySelectorAll('.gift-btn');
const modal = document.getElementById('giftModal');
const closeModalBtn = document.getElementById('closeModal');
const giftImageContainer = document.getElementById('giftImageContainer');
const giftMessage = document.getElementById('giftMessage');
const giftAudio = document.getElementById('giftAudio');
const nextGiftBtn = document.getElementById('nextGiftBtn');

// Variable para rastrear el regalo actual
let currentGiftId = null;

// Función para abrir el modal con el regalo
function openGift(giftId) {
    const gift = gifts[giftId];
    
    if (!gift) {
        console.error('Regalo no encontrado:', giftId);
        return;
    }
    
    currentGiftId = giftId;
    
    // Configurar la imagen de fondo
    giftImageContainer.style.backgroundImage = `url('${gift.image}')`;
    
    // Configurar el mensaje
    giftMessage.textContent = gift.message;
    
    // Configurar el audio
    giftAudio.src = gift.audio;
    giftAudio.load();
    
    // Mostrar u ocultar el botón de siguiente regalo
    // Solo mostrar en regalo 1 para ir al regalo 2
    if (giftId === 'gift1') {
        nextGiftBtn.style.display = 'block';
        nextGiftBtn.textContent = 'Ver Regalo 2 ➡️';
    } else if (giftId === 'gift2') {
        nextGiftBtn.style.display = 'block';
        nextGiftBtn.textContent = 'Ver Regalo 3 ➡️';
    } else {
        nextGiftBtn.style.display = 'none';
    }
    
    // Mostrar el modal
    modal.classList.add('active');
    
    // Reproducir el audio automáticamente (si el navegador lo permite)
    giftAudio.play().catch(error => {
        console.log('Autoplay bloqueado:', error);
        // El usuario puede hacer clic en play manualmente
    });
}

// Función para cerrar el modal
function closeModal() {
    modal.classList.remove('active');
    giftAudio.pause();
    giftAudio.currentTime = 0;
}

// Event listeners para los botones de regalos
giftButtons.forEach(button => {
    button.addEventListener('click', () => {
        openGift(button.id);
    });
});

// Event listener para cerrar el modal
closeModalBtn.addEventListener('click', closeModal);

// Cerrar el modal al hacer clic fuera del contenido
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Cerrar el modal con la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Event listener para el botón de siguiente regalo
nextGiftBtn.addEventListener('click', () => {
    if (currentGiftId === 'gift1') {
        openGift('gift2');
    } else if (currentGiftId === 'gift2') {
        openGift('gift3');
    }
});

