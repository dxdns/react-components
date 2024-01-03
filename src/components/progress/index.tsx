import React from "react"
import "./style.css"

type Props = {
    percent: number
}

export default function Progress({ percent }: Props) {
    const [style, setStyle] = React.useState({
        strokeDasharray: '0'
    })
    const refSvg = React.useRef<SVGSVGElement>(null)

    function getColor(percent: number) {
        return percent < 50 ? "var(--color-danger)" : "var(--color-success)"
    }

    React.useEffect(() => {
        const roundPercent = Number(refSvg.current?.getAttribute("data-percent"))
        const roundCircum = 2 * 36 * Math.PI
        const roundDraw = roundPercent * roundCircum / 100
        setStyle({ strokeDasharray: roundDraw + ' 999' })
    }, [])

    return (
        <div className="progress">
            <svg ref={refSvg} style={style} data-percent={percent} width="92" height="92" viewBox="-11.5 -11.5 115 115">
                <circle r="36" cx="46" cy="46" fill="transparent" stroke="#e0e0e0" strokeDasharray={"0"}></circle>
                <circle r="36" cx="46" cy="46" stroke={getColor(percent)} strokeWidth="10px" fill="transparent"></circle>
                <text x="28px" y="52px" fill={getColor(percent)} fontSize="21px" fontWeight="bold">{percent}%</text>
            </svg>
        </div>
    )
}