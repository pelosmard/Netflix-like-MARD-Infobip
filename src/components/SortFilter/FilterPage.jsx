import React from "react";
import { useQuery } from "react-query";
import { Button, ButtonGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchSort, fetchSortFilterDiscover, img_url } from "../../api";
import ButtonCard from "../IconButtons/ButtonCard";
import sliderSettings from "../Slider";
import Slider from "react-slick";
import Card from "../Card";

function FilterPage(props) {
  const [genre_id, setGenre_id] = useState([]);
  const [sort, setSort] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [data, setData] = useState(false);
  const filtered = [];

  const sortQueryDiscover = useQuery(
    ["SortData", sort, dateTo, dateFrom, genre_id],
    () => fetchSortFilterDiscover(dateTo, dateFrom, genre_id, sort),
    {
      retry: false,
    }
  );

  function handleSearch() {
    setTimeout(
      () => console.log("data res-->", sortQueryDiscover.data.data.results),
      200
    );
    console.log("query-->", sortQueryDiscover);
    setData(true);
  }
  const dataResults = sortQueryDiscover?.data?.data?.results;

  if (!data) {
    return (
      <>
        <div className="col-sm-8">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) =>
              setSort(e.target.options[e.target.selectedIndex].value)
            }
          >
            <option hidden>Ordenado por</option>
            <option value="original_title.asc">
              De la A a la Z por el título
            </option>
            <option value="original_title.desc">Z a A por el título</option>
            <option value="popularity.asc">Aumentando por Popularidad</option>
            <option value="popularity.desc">Disminución por popularidad</option>
            <option value="release_date.gte">
              Aumento por fecha de lanzamiento
            </option>
            <option value="release_date.lte">
              Disminución por fecha de lanzamiento
            </option>
          </select>
          <div className=" d-flex flex-column">
            <h3 className="mt-3">Filtro por</h3>
            <label htmlFor="text" className="mt-3">
              De:
            </label>
            <input type="date" onChange={(e) => setDateTo(e.target.value)} />
            <label htmlFor="text" className="mt-3">
              A:
            </label>
            <input type="date" onChange={(e) => setDateFrom(e.target.value)} />
          </div>

          <ButtonGroup size="sm" className="mt-2">
            <Button
              className="m-2"
              variant="light"
              onClick={(e) => setGenre_id(e.target.value)}
              value={28}
              style={{ backgroundColor: "#9c88ff" }}
            >
              Acción
            </Button>
            <Button
              className="m-2"
              variant="light"
              onClick={(e) => setGenre_id(e.target.value)}
              value={12}
              style={{ backgroundColor: "#9c88ff" }}
            >
              Aventura
            </Button>
            <Button
              className="m-2"
              variant="light"
              onClick={(e) => setGenre_id(e.target.value)}
              value={35}
              style={{ backgroundColor: "#9c88ff" }}
            >
              Comedia
            </Button>
          </ButtonGroup>
          <ButtonGroup size="sm">
            <Button
              className="m-2"
              variant="light"
              onClick={(e) => setGenre_id(e.target.value)}
              value={10749}
              style={{ backgroundColor: "#9c88ff" }}
            >
              Romance
            </Button>
            <Button
              className="m-2"
              variant="light"
              onClick={(e) => setGenre_id(e.target.value)}
              value={18}
              style={{ backgroundColor: "#9c88ff" }}
            >
              Drama
            </Button>
            <Button
              className="m-2"
              variant="light"
              onClick={(e) => setGenre_id(e.target.value)}
              value={80}
              style={{ backgroundColor: "#9c88ff" }}
            >
              Crimen
            </Button>
          </ButtonGroup>
          <ButtonGroup size="sm">
            <Button
              className="m-2"
              variant="light"
              onClick={(e) => setGenre_id(e.target.value)}
              value={27}
              style={{ backgroundColor: "#9c88ff" }}
            >
              Horror
            </Button>
            <Button
              className="m-2"
              variant="light"
              onClick={(e) => setGenre_id(e.target.value)}
              value={878}
              style={{ backgroundColor: "#9c88ff" }}
            >
              Ciencia Ficción
            </Button>
            <Button
              className="m-2"
              variant="light"
              onClick={(e) => setGenre_id(e.target.value)}
              value={10752}
              style={{ backgroundColor: "#9c88ff" }}
            >
              Guerra
            </Button>
          </ButtonGroup>

          <Button
            className="m-2"
            variant="secondary"
            size="sm"
            onClick={handleSearch}
            style={{ backgroundColor: "#130f40" }}
          >
            Buscar
          </Button>
          {/* <Button
        className="m-2"
        variant="primary"
        size="sm"
        onClick={() => {
         filtered=[]
        }}
      >
        Reset
      </Button> */}
        </div>
        <h3>Resultados:</h3>
      </>
    );
  }
  if (data) {
    return (
      <>
        <select
          className="form-select"
          style={{ width: "100px" }}
          aria-label="Default select example"
          onChange={(e) =>
            setSort(e.target.options[e.target.selectedIndex].value)
          }
        >
          <option hidden>Ordenado por</option>
          <option value="original_title.asc">
            De la A a la Z por el título
          </option>
          <option value="original_title.desc">Z a A por el título</option>
          <option value="popularity.asc">Aumentando por Popularidad</option>
          <option value="popularity.desc">Disminución por popularidad</option>
          <option value="release_date.gte">
            Aumento por fecha de lanzamiento
          </option>
          <option value="release_date.lte">
            Disminución por fecha de lanzamiento
          </option>
        </select>
        <div className=" d-flex flex-column">
          <h3 className="mt-3">Filtro por</h3>
          <label htmlFor="text" className="mt-3">
            De:
          </label>
          <input type="date" onChange={(e) => setDateTo(e.target.value)} />
          <label htmlFor="text" className="mt-3">
            A:
          </label>
          <input type="date" onChange={(e) => setDateFrom(e.target.value)} />
        </div>

        <ButtonGroup size="sm" className="mt-2">
          <Button
            className="m-2"
            variant="warning"
            onClick={(e) => setGenre_id(e.target.value)}
            value={28}
            style={{ backgroundColor: "#9c88ff" }}
          >
            Acción
          </Button>
          <Button
            className="m-2"
            variant="warning"
            onClick={(e) => setGenre_id(e.target.value)}
            value={12}
            style={{ backgroundColor: "#9c88ff" }}
          >
            Aventura
          </Button>
          <Button
            className="m-2"
            variant="warning"
            onClick={(e) => setGenre_id(e.target.value)}
            value={35}
            style={{ backgroundColor: "#9c88ff" }}
          >
            Comedia
          </Button>
        </ButtonGroup>
        <ButtonGroup size="sm">
          <Button
            className="m-2"
            variant="warning"
            onClick={(e) => setGenre_id(e.target.value)}
            value={10749}
            style={{ backgroundColor: "#9c88ff" }}
          >
            Romance
          </Button>
          <Button
            className="m-2"
            variant="warning"
            onClick={(e) => setGenre_id(e.target.value)}
            value={18}
            style={{ backgroundColor: "#9c88ff" }}
          >
            Drama
          </Button>
          <Button
            className="m-2"
            variant="warning"
            onClick={(e) => setGenre_id(e.target.value)}
            value={80}
            style={{ backgroundColor: "#9c88ff" }}
          >
            Crimen
          </Button>
        </ButtonGroup>
        <ButtonGroup size="sm">
          <Button
            className="m-2"
            variant="warning"
            onClick={(e) => setGenre_id(e.target.value)}
            value={27}
            style={{ backgroundColor: "#9c88ff" }}
          >
            Horror
          </Button>
          <Button
            className="m-2"
            variant="warning"
            onClick={(e) => setGenre_id(e.target.value)}
            value={878}
            style={{ backgroundColor: "#9c88ff" }}
          >
            Ciencia Ficción
          </Button>
          <Button
            className="m-2"
            variant="warning"
            onClick={(e) => setGenre_id(e.target.value)}
            value={10752}
            style={{ backgroundColor: "#9c88ff" }}
          >
            Guerra
          </Button>
        </ButtonGroup>

        <Button
          className="m-2"
          variant="secondary"
          size="sm"
          onClick={handleSearch}
          style={{ backgroundColor: "#130f40" }}
        >
          Busqueda
        </Button>
        {/* <Button
      className="m-2"
      variant="primary"
      size="sm"
      onClick={() => {
       filtered=[]
      }}
    >
      Reset
    </Button> */}
        <h3>Resultados:</h3>
        <Slider {...sliderSettings}>
          {dataResults.map(
            (item, index) => (
              console.log(item),
              (
                <div key={index} className="col-sm-4">
                  <Link to={`/detail/${item.id} `} style={{ color: "black" }}>
                    <Card
                      img={`${img_url}${item.poster_path}`}
                      title={item.title}
                      releaseDate={item.release_date}
                      id={item.id}
                    />
                  </Link>
                  {console.log(img_url + item.poster_path)}
                </div>
              )
            )
          )}
        </Slider>
      </>
    );
  }
}

export default FilterPage;
