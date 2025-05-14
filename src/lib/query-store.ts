import { Derived, Store } from '@tanstack/store';

import type {
  Conditions,
  Entity,
  EntityColumns,
  GroupColumns,
  OrderColumns,
} from '@/types';

export const queryStore = new Store({
  columns: [] as EntityColumns,
  primaryEntity: {} as Entity,
  conditions: [] as Conditions,
  orders: [] as OrderColumns,
  groups: [] as GroupColumns,
});

export const sqlQuery = new Derived({
  fn: () => {
    const queryLines = [
      'SELECT',
      `\t${queryStore.state.columns
        .map((column) => `${column.entity}.${column.name}`)
        .join(',\n\t')}`,
      `FROM ${queryStore.state.primaryEntity.schema}.${queryStore.state.primaryEntity.name} ${queryStore.state.primaryEntity.schema}_${queryStore.state.primaryEntity.name}`,
      'WHERE',
      `\t${queryStore.state.conditions
        .map(
          (condition) =>
            `${condition.column.entity}.${condition.column.name} ${condition.type} ${condition.value}`
        )
        .join('AND\n\t')}`,
      'GROUP BY',
      `\t${queryStore.state.groups
        .map((group) => `${group.column.entity}.${group.column.name}`)
        .join(',\n\t')}`,
      'ORDER BY',
      `\t${queryStore.state.orders
        .map((order) => `${order.column} ${order.asc ? 'ASC' : 'DESC'}`)
        .join(',\n\t')}`,
    ];

    return queryLines.join('\n');
  },
  deps: [queryStore],
});

export const unmountSqlQuery = sqlQuery.mount();
