import React from "react"
import "./progress.css"

type Props = {
    percent: number
}

export default function Progress({ percent }: Props) {
    const [style, setStyle] = React.useState({
        strokeDasharray: '0'
    })
    const refSvg = React.useRef<SVGSVGElement>(null)

    React.useEffect(() => {
        const roundPercent = Number(refSvg.current?.getAttribute("data-percent"))
        const roundCircum = 2 * 36 * Math.PI
        const roundDraw = roundPercent * roundCircum / 100
        setStyle({ strokeDasharray: roundDraw + ' 999' })
    }, [])

    return (
        <div className="progress">
            <svg ref={refSvg} style={style} data-percent={percent}>
                <circle cx="38" cy="38" r="36"></circle>
            </svg>
            <div className="number">
                <p>{percent}%</p>
            </div>
        </div>
    )
}