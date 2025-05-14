export type EntityColumn = {
    name: string;
    type: "text" | "number" | "bool" | "date";
}

export type Entity = {
    schema: string;
    name: string;
    columns: Array<EntityColumn>;
}