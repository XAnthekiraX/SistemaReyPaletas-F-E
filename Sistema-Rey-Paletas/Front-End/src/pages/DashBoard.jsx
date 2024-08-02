// import React from 'react'

import DashBoardCards from "../components/DashBoard/DashBoardCards";
import DashBoardProductTable from "../components/DashBoard/DashBoardProductTable";

export default function DashBoard() {
    return (
        <div className="h-full gap-5 w-full flex flex-col overflow-hidden overflow-y-auto p-7">
            <DashBoardCards/>
            <DashBoardProductTable/>
        </div>
    )
}
