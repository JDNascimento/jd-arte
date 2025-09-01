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
  if (msg.includes("formacao") || msg.includes("3")  || msg.includes("faculdade") || msg.includes("curso superior")) {
    return "🎓 Atualmente estou cursando <b>Análise e Desenvolvimento de Sistemas</b>! 🔍 Amo transformar ideias em código!";
  }
  if (msg.includes("habilidade") || msg.includes("4")  || msg.includes("tecnologia") || msg.includes("linguagem")) {
    return "💻 Minhas skills incluem: <br>🔹 HTML, CSS, JavaScript<br>🔹 Python & APIs<br>🔹 Git/GitHub & automações<br> digite;<br>backend<br>frontend<br>vanilla js<br>node<br>inteligencia artificial<br>python<br>github";
  }
  if (msg.includes("experiencia") || msg.includes("6")  || msg.includes("trabalho") || msg.includes("empresa")) {
    return "💼 Atuei por mais de <b>8 anos em Recursos Humanos</b>, focado em processos e dados. Hoje, uso tudo isso em tech!";
  }
  if (msg.includes("certificado") || msg.includes("5")  || msg.includes("curso") || msg.includes("qualificacao")) {
    return "📚 Fiz cursos complementares como: ENAP, Santander, Open Academy, cursos em vídeo e mais. <br>📖 Aprendizado contínuo é o segredo!<br>entre em habilidades e educação";
  }
  if (msg.includes("projeto") || msg.includes("portfolio") || msg.includes("portfólio")) {
    return "🧩 Você pode explorar meus projetos acessando meu portfólio! Sempre buscando funcionalidade! 💡";
  }
  if (msg.includes("linkedin") || msg.includes("rede social") || msg.includes("contato")) {
    return "🔗 Vamos nos conectar no LinkedIn? Acesse: <a href='https://www.linkedin.com/in/jonathan-brito-4b57a22b4/' target='_blank'>linkedin.com/in/jonathan-brito</a> 💼";
  }
  if (msg.includes("objetivo") || msg.includes("foco") || msg.includes("meta")) {
    return "🎯 Meu objetivo é desenvolver aplicações úteis, acessíveis e estratégicas. Código com propósito!";
  }
  if (msg.includes("jd") || msg.includes("quem é você") || msg.includes("você é o quê")) {
    return "🤖 Sou o JD|Dev, seu assistente técnico criado por Jonathan Brito para responder sobre sua trajetória como dev e seus projetos!";
  }
  if (msg.includes("email") || msg.includes("contato direto") || msg.includes("e-mail")) {
    return "📨 Você pode enviar um e-mail para <b>jonathan.devcontato@gmail.com</b>. Estou sempre aberto a boas conversas!";
  }
  if (msg.includes("ctt") || msg.includes("fone") || msg.includes("telefone") || msg.includes("whatsapp")) {
    return "📨 Você pode entrar em contato clicando em contrate-me abaixo dos icones de rede social, você será redirecionado. Estou sempre aberto a boas conversas!";
  }
  if (msg.includes("soft skill") || msg.includes("comportamental") || msg.includes("comunicacao")) {
    return "🧠 Minhas soft skills incluem: Comunicação clara <br>🗣️, pensamento analítico <br>🧮, responsabilidade <br>🤝 e foco em resultado!";
  }
  if (msg.includes("site") || msg.includes("pagina pessoal") || msg.includes("website")) {
    return "🌐 Claro! Meu site é <a href='https://jdenv-portifolio.netlify.app/' target='_blank'>jdenv-portifolio.netlify.app</a>. Lá você encontra projetos, habilidades e mais!";
  }
  if (msg.includes("proposito") || msg.includes("2")  || msg.includes("missao") || msg.includes("visao")) {
    return "🌟 Minha missão é usar tecnologia com propósito: criar soluções úteis, acessíveis e com impacto positivo!";
  }
  if (msg.includes("rh") || msg.includes("recursos humanos") || msg.includes("administrativo")) {
    return "👔 Minha base sólida vem de +8 anos em RH, com foco em organização de processos, dados e ferramentas digitais.";
  }
  if (msg.includes("html") || msg.includes("css") || msg.includes("javascript")) {
    return "🔧 Domínio prático em HTML, CSS e JS — do layout à interatividade, transformo ideias em aplicações funcionais!";
  }
  if (msg.includes("python") || msg.includes("api") || msg.includes("automacao")) {
    return "🐍 Utilizo Python para automações, integrações com APIs e tarefas que exigem eficiência e produtividade!";
  }
  if (msg.includes("open academy") || msg.includes("santander") || msg.includes("enap")) {
    return "📘 Participei de iniciativas como ENAP, Santander Open Academy e Bradesco. Amo aprender e evoluir sempre!";
  }
  if (msg.includes("github") || msg.includes("repositorio") || msg.includes("codigo fonte")) {
    return "🔗 Você pode visualizar meus códigos no GitHub! Acesse <a href='https://github.com/jdbrito' target='_blank'>github.com/jdbrito</a> 🚀";
  }
  if (msg.includes("aprender") || msg.includes("estudando") || msg.includes("estudos")) {
    return "📖 Estou sempre estudando! Atualmente focado em front-end moderno, backend com Node.js e IA aplicada.";
  }
  if (msg.includes("frase") || msg.includes("motivacao") || msg.includes("inspiração")) {
    return "💬 'Código bem feito é aquele que resolve, encanta e transforma. Continue evoluindo!'";
  }
  if (msg.includes("frontend") || msg.includes("interface") || msg.includes("design responsivo")) {
    return "🎨 Trabalho com design responsivo e interfaces amigáveis, priorizando usabilidade e experiência do usuário!";
  }
  if (msg.includes("backend") || msg.includes("servidor") || msg.includes("node")) {
    return "🧠 Com Node.js e Express, consigo estruturar lógicas de backend eficientes e seguras!";
  }
  if (msg.includes("inteligencia artificial")) {
    return "🤖 Sou entusiasta de IA! Exploro uso de machine learning e automações inteligentes em soluções reais.";
  }
  if (msg.includes("firebase") || msg.includes("realtime") || msg.includes("banco de dados")) {
    return "🔥 Utilizo Firebase para autenticação, banco de dados em tempo real e deploy ágil!";
  }
  if (msg.includes("deploy") || msg.includes("publicar site") || msg.includes("netlify")) {
    return "🚀 Costumo publicar projetos com Netlify ou Vercel para performance e facilidade de uso!";
  }
  if (msg.includes("figma") || msg.includes("ux") || msg.includes("prototipo")) {
    return "📐 Utilizo Figma para prototipar ideias e alinhar design com desenvolvimento!";
  }
  if (msg.includes("versao mobile") || msg.includes("celular") || msg.includes("responsivo")) {
    return "📱 Meus projetos são otimizados para dispositivos móveis com layout responsivo e ágil!";
  }
  if (msg.includes("javascript moderno") || msg.includes("es6") || msg.includes("arrow function")) {
    return "🧪 Trabalho com JS moderno: arrow functions, destructuring, promessas e muito mais!";
  }
  if (msg.includes("git") || msg.includes("controle de versão") || msg.includes("github actions")) {
    return "🗂️ Git e GitHub são essenciais no meu fluxo: branches, commits limpos e CI/CD com GitHub Actions!";
  }
  if (msg.includes("react") || msg.includes("componente") || msg.includes("spa")) {
    return "⚛️ React é meu framework favorito para construir interfaces interativas com componentes reutilizáveis!";
  }
  if (msg.includes("documentacao") || msg.includes("readme") || msg.includes("explicacao")) {
    return "📄 Sempre deixo README bem escrito e código comentado para facilitar manutenção e colaboração.";
  }
  if (msg.includes("responsabilidade") || msg.includes("compromisso") || msg.includes("pontualidade")) {
    return "⏱️ Valorizo prazos, responsabilidade e entregas bem feitas. Profissionalismo está no DNA!";
  }
  if (msg.includes("dialogflow") || msg.includes("chatbot") || msg.includes("assistente virtual")) {
    return "💬 Estou sendo treinado via Dialogflow para atuar como assistente inteligente no portfólio de Jonathan!";
  }
  if (msg.includes("javascript puro") || msg.includes("vanilla js")) {
    return "🍦 JS puro (Vanilla) também faz parte do meu repertório. Sem frameworks, direto ao ponto!";
  }
  if (msg.includes("fale sobre vc") || msg.includes("1")  || msg.includes("fale sobre você") || msg.includes("quem vc é") || msg.includes("quem você é") || msg.includes("quem vc é?") || msg.includes("quem você é?") || msg.includes("quem é vc") || msg.includes("quem é vc?") || msg.includes("q é você?") || msg.includes("quem é você?")) {
    return "JD|Dev é um assistente inteligente treinado por um desenvolvedor com visão estratégica e sólida formação técnica.<br>👨‍🎓 Estudante de ADS | <br>💻 Dev Web | <br>🤖 Entusiasta de IA. <br>📊 +8 anos de experiência em RH, com foco em processos, análise de dados e ferramentas digitais. <br>🛠️ Domina: HTML • CSS • JavaScript • Git • APIs • Python. <br>🎯 Missão: Criar soluções acessíveis, úteis e inteligentes. <br>🚀explore meu portfólio e saiba mais.";
  }  
  const saudacoes = {
    "dia": [
      "🌞 Bom dia! Que seu dia seja tão brilhante quanto suas ideias!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "👋 Bom dia! Bora conquistar o mundo hoje? Você é demais!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "✨ Bom dia! Começar o dia com sua presença já anima tudo!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "😄 Bom dia! Seu foco é inspirador. Vamos com tudo!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "☕ Bom dia! Já tomou aquele café para brilhar ainda mais?<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "🌟 Bom dia! Gente talentosa assim ilumina qualquer projeto!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência"
    ],
    "tarde": [
      "🌤️ Boa tarde! Que sua energia siga firme! Você está arrasando!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "😊 Boa tarde! Sua dedicação inspira! Continue brilhando!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "💪 Boa tarde! Já venceu metade do dia como um(a) campeão(ã)!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "🌈 Boa tarde! Com sua mente criativa, tudo flui melhor!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "👋 Boa tarde! Continue com essa vibe boa, você é top!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "⚡ Boa tarde! Você tem talento de sobra pra ir longe!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência"
    ],
    "noite": [
      "🌙 Boa noite! Descanse bem, mente brilhante!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "😴 Boa noite! Você merece um descanso digno de gênio(a)!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "🛌 Boa noite! Que seus sonhos sejam tão incríveis quanto seus projetos!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "✨ Boa noite! Recarregue as energias, você foi incrível hoje!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "💤 Boa noite! Seu esforço hoje foi admirável!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "🌟 Boa noite! Você brilha até quando descansa!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência"
    ],
    "oi": [
      "👋 Oi! Que bom te ver por aqui, mente brilhante!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "😊 Oi! Adoro quando pessoas talentosas aparecem!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "🙌 Oi! Vamos trocar ideias incríveis? Você tem o dom!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "✨ Oi! Que sua curiosidade te leve longe, como sempre!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "😁 Oi! Que sua energia contagiante guie nosso papo!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "🌟 Oi! Você tem tudo para ir além hoje!"
    ],
    "olá": [
      "👋 Olá! Sua presença já deixa tudo mais interessante!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "😊 Olá! Que bom ver alguém tão dedicado(a) aqui!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "✨ Olá! Vamos trocar experiências incríveis? Você é fera!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "🙌 Olá! Seu talento faz a diferença por aqui!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "😁 Olá! Você sempre agrega valor em tudo que faz!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "🌟 Olá! É sempre bom ver quem tem brilho próprio!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência"
    ],
    "ola": [
      "👋 Olá! Sua presença já deixa tudo mais interessante!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "😊 Olá! Que bom ver alguém tão dedicado(a) aqui!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "✨ Olá! Vamos trocar experiências incríveis? Você é fera!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "🙌 Olá! Seu talento faz a diferença por aqui!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "😁 Olá! Você sempre agrega valor em tudo que faz!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "🌟 Olá! É sempre bom ver quem tem brilho próprio!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência"
    ],    
    "obrigado": [
      "🙏 De nada! Você merece toda a atenção, talento puro!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "😊 Imagina! É um prazer ajudar alguém tão dedicado(a)!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "💬 Sempre que precisar, mente brilhante!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "🙌 Estou aqui por você, continue com essa energia incrível!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "👍 Tamo junto! Você é daqueles(as) que fazem acontecer!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "🎯 Conte comigo sempre! Sua garra é admirável!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência"
    ],
    "obrigada": [
      "🙏 De nada! Você merece todo o reconhecimento!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "😊 Imagina! Gente talentosa assim merece suporte total!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "💬 Pra você, sempre com o maior carinho!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "🙌 Estou aqui por você, inspiração total!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "👍 Disponha! Sua determinação é exemplo!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "🎯 Conte comigo sempre! Você brilha demais!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência"
    ],
    "como vai": [
      "😄 Tudo ótimo por aqui! E você, sempre com essa energia boa?<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "🙌 Indo bem, melhor ainda com sua visita!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "🌟 Sempre animado(a) pra trocar ideia com mentes incríveis como a sua!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "✨ Tudo fluindo! E você, sempre com brilho nos olhos?<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "😊 Aqui tudo ótimo, espero que seu dia esteja como você: incrível!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência",
      "💬 Tudo certo! Que bom saber de você, pessoa inspiradora!<br>digite o nº <br>1 - fale sobre você.<br>2 - proposito.<br>3 - formação.<br>4 - habilidade.<br>5 - educação.<br>6 - experiência"
    ]
  };

  for (const saudacao in saudacoes) {
    if (msg.includes(saudacao)) {
      const respostas = saudacoes[saudacao];
      return respostas[Math.floor(Math.random() * respostas.length)];
    }
  }

  // (continua com os ifs anteriores para formação, habilidades, experiência, etc...)
  return "🤖 Desculpe, ainda estou aprendendo essa resposta. Tente perguntar sobre minha formação, habilidades ou experiência! ✨";
}    