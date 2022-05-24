import styled from "styled-components"

import media from "@styles/utils/media"

import { IsLight } from "@typing/theme"
import { useSlector, _slector } from "@lib/recoil"

const TableStyled = styled.table<IsLight>`
    thead {
        th:first-child {
            border-top-left-radius: ${(p) => p.theme.bsm};
        }
        th:last-child {
            border-top-right-radius: ${(p) => p.theme.bsm};
        }
    }
    tbody {
        tr:nth-child(even) {
            background-color: ${({ theme, isLight }) =>
                isLight ? theme.gray1 : theme.trueDeepDark};
        }
        ${media.widePhone} {
            background-color: transparent;
        }
    }
    margin: 1.5rem 0;
`

const Table = (props: any) => {
    const { isLightState: isLight } = useSlector(_slector("isLight"))

    return <TableStyled {...props} isLight={isLight} />
}

export default Table
