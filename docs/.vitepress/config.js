export default {
  title: 'Нейруха. Приземление',
  description: 'Презентация идей и прозрений Фила',
  themeConfig: {
    search: false, // Полностью отключает поиск
    sidebar: [
      { text: 'Добро пожаловать', link: '/intro' },
      { 
        text: 'Открытия',
        items: [
          { text: '1. Удобная среда', link: '/slides/01-udobnaya-sreda' },
          { text: '2. Языки', link: '/slides/02-yazyki' },
          { text: '3. Мощь хаоса', link: '/slides/03-mosh-chaosa' },
          { text: '4. Деньги', link: '/slides/04-dengi' },
          { text: '5. Prompt Engineering', link: '/slides/05-prompt-engineering' },
          { text: '6. Создай свой мир', link: '/slides/06-sozday-svoi-mir' },
          { text: '7. Друзья', link: '/slides/07-druzya' },
          { text: '8. AGI', link: '/slides/08-agi' },
          { text: '9. Музыка', link: '/slides/09-muzyka' },
          { text: '10. Вопросы и прозрение', link: '/slides/10-voprosy-i-prozrenie' }
        ]
      },
      { text: 'Заключение', link: '/outro' }
    ]
  }
}