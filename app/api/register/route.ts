import bcrypt from 'bcrypt';
import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request){
  try {
      const body = await request.json()

    const {name, email, password} = body

    if(!name || !email || !password){
        return new NextResponse('Missing fields', {status: 400})
    }

   
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return new NextResponse('User already exists', {status: 400})
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
        data: {
            email,
            name,
            hashedPassword
        }
    })

    return NextResponse.json(user)
  } catch (error) {
    console.log(error, "[REGISTRATION ERROR]");
    return new NextResponse('Internal server error', {status: 500})
       
  }
}