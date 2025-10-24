function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

const navbar = document.getElementById("nav");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        navbar.classList.add("blurred");
      } else {
        navbar.classList.remove("blurred");
      }
    });

const menu = document.getElementById("menu");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        menu.classList.add("blurred");
      } else {
        menu.classList.remove("blurred");
      }
    });



    
function toggleChat(open) {
  const panel = document.getElementById('jddev-chat-panel');
  const launcher = document.getElementById('chat-launcher');
  if (open) {
    panel.style.display = 'flex';
    launcher.style.display = 'none';
  } else {
    panel.style.display = 'none';
    launcher.style.display = 'flex';
  }
}

async function sendToDialogflow() {
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  if (!message) return;
  
  const chatOutput = document.getElementById('chat-output');
  chatOutput.innerHTML += `<div style='margin-bottom:0.5rem;'><b>🧑 Você:</b> ${message}</div>`;
  input.value = '';

  const simulatedResponse = getSimulatedResponse(message.toLowerCase());
  chatOutput.innerHTML += `<div style='margin-bottom:1rem;'><b>🤖 JD|Dev:</b> ${simulatedResponse}</div>`;
  chatOutput.scrollTop = chatOutput.scrollHeight;
}

function getSimulatedResponse(msg) {
  if (msg.includes("produtos") || msg.includes("2")) {
    return "Lápis artesanais<br> Pau de chuva e chocalho<br> Telas Pirografada<br> Casas de Passarinhos<br> Chaveiros, brincos e imã de geladeira, todos pirografados<br> Barcos, veleiros e canoas<br> cruscifixo entalhados em Miriti<br> Peças variadas com iluminação em led e projetos de peças personalizadas por encomenda";
  }
  if (msg.includes("experiencia") || msg.includes("4")  || msg.includes("trabalho") || msg.includes("empresa")) {
    return "💼 Já participei de feiras de brinquedos de Miriti em Abaetetuba, mas minha caminhada começou antes: de 2003 a 2005 fui monitor ambiental no Museu Emílio Goeldi, em 2006 trabalhei no Mangal das Garças como tratador de animais, e entre 2008 e 2013 atuei como auxiliar ambiental na empresa Clean, onde depois, de 2013 a 2023, fui do setor de RH. Sou formado em Análise e Desenvolvimento de Sistemas. Em 2023 tirei minha carteira de artesão e hoje, em 2025, estou dedicado ao artesanato em Miriti e ao aprimoramento da pirografia.";
  }
 
  if (msg.includes("3") || msg.includes("fone") || msg.includes("telefone") || msg.includes("whatsapp")) {
    return "📨 Você pode entrar em contato clicando no icone de whatsapp, você será redirecionado. Estou sempre aberto a boas conversas!";
  }
 
  if (msg.includes("fale sobre vc") || msg.includes("1")  || msg.includes("fale sobre você") || msg.includes("quem vc é") || msg.includes("quem você é") || msg.includes("quem vc é?") || msg.includes("quem você é?") || msg.includes("quem é vc") || msg.includes("quem é vc?") || msg.includes("q é você?") || msg.includes("quem é você?")) {
    return "Eu sou o assistente virtual da JD Arte em Miriti, criado para ajudar você a conhecer melhor nosso artesanato e tirar suas dúvidas.";
  }  
  const saudacoes = {
    "dia": [
      "🌞 Bom dia! Que seu dia seja tão brilhante quanto suas ideias!<br>digite o nº <br>1 - fale sobre você.<br>2 - produtos.<br>3 - Onde e como compro.<br>4 - experiência",

    ],
    "tarde": [
      "🌤️ Boa tarde! Que sua energia siga firme! Você está arrasando!<br>digite o nº <br>1 - fale sobre você.<br>2 - produtos.<br>3 - Onde e como compro.<br>4 - experiência",

    ],
    "noite": [
      "🌙 Boa noite! Descanse bem, mente brilhante!<br>digite o nº <br>1 - Fale sobre você.<br>2 - Produtos.<br>3 - Onde e como compro.<br>4 - Experiência",

    ],
    "oi": [
      "👋 Oi! Que bom te ver por aqui, mente brilhante!<br>digite o nº <br>1 - Fale sobre você.<br>2 - Produtos.<br>3 - Onde e como compro.<br>4 - Experiência",

    ],
    "olá": [
      "👋 Olá! Sua presença já deixa tudo mais interessante!<br>digite o nº <br>1 - Fale sobre você.<br>2 - Produtos.<br>3 - Onde e como compro.<br>4 - Experiência",

    ],
    "ola": [
      "👋 Olá! Sua presença já deixa tudo mais interessante!<br>digite o nº <br>1 - Fale sobre você.<br>2 - Produtos.<br>3 - Onde e como compro.<br>4 - Experiência",

    ],    
    "obrigado": [
      "🙏 De nada! Você merece toda a atenção, talento puro!<br>digite o nº <br>1 - Fale sobre você.<br>2 - Produtos.<br>3 - Onde e como compro.<br>4 - Experiência",

    ],
    "obrigada": [
      "🙏 De nada! Você merece todo o reconhecimento!<br>digite o nº <br>1 - Fale sobre você.<br>2 - Produtos.<br>3 - Onde e como compro.<br>4 - Experiência",

    ],
    "como vai": [
      "😄 Tudo ótimo por aqui! E você, sempre com essa energia boa?<br>digite o nº <br>1 - Fale sobre você.<br>2 - Produtos.<br>3 - Onde e como compro.<br>4 - Experiência",

    ]
  };

  for (const saudacao in saudacoes) {
    if (msg.includes(saudacao)) {
      const respostas = saudacoes[saudacao];
      return respostas[Math.floor(Math.random() * respostas.length)];
    }
  }

  // (continua com os ifs anteriores para formação, habilidades, experiência, etc...)
  return "🤖 Desculpe, ainda estou aprendendo essa resposta.  ✨";
}    



document.addEventListener('DOMContentLoaded', () => {
    // Apenas simula a resposta para 'olá' sem mostrar a pergunta do usuário.
    // Isso garante que o menu apareça imediatamente.
    const chatOutput = document.getElementById('chat-output');
    const simulatedResponse = getSimulatedResponse("olá"); 

    // Insere a mensagem de boas-vindas do assistente virtual
    chatOutput.innerHTML += `<div style='margin-bottom:1rem;'><b>🤖 JD|Dev:</b> ${simulatedResponse}</div>`;
    chatOutput.scrollTop = chatOutput.scrollHeight;
});


// === Cria o contêiner do lightbox ===
  const zoomOverlay = document.createElement('div');
  zoomOverlay.classList.add('zoom-overlay');
  zoomOverlay.innerHTML = `
    <span class="zoom-close">&times;</span>
    <span class="zoom-prev">&#10094;</span>
    <img id="zoomed-img" src="" alt="imagem ampliada">
    <span class="zoom-next">&#10095;</span>
  `;
  document.body.appendChild(zoomOverlay);

  const zoomedImg = document.getElementById('zoomed-img');
  const closeBtn = zoomOverlay.querySelector('.zoom-close');
  const nextBtn = zoomOverlay.querySelector('.zoom-next');
  const prevBtn = zoomOverlay.querySelector('.zoom-prev');

  // === Captura todas as imagens ===
  const allImages = Array.from(document.querySelectorAll('.scroll-gallery img'));
  let currentIndex = 0;
  let zoomLevel = 1;

  // === Abre imagem ===
  function openZoom(index) {
    currentIndex = index;
    zoomedImg.src = allImages[index].src;
    zoomLevel = 1;
    zoomedImg.style.transform = 'scale(1)';
    zoomOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  // === Fecha imagem ===
  function closeZoom() {
    zoomOverlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  // === Navegação ===
  function showNext() {
    currentIndex = (currentIndex + 1) % allImages.length;
    openZoom(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    openZoom(currentIndex);
  }

  // === Eventos ===
  allImages.forEach((img, i) => {
    img.addEventListener('click', () => openZoom(i));
  });

  closeBtn.addEventListener('click', closeZoom);
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  // Fecha ao clicar fora da imagem
  zoomOverlay.addEventListener('click', e => {
    if (e.target === zoomOverlay) closeZoom();
  });

  // Zoom com scroll do mouse
  zoomedImg.addEventListener('wheel', e => {
    e.preventDefault();
    if (e.deltaY < 0) zoomLevel += 0.1;
    else zoomLevel = Math.max(1, zoomLevel - 0.1);
    zoomedImg.style.transform = `scale(${zoomLevel})`;
  });

  // Navegação com teclado
  document.addEventListener('keydown', e => {
    if (zoomOverlay.style.display === 'flex') {
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'Escape') closeZoom();
    }
  });