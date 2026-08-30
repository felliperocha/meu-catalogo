document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('cookiesAccepted')) {
        const banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <p>Usamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa <a href="/disclaimer/">Política de Privacidade</a>.</p>
            <button class="cookie-accept">Aceitar</button>
        `;
        document.body.appendChild(banner);
        
        banner.querySelector('.cookie-accept').addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'true');
            banner.remove();
        });
    }
});