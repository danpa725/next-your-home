import styled from "styled-components"
import media from "@styles/utils/media"
import { iconStyle } from "@styles/utils/icon.style"

import React from "react"

import { IsLight } from "@typing/theme"

import useThemeMode from "@hooks/useThemeMode"

const ButtonStyled = styled.button<IsLight>`
    transition: all ease-out 0.1s;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 0.3rem 0.4rem;

    color: ${(p) => p.theme.fontColor};
    font-size: ${(p) => p.theme.sm};

    border-radius: ${(p) => p.theme.bxsm};
    border: transparent solid 1px;

    background-color: transparent;

    gap: 0.35rem;

    user-select: none;
    cursor: pointer;

    &:hover {
        border-color: ${({ isLight, theme }) =>
            isLight ? "transparent" : theme.fontColor};
        text-decoration: ${(p) => p.isLight && "underline"};
    }

    ${media.widePhone} {
        border: none;
        gap: 0.2rem;
    }

    ${iconStyle.md()};
`

interface ButtonProps {
    onClick?: (...arg: any[]) => any
    children: React.ReactNode
    type?: "button" | "submit" | "reset" | undefined
    ariaLabel: string
}
const Button = React.forwardRef<React.RefObject<HTMLElement>, ButtonProps>(
    ({ onClick, children, ariaLabel, type = "button" }, ref) => {
        const { isLight } = useThemeMode()
        return (
            <ButtonStyled
                onClick={onClick}
                isLight={isLight}
                aria-label={ariaLabel}
                type={type}
            >
                {children}
            </ButtonStyled>
        )
    }
)

Button.displayName = "button"
export default Button
