import { useCallback, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import RuleCard from "../components/RuleCard";

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
  overflow: auto;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  background-color: white;
  min-width: 610px;
  min-height: 500px;
  max-height: 765px;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-content: start;
  padding: 1rem;
  flex-wrap: wrap;
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
  border: 1px solid rgba(46,54,80,.125);
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  transition: all 0.5s;
  &:hover {
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

const colorTable = [
  "#F9F871",
  "#C1FFA8",
  "#A1FFDF",
  "#ADFFFF",
  "#D5FDFF",
  "#FFECFF"
]

function CheckList({ data }) {
  const [filter, setFilter] = useState("");
  const [filters, setFilters] = useState([]);
  const [rules, setRules] = useState([]);

  const filtering = useCallback(() => {
    let newRules;
    if (data) {
      newRules = [...data];
      for(let i = 0; i < filters.length; i++) {
        newRules = newRules.filter(data => data.rule.description.includes(filters[i]));
      }
    }
    setRules(newRules);
  }, [data, filters]);

  const onChange = (event) => setFilter(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (filter === "") return;
    if (filters.length === 3) {
      alert("그만해")
      return;
    }
    if (filters.includes(filter)) {
      alert("그거 이미 했다 이놈아");
      setFilter("");
      return;
    }
    setFilters((current) => [...current, filter]);
    setFilter("");
  };
  const deleteFilter = (event) => {
    setFilters((current) => current.filter((filter) => filter !== event.target.innerText.slice(0,-2)));
  };

  useEffect(() => {
    setRules(data)
  }, [data]);

  useEffect(()=>{
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
              color={colorTable[index % 6]}
            >
              {item + " x"}
            </Filter>
          ))}
        </Filters>
      </SearchFilter>
      <Box>
        {rules ? (
          rules.map((data, index) => (
            <RuleCard
              key={index}
              rule={data.rule}
            />
          ))
        ) : (
          <h2 style={{ textAlign: "center", lineHeight: "55px" }}>Loading...</h2>
        )}
      </Box>
    </>
  );
}

export default CheckList;