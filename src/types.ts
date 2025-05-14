export type EntityColumn = {
  entity: string;
  name: string;
  type: 'text' | 'number' | 'bool' | 'date';
};

export type EntityColumns = Array<EntityColumn>;

export type Entity = {
  schema: string;
  name: string;
  columns: EntityColumns;
};

export type DateRange = {
  start: Date;
  end: Date;
};

export type ConditionType = {
  label: string;
  value: string;
};

export type Condition = {
  column: EntityColumn;
  type: ConditionType;
  value:
    | string
    | number
    | boolean
    | Array<string>
    | Array<number>
    | Date
    | DateRange;
};

export type Conditions = Array<Condition>;

export type OrderColumn = {
  column: EntityColumn;
  asc: boolean;
};

export type OrderColumns = Array<OrderColumn>;

export type GroupColumn = {
  column: EntityColumn;
};

export type GroupColumns = Array<GroupColumn>;
