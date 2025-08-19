import { type NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    // GET the data you need
    return NextResponse.json({ message: 'hello from /api/__route__ API GET' });
  } catch (err) {
    return NextResponse.json(
      {
        message: 'Error on the server with GET for /api/__route__',
        err,
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // add something to some data

    return NextResponse.json({ message: 'Created new item.' }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { message: 'Error on the server with POST for /api/__route__', err },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();

    // update something in your data

    return NextResponse.json({ message: 'Updated the data.' });
  } catch (err) {
    return NextResponse.json(
      { message: 'Error on the server with POST for /api/__route__', err },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();

    // delete something in your data

    return NextResponse.json({
      message: 'The data has been permanently deleted.',
    });
  } catch (err) {
    return NextResponse.json(
      { message: 'Error on the server with POST for /api/__route__', err },
      { status: 500 }
    );
  }
}
