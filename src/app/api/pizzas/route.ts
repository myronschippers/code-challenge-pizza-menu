import { type NextRequest, NextResponse } from 'next/server';

import { pizzaMenu } from '@/data';

export async function GET(_req: NextRequest) {
  try {
    return NextResponse.json({ data: pizzaMenu });
  } catch (err) {
    return NextResponse.json(
      {
        message: 'Error on the server with GET for /api/Pizzas',
        err,
      },
      { status: 500 }
    );
  }
}
