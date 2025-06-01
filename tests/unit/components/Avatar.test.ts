import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import Avatar from '@/components/Avatar.vue'
import { UserModel } from '@/models'

describe('Avatar Component', () => {
  it('renders with default avatar when user has no picture', () => {
    const user = new UserModel({
      firstName: 'John',
      lastName: 'Doe'
    })
    
    render(Avatar, {
      props: {
        user,
        size: 'md'
      }
    })
    
    const img = screen.getByRole('img')
    expect(img).toBeTruthy()
    expect(img.getAttribute('alt')).toBe('John Doe')
    expect(img.getAttribute('src')).toContain('default.png')
    expect(img.classList.contains('avatar-md')).toBe(true)
  })
  
  it('renders with user picture when available', () => {
    const user = new UserModel({
      firstName: 'Jane',
      lastName: 'Smith',
      picture: 'https://example.com/avatar.jpg'
    })
    
    render(Avatar, {
      props: {
        user,
        size: 'lg'
      }
    })
    
    const img = screen.getByRole('img')
    expect(img).toBeTruthy()
    expect(img.getAttribute('alt')).toBe('Jane Smith')
    expect(img.getAttribute('src')).toBe('https://example.com/avatar.jpg')
    expect(img.classList.contains('avatar-lg')).toBe(true)
  })
  
  it('uses small size by default', () => {
    const user = new UserModel({
      firstName: 'Test',
      lastName: 'User'
    })
    
    render(Avatar, {
      props: {
        user
      }
    })
    
    const img = screen.getByRole('img')
    expect(img.classList.contains('avatar-sm')).toBe(true)
  })
  
  it('handles null user gracefully', () => {
    render(Avatar, {
      props: {
        user: null
      }
    })
    
    const img = screen.getByRole('img')
    expect(img).toBeTruthy()
    expect(img.getAttribute('alt')).toBe(' ')
    expect(img.getAttribute('src')).toContain('default.png')
  })
})