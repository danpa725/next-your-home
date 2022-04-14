import "styled-components"
import { CommonThemeProperty } from "@styles/utils/CustomeTheme"

declare module "styled-components" {
    export interface DefaultTheme extends CommonThemeProperty {
        containerBackgroundColor: string
        containerBorderColor: string
        headerFontColor: string
        descriptionFontColor: string
        tagFontColor: string
        themeOpacity: number
        themePrimaryColor: string
    }
}
