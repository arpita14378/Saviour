import React from 'react'
import { ExpenseCollection } from '../../../api/links';
import { useTracker } from 'meteor/react-meteor-data';
import MUIDataTable from "mui-datatables";

export default function ExpenseHistory() {


    const expenses = useTracker(() => {
        return ExpenseCollection.find().fetch();
    });
    const columns = ["date","spent", "amount"];

    const options = {
        filterType: 'checkbox',
    };
    return (
        <div>
            <h2>Expense Data</h2>
            <MUIDataTable
                title={"Expense List"}
                data={expenses}
                columns={columns}
                options={options}
            />
            <div style={{ height: 400, width: '100%' }}>

                {/* <DataGrid rows={expenses} id="id" columns={columns} pageSize={5} checkboxSelection /> */}
            </div>

        </div>
    );
}


