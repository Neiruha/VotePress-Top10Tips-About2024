import DefaultTheme from 'vitepress/theme'
import './index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    console.log('Скрипт запустился!')

    const waitForElement = (selector, callback) => {
      const element = document.querySelector(selector)
      if (element) {
        callback(element)
      } else {
        console.log(`Элемент ${selector} пока не найден, повторяем...`)
        setTimeout(() => waitForElement(selector, callback), 100)
      }
    }

    waitForElement('header.VPNav', (nav) => {
      console.log('Элемент панели найден:', nav)
      nav.style.background = 'rgba(255, 247, 245, 0.8)' // Применяем светло-розовый фон
      nav.style.color = '#333' // Тёмный текст

      // Меняем ссылки
      const links = nav.querySelectorAll('a')
      links.forEach(link => {
        link.style.color = '#333'
        link.addEventListener('mouseover', () => {
          link.style.color = '#ffcc00' // Золотой при наведении
        })
        link.addEventListener('mouseout', () => {
          link.style.color = '#333'
        })
      })

      // Убираем белый фон и отступы у внутренних элементов
      const search = nav.querySelector('.VPNavBarSearch')
      if (search) {
        search.style.display = 'none' // Полностью скрываем поиск
      }

      const contentBody = nav.querySelector('.content-body')
      if (contentBody) {
        contentBody.style.background = 'rgba(255, 247, 245, 0.8)' // Совмещаем с розовым
        contentBody.style.margin = '0'
        contentBody.style.padding = '0'
      }
    })
  }
}
