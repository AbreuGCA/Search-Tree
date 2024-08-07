let currentSlide = 0;
const descriptions = [
    'Coolors é uma ferramenta online poderosa para a criação e exploração de paletas de cores. Projetada com um design intuitivo, ela permite que designers, artistas e qualquer pessoa interessada em combinar cores possam facilmente gerar paletas harmoniosas e inspiradoras. O site oferece uma funcionalidade de geração automática, onde, com um simples clique, você pode obter uma paleta de cores aleatória. Além disso, você pode ajustar manualmente cada cor, definir suas próprias cores preferidas e trancar cores específicas para garantir consistência enquanto explora novas combinações.',
    'O GitHub é uma plataforma de hospedagem e gerenciamento de código-fonte baseada em Git, que permite a colaboração e o controle de versões em projetos de software. Ele facilita a integração e a comunicação entre desenvolvedores, permitindo que trabalhem em projetos de forma colaborativa, revisem código e gerenciem versões de maneira eficiente. Com recursos como pull requests, issues e wikis, o GitHub também suporta a documentação e a gestão de tarefas. Além disso, oferece uma interface web amigável para visualizar e editar repositórios, bem como a integração com ferramentas de CI/CD para automação de processos de desenvolvimento.',
    'O Figma é uma ferramenta de design de interface e prototipagem colaborativa baseada na web, que permite que designers e equipes trabalhem juntos em tempo real. Com uma interface intuitiva e recursos robustos, o Figma facilita a criação de wireframes, interfaces de usuário, e protótipos interativos. Sua principal vantagem é a capacidade de edição simultânea por vários usuários, eliminando a necessidade de salvar versões diferentes de um arquivo. Além disso, o Figma oferece uma ampla variedade de plugins e integrações, tornando-o uma escolha popular para designers que buscam eficiência e colaboração em seus projetos de design digital.'
];

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const numSlides = slides.length;

    if (index >= numSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = numSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    updateDescription();
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function updateDescription() {
    const descriptionElement = document.getElementById('carousel-description');
    descriptionElement.textContent = descriptions[currentSlide];
}

showSlide(currentSlide);
