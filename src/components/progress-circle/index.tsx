import React from "react"
import style from "./style.module.css"

type Props = {
    percent: number
}

export default function ProgressCircle({ percent }: Props) {
    const [styleSvg, setStyleSvg] = React.useState({
        strokeDasharray: '0'
    })
    const refSvg = React.useRef<SVGSVGElement>(null)

    function getColor(percent: number) {
        return percent < 50 ? "var(--color-error)" : "var(--color-success)"
    }

    React.useEffect(() => {
        const roundPercent = Number(refSvg.current?.getAttribute("data-percent"))
        const roundCircum = 2 * 36 * Math.PI
        const roundDraw = roundPercent * roundCircum / 100
        setStyleSvg({ strokeDasharray: roundDraw + ' 999' })
    }, [])

    return (
        <div className={style["progress-circle"]}>
            <svg ref={refSvg} style={styleSvg} data-percent={percent} width="92" height="92" viewBox="-11.5 -11.5 115 115">
                <circle r="36" cx="46" cy="46" fill="transparent" stroke="#e0e0e0" strokeDasharray={"0"}></circle>
                <circle r="36" cx="46" cy="46" stroke={getColor(percent)} strokeWidth="10px" fill="transparent"></circle>
                <text x="28px" y="52px" fill={getColor(percent)}>{percent}%</text>
            </svg>
        </div>
    )
}