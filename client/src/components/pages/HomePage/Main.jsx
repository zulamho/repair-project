import { Grid } from "@material-ui/core"
import React from "react"
import { useSelector, useDispatch } from "react-redux"

function Main() {
    const dispatch = useDispatch()
    const service  = useSelector((state => state.service.service))

    return (
        service?.map((item) => {
            return (
                <Grid>
                    {item.name}
                </Grid>
            )
        })
    )
}

export default Main