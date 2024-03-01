import { createContext, useState } from "react"

const myOrderContext = createContext(null)

const myOrderProvider = (props) => {
    const [myOrders,setMyOrders] = useState([])
    return (<myOrderContext.Provider>
        {props.children}
    </myOrderContext.Provider>);
}