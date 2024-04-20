import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

export default function CardValue({ analysis, value }: { analysis: String, value: string }) {
    return (
        <Card className="w-full">
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-xl font-bold">{analysis}</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody className="text-center p-8">
                <span className=" my-auto text-5xl  font-bold">{value}</span>
            </CardBody>
            <Divider />
        </Card>
    );
}
