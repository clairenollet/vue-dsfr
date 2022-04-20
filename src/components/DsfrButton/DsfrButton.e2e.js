import { mount } from '@cypress/vue'
import DsfrButton from './DsfrButton.vue'
import { OhVueIcon as DsfrIcon } from 'oh-vue-icons'
import '../../main.css'

describe('DsfrButton', () => {
  it('Simple Button', () => {
    const buttonText = 'Test button'
    mount(DsfrButton, {
      global: {
        components: {
          DsfrIcon,
        },
      },
      slots: {
        default: () => buttonText,
      },
    })
      .get('button')
      .contains(buttonText)
      .click()
  })
})
