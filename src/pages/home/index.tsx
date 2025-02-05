import { Card, Skeleton } from "@components"

export default function Home() {
    return (
        <>
            <h1>Page Home</h1>
            <Card>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 15,
                    }}
                >
                    <Skeleton animation="scale">
                        <div style={{ height: 100 }}></div>
                    </Skeleton>
                    <Skeleton variant="line">
                        <div style={{ height: 100 }}></div>
                    </Skeleton>
                    <Skeleton variant="square">
                        <div style={{ height: 100 }}></div>
                    </Skeleton>
                </div>
            </Card>
        </>
    )
}
