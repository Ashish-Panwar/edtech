import React from 'react';

export interface ColumnType<T> {
  accessor: keyof T;
  header: string;
  format?: (value: any) => React.ReactNode;
}

export interface ActionItem {
  label: string;
  onClick: (item: any) => void;
  variant?: 'default' | 'destructive';
}

interface AdminTableProps<T> {
  columns: ColumnType<T>[];
  data: T[];
  actions?: ActionItem[];
  showCheckbox?: boolean;
  onSelectAll?: (checked: boolean) => void;
  selectedRows?: Set<string | number>;
  onRowSelect?: (item: T, selected: boolean) => void;
  className?: string;

  total?: number;
  page?: number;
  limit?: number;
  onPageChange?: (page: number) => void;
  onLimitChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSortChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function AdminTable<T>({
  columns,
  data = [],
  actions = [],
  showCheckbox = false,
  onSelectAll,
  selectedRows = new Set<unknown>(),
  onRowSelect = () => {},
  className = '',
}: AdminTableProps<T>) {
  const getRowId = (row: T, key: keyof T | ((row: T) => string | number)): string | number => {
    if (typeof key === 'function') {
      return key(row);
    }
    return row[key];
  };

  const rowIdFn: keyof T | ((row: T) => string | number) = 'id' as keyof T;

  return (
    <div className={className}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {showCheckbox && (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input
                  type="checkbox"
                  checked={
                    data.length > 0 &&
                    data.every((row) => selectedRows.has(getRowId(row, rowIdFn)))
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      data.forEach((row) =>
                        selectedRows.add(getRowId(row, rowIdFn))
                      );
                      onSelectAll?.(true);
                    } else {
                      selectedRows.clear();
                      onSelectAll?.(false);
                    }
                  }}
                  className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.header}
              </th>
            ))}
            {actions.length > 0 && (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => {
            const itemId = getRowId(item, rowIdFn);
            const isSelected = selectedRows.has(itemId);
            return (
              <tr
                key={`${itemId}-${index}`}
                className={`hover:bg-gray-50 ${isSelected ? 'bg-indigo-50' : ''}`}
                onClick={
                  !showCheckbox || onRowSelect === undefined
                    ? undefined
                    : () => onRowSelect(item, !isSelected)
                }
              >
                {showCheckbox && (
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={(e) => {
                        if (e.target.checked) {
                          selectedRows.add(itemId);
                        } else {
                          selectedRows.delete(itemId);
                        }
                        onRowSelect?.(item, e.target.checked);
                      }}
                      className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                    />
                  </td>
                )}
                {columns.map((column) => {
                  const value = (item as any)[column.accessor];
                  const renderedValue = column.format
                    ? column.format(value)
                    : (
                        typeof value === 'date' || value instanceof Date
                          ? new Date(value).toLocaleDateString()
                          : value === null || value === undefined
                            ? '-'
                            : value
                      );
                  return (
                    <td key={column.accessor} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {renderedValue}
                    </td>
                  );
                })}
                {actions.length > 0 && (
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      {actions.map((action, index) => (
                        <button
                          key={index}
                          onClick={() => action.onClick(item)}
                          className={`px-3 py-1 text-sm font-medium ${
                            action.variant === 'destructive'
                              ? 'text-red-600 hover:text-red-500'
                              : 'text-indigo-600 hover:text-indigo-500'
                          }`}
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  </td>
                )}
              </tr>
            );
          })}
          {data.length === 0 && (
            <tr>
              <td
                colSpan={
                  (showCheckbox ? 1 : 0) +
                  columns.length +
                  (actions.length > 0 ? 1 : 0)
                }
                className="px-6 py-4 text-center text-gray-500"
              >
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}