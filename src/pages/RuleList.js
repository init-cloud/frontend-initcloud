import { useCallback, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import RuleCard from "../components/RuleCard";
import OnOffStatus from "../components/OnOffStatus";
import Swal from "sweetalert2";
import React from "react";

const filterSlideIn = keyframes`
  0% {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
  }
  to {
      opacity: 1;
      transform: translateZ(0);
  }
`
const Box = styled.div`
  border: 1px solid rgba(46,54,80,.125);
  border-radius: 1rem;
  flex-grow: 1;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  background-color: white;
  min-width: 620px;
  min-height: 500px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const SearchFilter = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`
const Form = styled.form`
  padding: 0px 0px;
`
const Search = styled.input`
  width: 280px;
  height: 35px;
  border-radius: 0.5rem;
  padding-left: 10px;
  border: 2px solid rgba(46,54,80,.125);
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  transition: all 0.5s;

  &:focus {
    outline: 0;
    border: 2px solid black;
  }
`
const Filters = styled.ul`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 10px;
  list-style: none;
  padding: 0px 0px;
  margin: 0px;
  flex-wrap: wrap;
`
const Filter = styled.li`
  display: inline-block;
  height: 25px;
  line-height: 23px;
  padding: 0px 10px;
  text-align: center;
  border: 1px solid ${(props) => props.color};
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  font-weight: bold;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  &:hover {
    filter: brightness(90%);
  }
  &:active {
    opacity: 0.7;
    transform: scale(1.01);
  }
  animation: ${filterSlideIn} 0.5s;
`
const Content = styled.div`
  display: flex;
  overflow: auto;
  min-height: 460px;
  max-height: calc(100vh - 220px);
  padding: 10px;
  justify-content: center;
  align-content: start;
  padding: 1rem;
  flex-wrap: wrap;
  overflow-x: hidden;
  gap: 1rem;
  
  &::-webkit-scrollbar {
    width: 10px;
    height: 15px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #E6E6E6;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
  &::-webkit-scrollbar-track-piece:end {
    margin-bottom: 10px;
  }
`
const colorTable = [
  "#F9F871",
  "#C1FFA8",
  "#A1FFDF",
  "#ADFFFF"
]

const RuleList = React.memo(({ data, onClickCard }) => {
  const [filter, setFilter] = useState("");
  const [filters, setFilters] = useState([]);
  const [rules, setRules] = useState([]);
  const [OnCount, setOnCount] = useState(0);
  const [OffCount, setOffCount] = useState(0);
  const [customCount, setCustomCount] = useState(0);

  const filtering = useCallback(() => {
    let newRules;
    if (data) {
      newRules = [...data];
      for (let i = 0; i < filters.length; i++) {
        newRules = newRules.filter(data =>
          data.description.toLowerCase().includes(filters[i].toLowerCase()) || data.id.toLowerCase().includes(filters[i].toLowerCase())
        );
      }
      setOnCount(0);
      setOffCount(0);
      setCustomCount(0);
      newRules.map((item) => {
        if (item.state === 'y') setOnCount((current) => current += 1);
        else setOffCount((current) => current += 1);
        if (item.isModified === 'y') setCustomCount((current) => current += 1);
        return 0;
      })
    }
    setRules(newRules);
  }, [data, filters]);

  const onChange = (event) => setFilter(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (filter === "") return;
    if (filters.length === 4) {
      Swal.fire({ title: "Too many filters!!", text: "Up to 4 filters can be used." });
      return;
    }
    if (filters.includes(filter)) {
      Swal.fire("This tag has already\n been entered");
      setFilter("");
      return;
    }
    setFilters((current) => [...current, filter]);
    setFilter("");
  };

  const deleteFilter = (event) => {
    setFilters((current) => current.filter((filter) => filter !== event.target.innerText.slice(0, -2)));
  };

  useEffect(() => {
    setRules(data);
  }, [data]);

  useEffect(() => {
    filtering();
  }, [filtering]);

  return (
    <>
      <h1>Check List</h1>
      <SearchFilter>
        <Form onSubmit={onSubmit}>
          <Search
            type="search"
            placeholder="Search cheklist or add tag to filter"
            value={filter}
            onChange={onChange}
          />
        </Form>
        <Filters>
          {filters.map((item, index) => (
            <Filter
              key={index}
              onClick={deleteFilter}
              color={colorTable[index % 4]}
            >
              {item + " x"}
            </Filter>
          ))}
        </Filters>
      </SearchFilter>
      <Box>
        <OnOffStatus On={OnCount} Off={OffCount} custom={customCount} />
        <Content>
          {rules ? (
            rules.length === 0 ? (
              <h3>No Search Results.</h3>
            ) : (
              rules.map((data) => (
                <RuleCard
                  key={data.seq}
                  rule={data}
                  onClickCard={onClickCard}
                />
              ))
            )
          ) : (
            <h2 style={{ textAlign: "center", lineHeight: "55px" }}>Loading...</h2>
          )}
        </Content>
      </Box>
    </>
  );
});

export default RuleList;