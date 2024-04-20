import { PrismaClient, supplyOffers } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    const offers = await prisma.supplyOffers.findMany();
    return NextResponse.json(offers);
}