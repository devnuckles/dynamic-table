export const inventoryColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "Product name", width: 130 },
    { field: "lastName", headerName: "Manufacturer", width: 130 },
    {
        field: "age",
        headerName: "Quantity",
        type: "number",
        width: 90,
    },
    {
        field: "fullName",
        headerName: "Address",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (value, row) =>
            `${row.firstName || ""} ${row.lastName || ""}`,
    },
];
