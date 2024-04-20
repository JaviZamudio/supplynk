import { PrismaClient, user } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json({ code: 200, message: "Users found", data: users });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ code: 401, message: "An error ocurred", error });
    }
}

export async function POST(request: NextRequest) {
    const { email, first_name, last_name, password, role } =
        await request.json();

    if (!email || !first_name || !last_name || !password || !role) {
        return NextResponse.json({ code: 400, message: "Missing fields" });
    }

    try {
        const newUser = await prisma.user.create({
            data: {
                email,
                first_name,
                last_name,
                password,
                role,
            },
        });
        return NextResponse.json({ code: 200, message: "User created", data: newUser });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ code: 401, message: "An error ocurred", error });
    }
}

export async function PATCH(request: NextRequest) {
    const { id, email, first_name, last_name, password, role } =
        await request.json();

    try {
        const updatedUser = await prisma.user.update({
            where: { id },
            data: {
                email,
                first_name,
                last_name,
                password,
                role,
            },
        });
        return NextResponse.json({ code: 200, message: "User updated", data: updatedUser });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ code: 401, message: "An error ocurred", error });
    }
}

export async function DELETE(request: NextRequest) {
    const { id } = await request.json();

    try {
        const deletedUser = await prisma.user.delete({
            where: { id },
        });
        return NextResponse.json({ code: 200, message: "User deleted", data: deletedUser });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ code: 401, message: "An error ocurred", error });
    }
}
