import xlsx, { IJsonSheet } from "json-as-xlsx";



export function downloadToExcel({ props }: any) {
    let columns: IJsonSheet[] = [
        {
            sheet: "Persons",
            columns: [
                { label: "Person ID", value: "id" },
                { label: "First Name", value: "first_name" },
                { label: "Last Name", value: "last_name" },
                { label: "Email", value: "email" },
                { label: "Gender", value: "gender" },

            ],
            content: props.data,
        },
    ];

    let settings = {
        fileName: "Logs Data",
    };

    xlsx(columns, settings);
}