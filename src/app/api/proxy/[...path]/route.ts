import { NextRequest, NextResponse } from 'next/server'
import { BASE_API_URL } from '@/shared/config'

export async function POST(
  req: NextRequest,
  { params }: { params: { path: string[] } },
) {
  const token = req.cookies.get('token')?.value
  if (!token)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const response = await fetch(`${BASE_API_URL}/${params.path.join('/')}`, {
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
