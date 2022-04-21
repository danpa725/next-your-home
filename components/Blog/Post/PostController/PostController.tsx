import { PostControllerType as PostControllerPreviewProps } from "@/types/post/content"

import styled, { css } from "styled-components"
import animation from "@/styles/utils/animation"
import media from "@/styles/utils/media"
import shadow from "@/styles/utils/shadow"

import { useEffect, useState } from "react"
import Link from "next/link"
import { sliceTextByMaxLength } from "@/utils/function/text"
import { HomeIcon, NextIcon, PrevIcon } from "@/components/UI/Atoms/Icons"
import { IsLight } from "@/types/theme"
import { useThemeIsLight } from "@/hooks"

const ControllerContainer = styled.div<IsHover>`
    transition: width cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.35s;
    width: ${({ isHover }) => (isHover ? "29rem" : "2.75rem")};
    min-width: 2.75rem;

    position: fixed;
    bottom: 1.75rem;
    left: 50%;
    transform: translate(-50%, -1.5rem);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    background-color: ${(p) =>
        `${p.theme.containerBackgroundColor}${p.theme.opacity80}`};
    backdrop-filter: blur(10px);

    padding: 0.65rem;

    box-shadow: ${shadow.shadowXxlg};

    border: 0.1rem solid ${(p) => p.theme.containerBorderColor};
    border-radius: 50rem;

    ${media.widePhone} {
        width: 83.5%;
        padding: 0.5rem;
        gap: 0.25rem;

        justify-content: space-between;
        background-color: ${(p) => p.theme.containerBackgroundColor};
        backdrop-filter: unset;

        bottom: 0.75rem;
        left: 50%;
        transform: translate(-50%, -0.75rem);
    }
`

const ControllerButtonStyle = {
    prev: css`
        border-radius: ${(p) => p.theme.bRound};
    `,
    next: css`
        border-radius: ${(p) => p.theme.bRound};
    `,
    category: css`
        border-radius: ${(p) => p.theme.bxlg};
    `,
}

interface ControllerButtonType {
    buttonType: keyof typeof ControllerButtonStyle
}

interface IsHover {
    isHover: boolean
}

const ControllerButton = styled.button<ControllerButtonType & IsLight>`
    transition: all ease-out 0.25s;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 2.5rem;
    width: 2.5rem;
    min-width: 2.5rem;
    padding: 0.25rem;

    background-color: ${({ theme, isLight }) =>
        isLight ? theme.gray1 : theme.trueDeepDark};
    border: 0.1rem solid ${(p) => p.theme.containerBorderColor};

    svg {
        fill: ${(p) => p.theme.fontColor};
    }

    &:hover {
        background-color: ${({ theme, isLight }) =>
            isLight ? theme.gray2 : theme.deepDark};
        border-color: ${({ theme }) => theme.gray5};
    }

    ${({ buttonType }) => ControllerButtonStyle[buttonType]};

    ${media.widePhone} {
        width: 2rem;
        height: 2rem;
        min-width: 2rem;
        min-height: 2rem;
    }
`
const InfoContainer = styled.div<IsHover>`
    display: ${({ isHover }) => (isHover ? "flex" : "none")};
    flex-direction: row;
    align-items: center;
    justify-content: center;

    animation: ${animation.fadeIn} ease-out 1s;

    ${media.widePhone} {
        display: flex;
        gap: 0.25rem;
    }

    ${media.mediumPhone} {
        display: flex;
        gap: 0.5rem;
    }
`

const PostTitleText = styled.p<IsLight>`
    transition: color, border ease-out 0.25s;
    min-width: 10rem;

    color: ${(p) => p.theme.gray5};
    font-weight: 600;
    font-size: ${(p) => p.theme.xsm};
    text-align: center;

    padding-top: 0.35rem;
    padding-bottom: 0.1rem;

    margin: 0 0.25rem;

    border-bottom: 0.25rem solid transparent;

    &:hover {
        border-color: ${({ theme, isLight }) =>
            isLight ? theme.gray3 : theme.gray5};
        color: ${({ theme, isLight }) => isLight && theme.gray7};
    }

    cursor: pointer;

    ${media.widePhone} {
        min-width: unset;
        width: 5rem;

        font-weight: 400;

        padding: 0;

        border-bottom: none;
    }

    ${media.mediumPhone} {
        min-width: unset;
        width: 3.5rem;
    }
`

interface PostControllerProps extends PostControllerPreviewProps {
    categoryURL: string
}

const TITLE_MAX_LENGTH = 15
const POST_CONTROLLER_CLOSE_TIME = 5000

function PostController({
    prevPost,
    nextPost,
    categoryURL,
}: PostControllerProps) {
    const [isHover, setIsHover] = useState(true)

    const prevPostTitle = sliceTextByMaxLength(prevPost.title, TITLE_MAX_LENGTH)
    const nextPostTitle = sliceTextByMaxLength(nextPost.title, TITLE_MAX_LENGTH)

    useEffect(() => {
        const setHoverFalseAfterSecond = setTimeout(
            () => setIsHover(false),
            POST_CONTROLLER_CLOSE_TIME
        )
        return () => clearTimeout(setHoverFalseAfterSecond)
    }, [])

    const isLight = useThemeIsLight()

    return (
        <ControllerContainer
            isHover={isHover}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <Link href={prevPost.postUrl} passHref>
                <InfoContainer isHover={isHover}>
                    <ControllerButton
                        buttonType="prev"
                        type="button"
                        aria-label="previous post"
                        isLight={isLight}
                    >
                        <PrevIcon width="18px" height="18px" />
                    </ControllerButton>
                    <PostTitleText isLight={isLight}>
                        {prevPostTitle}
                    </PostTitleText>
                </InfoContainer>
            </Link>

            <Link href={categoryURL} passHref>
                <ControllerButton
                    buttonType="category"
                    type="button"
                    aria-label="back to category"
                    isLight={isLight}
                >
                    <HomeIcon width="18px" height="18px" />
                </ControllerButton>
            </Link>

            <Link href={nextPost.postUrl} passHref>
                <InfoContainer isHover={isHover}>
                    <PostTitleText isLight={isLight}>
                        {nextPostTitle}
                    </PostTitleText>
                    <ControllerButton
                        buttonType="next"
                        type="button"
                        aria-label="next post"
                        isLight={isLight}
                    >
                        <NextIcon width="18px" height="18px" />
                    </ControllerButton>
                </InfoContainer>
            </Link>
        </ControllerContainer>
    )
}

export default PostController
