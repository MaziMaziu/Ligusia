const galleryImages = [
    {
        src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg",
        alt: "Lux"
    },
    {
        src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg",
        alt: "Ezreal"
    },
    {
        src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg",
        alt: "Darius"
    },
    {
        src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg",
        alt: "Miss Fortune"
    },
    {
        src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Senna_0.jpg",
        alt: "Senna"
    },
    {
        src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg",
        alt: "Thresh"
    }
];

function renderGallery() {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;
    gallery.innerHTML = '';
    galleryImages.forEach(img => {
        const image = document.createElement('img');
        image.src = img.src;
        image.alt = img.alt;
        image.className = "gallery-img animate";
        gallery.appendChild(image);
    });

    // Obsługa lightboxa
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox .close');

    document.querySelectorAll('.gallery-img').forEach(img => {
        img.addEventListener('click', function () {
            lightbox.style.display = 'flex';
            lightboxImg.src = this.src;
            lightboxCaption.textContent = this.alt;
        });
    });

    closeBtn.addEventListener('click', function () {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
        lightboxCaption.textContent = '';
    });

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
            lightboxCaption.textContent = '';
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === "Escape") {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
            lightboxCaption.textContent = '';
        }
    });
}

document.addEventListener('DOMContentLoaded', renderGallery);