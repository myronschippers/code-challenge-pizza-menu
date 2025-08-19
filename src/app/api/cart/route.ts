import { NextRequest, NextResponse } from 'next/server';

import { cartList, pizzaMenu, type CartPizza } from '@/data';

export async function GET() {
  try {
    const cart: CartPizza[] = cartList.map((cartItem) => {
      const matchedPizza = pizzaMenu.filter((pizzaItem) => {
        return pizzaItem.id === cartItem.pizzaId;
      })[0];

      return {
        id: cartItem.id,
        size: cartItem.size,
        pizza: matchedPizza,
        unitCost: matchedPizza?.sizes[cartItem.size],
      };
    });
    return NextResponse.json({ data: cart });
  } catch (err) {
    return NextResponse.json(
      {
        message: 'Error on the server with GET for /api/Cart',
        err,
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { pizzaId, size } = body;

    if (!pizzaId || !size) {
      return NextResponse.json(
        { message: 'Error: need pizzaId and size' },
        { status: 500 }
      );
    }

    const id = cartList.length + 1;
    cartList.push({
      id,
      size,
      pizzaId,
    });

    return NextResponse.json(
      { message: 'Pizza was added to the cart.' },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: 'Error on the server with POST for /api/Cart', err },
      { status: 500 }
    );
  }
}
