function navigate(section) {
    const content = document.getElementById('content');

    if (section === 'contact') {
        content.innerHTML = '<p> ادخل سيرفري ديسكورد من<a href="https://discord.gg/FRCZ8RfVu4"> هنا </a>وافتح تكت و اطلبني او كلمني ديسكورد على اليوزر 2g._</p>';
    } else if (section === 'social') {
        content.innerHTML = `
            <div class="social-buttons">
                <button onclick="navigate('discord')">discord</button>
                <button onclick="navigate('facebook')">facebook</button>
                <button onclick="navigate('instagram')">Instagram</button>
            </div>
        `;
    } else if (section === 'discord') {
        window.location.href = 'https://discord.gg/GZy6gX6RV5';
    } else if (section === 'facebook') {
        window.location.href = 'https://web.facebook.com/profile.php?id=100091548457374';
    } else if (section === 'instagram') {
        window.location.href = 'https://www.instagram.com/obada_an/';
    } else if (section === 'about') {
        content.innerHTML = '<p>انسان بيحب ديسكورد.</p>';
    }
}
