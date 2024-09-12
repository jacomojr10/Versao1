 // Selecionar todos os links do menu
 const menuLinks = document.querySelectorAll('nav ul li a');
 // Selecionar todas as seções de conteúdo
 const sections = document.querySelectorAll('.content-section');

 // Função para trocar as seções ativas
 function showSection(sectionId) {
   // Remover a classe 'active' de todas as seções
   sections.forEach(section => section.classList.remove('active'));
   // Adicionar a classe 'active' apenas à seção correspondente
   document.getElementById(sectionId).classList.add('active');
 }

 // Adicionar evento de clique aos links do menu
 menuLinks.forEach(link => {
   link.addEventListener('click', function(e) {
     e.preventDefault(); // Evitar o comportamento padrão do link
     const sectionId = this.getAttribute('data-section'); // Pegar o ID da seção
     showSection(sectionId); // Chamar a função para exibir a seção correta
   });
 });