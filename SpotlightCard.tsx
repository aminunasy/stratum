// Spotlight Card component with cursor-following border glow effect
import React, { useState, useRef, type CSSProperties } from "react"
import { motion } from "framer-motion"
import { addPropertyControls, ControlType } from "framer"

interface SpotlightCardProps {
    spotlightColor: string
    borderWidth: number
    backgroundColor: string
    cornerRadius: number
    spotlightSize: number
    children?: React.ReactNode
    style?: CSSProperties
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 * @framerIntrinsicWidth 400
 * @framerIntrinsicHeight 300
 */
export default function SpotlightCard(props: SpotlightCardProps) {
    const {
        spotlightColor = "#3b82f6",
        borderWidth = 2,
        backgroundColor = "#1a1a1a",
        cornerRadius = 16,
        spotlightSize = 200,
        children,
        style,
    } = props

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return

        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        setMousePosition({ x, y })
    }

    const handleMouseEnter = () => {
        setIsHovering(true)
    }

    const handleMouseLeave = () => {
        setIsHovering(false)
    }

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                ...style,
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: cornerRadius,
                padding: borderWidth,
                background: isHovering
                    ? `radial-gradient(${spotlightSize}px circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 100%)`
                    : "rgba(255, 255, 255, 0.1)",
                transition: isHovering ? "none" : "background 0.3s ease-out",
            }}
        >
            {/* Inner card content */}
            <motion.div
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: backgroundColor,
                    borderRadius: cornerRadius - borderWidth / 2,
                    padding: "24px",
                    position: "relative",
                    overflow: "hidden",
                }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
            >
                {children || (
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "rgba(255, 255, 255, 0.6)",
                            fontSize: "16px",
                            textAlign: "center",
                            fontFamily: "system-ui, -apple-system, sans-serif",
                        }}
                    >
                        Hover over me
                        <br />
                        to see the spotlight effect
                    </div>
                )}
            </motion.div>
        </div>
    )
}

addPropertyControls(SpotlightCard, {
    spotlightColor: {
        type: ControlType.Color,
        title: "Spotlight Color",
        defaultValue: "#3b82f6",
    },
    borderWidth: {
        type: ControlType.Number,
        title: "Border Width",
        min: 1,
        max: 10,
        step: 1,
        unit: "px",
        defaultValue: 2,
    },
    backgroundColor: {
        type: ControlType.Color,
        title: "Background Color",
        defaultValue: "#1a1a1a",
    },
    cornerRadius: {
        type: ControlType.Number,
        title: "Corner Radius",
        min: 0,
        max: 50,
        step: 1,
        unit: "px",
        defaultValue: 16,
    },
    spotlightSize: {
        type: ControlType.Number,
        title: "Spotlight Size",
        description: "Size of the radial gradient spotlight effect",
        min: 50,
        max: 500,
        step: 10,
        unit: "px",
        defaultValue: 200,
    },
})
