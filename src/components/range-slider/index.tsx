import React from "react"
import style from "./style.module.css"

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    ticks?: boolean
    label?: string
    handleChange?: (value: number) => void
}

export default React.forwardRef<HTMLInputElement, Props>(({ ticks, label = "%", handleChange, ...rest }, ref) => {
    const [value, setValue] = React.useState<number>(Number(rest.defaultValue || 0))

    const inputRef = React.useRef<HTMLInputElement>(null)
    const outputRef = React.useRef<HTMLOutputElement>(null)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value, 10)
        setValue(newValue)
        handleChange && handleChange(newValue)
    }

    function calculateOutputLeft() {
        const slider = inputRef.current
        if (!slider) return "0%"
        const { min, max } = inputRef.current
        const percent = ((value - Number(min)) / (Number(max) - Number(min))) * 100
        const outputWidth = outputRef.current ? outputRef.current.clientWidth / 2 : 0
        let positionLeft = (percent / 100) * (slider.clientWidth - outputWidth * 2)
        positionLeft = Math.min(positionLeft, slider.clientWidth - outputWidth * 2)
        positionLeft = Math.max(positionLeft, 0)
        return `${positionLeft}px`
    }

    React.useEffect(() => {
        if (outputRef.current) {
            outputRef.current.style.left = calculateOutputLeft()
        }
    }, [value])

    return (
        <div ref={ref} className={`${style["range-slider"]} ${rest.className || ""}`}>
            <input
                ref={inputRef}
                {...rest}
                defaultValue={undefined}
                type="range"
                min={0}
                max={rest.max || 100}
                step={5}
                value={value}
                onChange={handleInputChange}
                className={style["range-slider__input"]}
            />
            <output ref={outputRef} className={style["range-slider__output"]}>
                {`${value} ${label}`}
            </output>
            {
                ticks &&
                <React.Fragment>
                    <div className={style["range-slider__progress"]} style={{ width: `${value}%` }}></div>
                    <div className={style["range-slider__ticks"]}>
                        {[...Array(21)].map((_, index) => (
                            <div key={index} className={style["range-slider__tick"]} style={{ left: `${index * 5}%` }}></div>
                        ))}
                    </div>
                </React.Fragment>
            }
        </div>
    )
})