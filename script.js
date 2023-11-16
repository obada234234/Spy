function navigate(section) {
    const content = document.getElementById('content');

    if (section === 'contact') {
        content.innerHTML = '<h1>يمكنك التواصل معي عبر احد حسابات التواصل الاجتماعي.</h1>';
    } else if (section === 'social') {
        content.innerHTML = `
            <div class="social-buttons">
                <button onclick="navigate('discord')">discord</button>
                <button onclick="navigate('facebook')">facebook</button>
                <button onclick="navigate('instagram')">Instagram</button>
            </div>
        `;
    } else if (section === 'discord') {
        window.location.href = 'https://discord.gg/tRZC68vzpY';
    } else if (section === 'facebook') {
        window.location.href = 'https://web.facebook.com/profile.php?id=100091548457374';
    } else if (section === 'instagram') {
        window.location.href = 'https://www.instagram.com/obada_an/';
    } else if (section === 'about') {
        content.innerHTML = '<h1>It's nothing</h1>';
    }
}
