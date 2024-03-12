import React, { ComponentType, FC, useState, useRef, useEffect, useMemo } from "react"
import { AppStackScreenProps, TabStackScreenProps } from "../../App"
import { BasicScreen } from "../component/BasicScreen"

interface StudyWithMeListScreenProps extends TabStackScreenProps<"StudyWithMeList">{}

export const StudyWithMeListScreen: FC<StudyWithMeListScreenProps> = function StudyWithMeLsitScreen(_props){
    const { navigation } = _props
    
    return (
        <BasicScreen>
            
        </BasicScreen>
    )
}