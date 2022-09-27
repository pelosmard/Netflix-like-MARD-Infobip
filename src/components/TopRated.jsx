import React, { useEffect, useState } from "react";
//import FilterPage from './SortFilter/FilterPage';
import SortFilter from "./SortFilter/SortFilter";
import { API_KEY, BASE_API, fetchTopRatedMovies, img_url } from "../api";
import Card from "./Card";
import sliderSettings from "./Slider";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ButtonCard from "./IconButtons/ButtonCard";
import FilterPage from "./SortFilter/FilterPage";
import topratedSliderSettings from "./TopratedSliderSettings";
import { Button, Grid } from "@mui/material";
import styled from "styled-components";

function TopRated(props) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [genreId, setGenreId] = useState();

  const fetchLoadMore = async (page) =>
    await BASE_API.get(
      `/movie/popular?api_key=${API_KEY}&page=${page}&with_genres=${genreId}`
    ).then((response) => {
      const movies = response.data.results;
      const subData = [];
      subData.push(...data);
      subData.push(...movies);
      setData(subData);
    });

  useEffect(() => {
    fetchLoadMore(page);
    console.log(page);
    console.log(data);
  }, [page]);

  return (
    <>
      <h1 className="offset-1">Películas Mejor Calificadas</h1>
      <div className="container-fluid row ">
        <div className="col-sm-4">
          <FilterPage />
        </div>
        <div className="col-sm-8">
          {/* <Slider {...topratedSliderSettings}> */}
          <div className="container d-flex flex-wrap allign-item-space-between">
            {data?.map(
              (item, index) => (
                console.log(item),
                (
                  <Grid style={{ justifyContent: "space-around" }}>
                    <Link
                      to={`/detail/${item.id} `}
                      style={{ color: "#323232", textDecoration: "none" }}
                    >
                      <ButtonCard style={{ width: "13rem" }} />
                      <Card
                        img={`${img_url}${item.poster_path}`}
                        title={item.title}
                        releaseDate={item.release_date}
                        id={item.id}
                        style={{ width: "13rem", marginRight: "2%" }}
                      />
                    </Link>
                    {console.log(img_url + item.poster_path)}
                  </Grid>
                )
              )
            )}
          </div>
          <LoadButton
            className="allign-item-center"
            onClick={() => setPage(page + 1)}
          >
            Carga más
          </LoadButton>
          {/* </Slider> */}
        </div>
      </div>

      {/* <SortFilter/> */}
    </>
  );
}

export default TopRated;

const LoadButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  margin-left:
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #ff5e57;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

