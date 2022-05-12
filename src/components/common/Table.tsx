import React, {ComponentPropsWithoutRef, forwardRef} from "react";
import {Column, useTable, Cell} from "react-table";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  white-space: nowrap;
  border-collapse: collapse;
`;

const THead = styled.thead`
  font-weight: 600;
  letter-spacing: 0.025em;
  line-height: 2rem;
  text-align: left;
  border-bottom: #919191 solid 1px;
`;

export const Td = styled.td`
  padding: 0.50rem 0.35rem;
  background: transparent;
  border-bottom: solid 1px #919191;
`;

export const Tr = styled.tr`
  &.row-hover {
    &:hover {
      transition-property: background-color;
      transition-duration: 150ms;
      background-color: #dedede;
      cursor: pointer;
    }
  }

  &.row-hover-without-pointer {
    &:hover {
      transition-property: background-color;
      transition-duration: 150ms;
      background-color: #dedede;
    }
  }
`;

interface TableProps extends ComponentPropsWithoutRef<"table"> {
    columns: Column<any>[];
    data: any[];
    rowOnClick?: (rowValue: any) => void;
}

const Table = forwardRef<HTMLTableElement, TableProps>((props, ref) => {
    const {columns, data, rowOnClick} = props;

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data: data ?? []
    });

    function getDataCell(
        cell: Cell<object, any>,
    ): JSX.Element {
        return (
            <Td
                {...cell.getCellProps()}
            >
                {cell.render("Cell")}
            </Td>
        );
    }

    function getDataRows() {
        return rows.map((row, i) => {
            prepareRow(row);
            return (
                <Tr
                    {...row.getRowProps()}
                    className={rowOnClick ? "row-hover" : "row-hover-without-pointer"}
                    key={i}
                    {...(rowOnClick ? {onClick: () => rowOnClick(row.original)} : {})}
                >
                    {row.cells.map((cell) =>
                        getDataCell(
                            cell as Cell<object, any>
                        )
                    )}
                </Tr>
            );
        });
    }

    return <StyledTable {...getTableProps()} ref={ref}>
        <THead>
            {headerGroups.map(headerGroup => (
                <Tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </Tr>
            ))}
        </THead>
        <tbody {...getTableBodyProps()}>
        {getDataRows()}
        </tbody>
    </StyledTable>;
});

export default Table;
