import { PrismaClient, companies } from '@prisma/client';
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const companies = await prisma.companies.findMany();
        return NextResponse.json({ code: 200, message: "Companies found", data: companies });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ code: 401, message: "An error occured" });
    }
}

export async function POST(req: NextRequest) {
    const { name, description, location } = await req.json();

    if (!name || !description || !location) {
        return NextResponse.json({ code: 400, message: "Missing required fields" });
    }

    try {
        const company = await prisma.companies.create({ data: { name, description, location } });
        return NextResponse.json({ code: 200, message: "Company created", data: company });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ code: 401, message: "An error occured" });
    }
}

export async function PATCH(req: NextRequest) {
    const { id, name, description, location } = await req.json();

    if (!id || !name || !description || !location) {
        return NextResponse.json({ code: 400, message: "Missing required fields" });
    }

    try {
        const company = await prisma.companies.update({ where: { id }, data: { name, description, location } });
        return NextResponse.json({ code: 200, message: "Company updated", data: company });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ code: 401, message: "An error occured" });
    }
}

export async function DELETE(req: NextRequest) {
    const { id } = await req.json();

    if (!id) {
        return NextResponse.json({ code: 400, message: "Missing required fields" });
    }

    try {
        await prisma.companies.delete({ where: { id } });
        return NextResponse.json({ code: 200, message: "Company deleted" });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ code: 401, message: "An error occured" });
    }
}