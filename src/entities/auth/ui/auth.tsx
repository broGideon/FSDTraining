'use client'

import { useState } from 'react'

export const Auth = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // const res = await fetch(`${BASE_API_URL}/userAuth/login`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ login, password }),
    // })
    const res = await fetch(`/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login, password }),
    })
    const { token } = await res.json()
    localStorage.setItem('token', token)
    setLoading(false)

    if (!res.ok) {
      setError('Ошибка авторизации')
      return
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-80 rounded-lg bg-gray-100 p-6 shadow-md"
    >
      <h2 className="mb-4 text-xl font-bold">Вход</h2>

      {error && <p className="text-red-500">{error}</p>}

      <input
        type="text"
        placeholder="Логин"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        className="mb-3 w-full rounded border border-gray-300 p-2"
        required
      />

      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-3 w-full rounded border border-gray-300 p-2"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded bg-blue-500 py-2 text-white transition hover:bg-blue-600"
      >
        {loading ? 'Вход...' : 'Войти'}
      </button>
    </form>
  )
}
