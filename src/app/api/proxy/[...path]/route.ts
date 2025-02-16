import { NextRequest, NextResponse } from 'next/server'
import { BASE_API_URL } from '@/shared/config'

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const token = req.cookies.get('token')?.value
  const { path } = await params
  if (!token)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await req.json()
  const response = await fetch(`${BASE_API_URL}/${path.join('/')}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  const data = await response.json()
  return NextResponse.json(data)
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params
  const response = await fetch(`${BASE_API_URL}/${path.join('/')}`, {
    method: 'GET',
  })
  const data = await response.json()
  return NextResponse.json(data)
}
