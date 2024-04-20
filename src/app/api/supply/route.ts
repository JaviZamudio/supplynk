import { PrismaClient, supply } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {

        const supply = await prisma.supply.findMany()

        return NextResponse.json({ code: 200, message: "Supplies found", data: supply })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ code: 401, message: "An error occurred." })
    }
}

export async function POST(request: NextRequest) {
    const { name, description, stock, classification, curUserId } =
        await request.json();

    if (!name || !description || !stock || !classification) {
        return NextResponse.json({
            code: 401,
            message: "All fields are required."
        })
    }

    try {
        // const result = await prisma.supply.create({
        //     data: {
        //         name,
        //         description,
        //         stock,
        //         classification,
        //         user: 
        //     }
        // })

        return NextResponse.json({ code: 200, message: "Supply created", data: "hola" })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ code: 401, message: "An error occurred." })
    }
}

export async function PATCH(request: NextRequest) {
    const { id, name, description, stock, classification, userId, productId } =
        await request.json() as supply;

    if (!id || !name || !description || !stock || !classification) {
        return NextResponse.json({
            code: 401,
            message: "All fields are required."
        })
    }

    try {
        const result = await prisma.supply.update({
            where: { id },
            data: {
                name,
                description,
                stock,
                classification
            }
        })

        return NextResponse.json({ code: 200, message: "Supply updated", data: result })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ code: 401, message: "An error occurred." })
    }
}

export async function DELETE(request: NextRequest) {
    const { id } = await request.json();

    if (!id) {
        return NextResponse.json({
            code: 401,
            message: "Id is required."
        })
    }

    try {
        const result = await prisma.supply.delete({
            where: { id }
        })

        return NextResponse.json({ code: 200, message: "Supply deleted", data: result })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ code: 401, message: "An error occurred." })
    }
}
