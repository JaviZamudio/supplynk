import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

export default function CardValue({ analysis, value }: { analysis: String, value: number }) {
    return (
        <Card className="w-80 m-4">
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-xl font-bold">{analysis}</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody className="text-center">
                <h1 className="text-7xl  font-bold">{value}</h1>
            </CardBody>
            <Divider />
        </Card>
    );
}
