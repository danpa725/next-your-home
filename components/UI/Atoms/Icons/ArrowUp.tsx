import { SVGProps } from "react"

const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m12.007 13.165.354-.002c1.404-.012 2.657-.096 3.451-.242.015 0 .802-.16 1.064-.261.38-.16.701-.447.905-.809a2 2 0 0 0 .219-.91c-.012-.249-.137-.66-.242-.954l-.094-.244c-.642-1.617-2.74-4.707-4.024-5.891l-.09-.087-.42-.39A1.856 1.856 0 0 0 11.992 3c-.379 0-.758.116-1.064.347-.099.07-.226.18-.334.28l-.397.379C8.876 5.31 7.022 8.135 6.407 9.599c-.013 0-.393.91-.407 1.343v.057c0 .665.379 1.286.991 1.603.168.087.496.17.784.233l.544.114c.874.13 2.216.216 3.688.216Zm-1.525 6.332c0 .83.68 1.503 1.518 1.503a1.51 1.51 0 0 0 1.518-1.503l-.328-3.7c0-.65-.532-1.179-1.19-1.179-.658 0-1.191.528-1.191 1.18l-.327 3.699Z"
            fill={props?.fill}
        />
    </svg>
)

export default SvgArrowUp
