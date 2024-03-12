import React, { ComponentType, FC, useState, useRef, useEffect, useMemo } from "react"
import { AppStackScreenProps, TabStackScreenProps } from "../../App"
import { BasicScreen } from "../component/BasicScreen"

interface CameraScreenProops extends TabStackScreenProps<"Camera">{}

export const CameraScreen: FC<CameraScreenProops> = function CameraScreen(_props){
    const { navigation } = _props

    return(
        <BasicScreen>

        </BasicScreen>
    )
}