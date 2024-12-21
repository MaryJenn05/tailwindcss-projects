document.addEventListener('DOMContentLoaded', () => {
    const switcherTheme = document.querySelector('[data-id="switch-theme"]');
    //Etiquiera html
    const htmlTag = document.documentElement;

    if (htmlTag.getAttribute('data-theme') === 'dark') {
        switcherTheme.checked = true;
    }

    switcherTheme.addEventListener('change', () => {
        const newTheme = switcherTheme.checked ? 'dark' : 'light';
        htmlTag.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

});