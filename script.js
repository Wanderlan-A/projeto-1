window.addEventListener('load', function() {
    // Efeito de brilho no h1
    const title = document.querySelector('h1');
    if (title) {
        title.style.textShadow = '0 0 10px rgba(255, 0, 0, 0.94)';
        title.style.transition = 'text-shadow 0.8s ease-in-out';
        
        // Animação de brilho pulsante
        setInterval(() => {
            const brightness = Math.sin(Date.now() / 500) * 0.5 + 0.5; // Valor entre 0 e 1
            const intensity = Math.round(brightness * 20); // Intensidade de 0 a 20
            title.style.textShadow = `0 0 ${intensity}px rgba(255, 0, 0, ${brightness})`;
        }, 30);
    }
    
    const products = document.querySelectorAll('h2');
    
    products.forEach((product, index) => {
        // Inicialmente invisível e deslocado
        product.style.opacity = '0';
        product.style.transform = 'translateY(20px)';
        product.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Anima após um delay
        setTimeout(() => {
            product.style.opacity = '1';
            product.style.transform = 'translateY(0)';
        }, index * 300); // Delay crescente para cada produto
    });
    
    // Anima os parágrafos também
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((para, index) => {
        para.style.opacity = '0';
        para.style.transform = 'translateX(-20px)';
        para.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            para.style.opacity = '1';
            para.style.transform = 'translateX(0)';
        }, index * 200 + 500); // Delay maior para aparecer após os títulos
    });
});