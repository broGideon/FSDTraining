import { NextRequest, NextResponse } from 'next/server'
import { BASE_API_URL } from '@/shared/config'

export async function POST(req: NextRequest) {
  try {
    const { login, password } = await req.json()

    const response = await fetch(`${BASE_API_URL}/userAuth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ login, password }),
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Ошибка авторизации' },
        { status: response.status },
      )
    }

    const { token } = await response.json()

    const res = NextResponse.json({ success: true })

    res.cookies.set('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })

    return res
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
  }
}
