import { inventoryColumns } from "../components/common/inventory/column";
import Table from "../components/common/table/table";

const Inventory = () => {
    const rows = [
        { id: 1, lastName: "afdasf", firstName: "dsafasd", age: 35 },
        { id: 2, lastName: "adfsf", firstName: "adfggdfg", age: 42 },
        { id: 3, lastName: "gfdsgf", firstName: "gfds", age: 45 },
        { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
        { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
        { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
        { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
        { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
        { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    ];
    return (
        <>
            Inventory
            <Table columns={inventoryColumns} rows={rows} />
        </>
    );
};

export default Inventory;
