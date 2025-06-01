import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { i18n } from  '../../setupI18n'
import DoctorContact from '@/components/DoctorContact.vue'

import type { Supplier } from '@/types'

const global = {
  plugins: [i18n]
}

describe('DoctorContact Component', () => {
  it('renders supplier name correctly', () => {
    const supplier: Supplier = {
      id: '1',
      name: 'Test Clinic',
      logo: null,
      headquarters: []
    }

    render(DoctorContact, {
      props: {
        supplier
      },
      global
    })

    expect(screen.getByText(i18n.global.t('doctor_contact.title'))).toBeTruthy()
    expect(screen.getByText(i18n.global.t('doctor_contact.call_action'))).toBeTruthy()

  })

  it('uses default logo when supplier logo is null', () => {
    const supplier: Supplier = {
      id: '1',
      name: 'Test Clinic',
      logo: null,
      headquarters: []
    }

    render(DoctorContact, {
      props: {
        supplier
      },
      global
    })

    const img = screen.getByRole('img')
    expect(img.getAttribute('src')).toContain('default_supplier')
  })

  it('uses supplier logo when available', () => {
    const supplier: Supplier = {
      id: '1',
      name: 'Test Clinic',
      logo: 'https://example.com/logo.jpg',
      headquarters: []
    }

    render(DoctorContact, {
      props: {
        supplier
      },
      global
    })

    const img = screen.getByRole('img')
    expect(img.getAttribute('src')).toBe('https://example.com/logo.jpg')
  })

  it('displays headquarters correctly when there are 3 or fewer', () => {
    const supplier: Supplier = {
      id: '1',
      name: 'Test Clinic',
      logo: null,
      headquarters: ['Madrid', 'Barcelona', 'Valencia']
    }

    render(DoctorContact, {
      props: {
        supplier
      },
      global
    })


    expect(screen.getByText(/3/)).toBeTruthy()
    expect(screen.getByText(/Madrid, Barcelona, Valencia/)).toBeTruthy()
  })

  it('truncates headquarters when there are more than 3', () => {
    const supplier: Supplier = {
      id: '1',
      name: 'Test Clinic',
      logo: null,
      headquarters: ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Bilbao']
    }

    render(DoctorContact, {
      props: {
        supplier
      },
      global
    })


    expect(screen.getByText(/5/)).toBeTruthy()
    expect(screen.getByText(/Madrid, Barcelona, Valencia\.\.\./)).toBeTruthy()
  })

})
