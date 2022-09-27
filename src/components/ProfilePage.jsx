import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import makeData from "./makeData";
import styled from "styled-components";
import { useTable, useSortBy } from "react-table";

const Styles = styled.div`
  padding: 1rem;
  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

const newData = () => {
  return {
    movieName: [
      "The Eternal Sunshine the Sportless Mind",
      "Spiderman",
      "Alabahama",
    ],
    movieId: ["1", "3", "4", "8"],
    genre: ["action", "dram", "war", "science-fiction"],
    icon: <FavFilled></FavFilled>,
  };
};
function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows.slice(0, 20);

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <div>Mostrando los primeros 20 resultados de {rows.length} renglones</div>
    </>
  );
}

function Profile(props) {
  const [choose, setChoose] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState([null, null]);

  const handleChange = (event) => {
    setChoose(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Lista de usuarios",
        columns: [
          {
            Header: "ID de la película",
            accessor: "id",
          },
          {
            Header: "Título de la película",
            accessor: "movieName",
          },
          {
            Header: "Género",
            accessor: "genre",
          },
          {
            Header: "ïcono",
            accessor: "icon",
          },
        ],
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(2000), []);
  return (
    <>
      <h1>Perfil</h1>
      <Button sx={{ display: "block", mt: 2 }} onClick={handleOpen}>
        Abre la selección
      </Button>
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id="demo-controlled-open-select-label">Ordenar</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={choose}
          label="Sort"
          onChange={handleChange}
        >
          <MenuItem value="Sort Movies"></MenuItem>
          <MenuItem value={10}>Fecha de lanzamiento más cercana</MenuItem>
          <MenuItem value={20}>Favoritos</MenuItem>
          <MenuItem value={30}>Lista visto</MenuItem>
        </Select>
      </FormControl>
      <Styles>
        <Table columns={columns} data={data} />
      </Styles>
    </>
  );
}

export default Profile;
