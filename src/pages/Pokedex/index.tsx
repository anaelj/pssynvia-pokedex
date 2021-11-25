import React, { useEffect, useState } from "react";

import {
  SearchBar,
  SearchContainer,
  FilterContainer,
  OrderingContainer,
  MainContent,
  ListContainer,
  MainContainer,
  ListContainerItem,
} from "./styles";
import Input from "./../../component/Input/index";
import { MyCustonSelect } from "../../component/Select";
import { getPokemonList } from "../../services/api";
import { Button } from "../../component/Button";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Switch from "react-switch";

interface IOrdering {
  value: string;
  caption: string;
  selected: boolean;
}

interface IPokemon {
  national_number: number;
  evolution: string | null;
  sprites: {
    normal: string;
    large: string;
    animated: string;
  };
  name: string;
  type: string[];
  total: number;
  hp: number;
  attack: number;
  defense: number;
  sp_atk: number;
  sp_def: number;
  speed: number;
  like: boolean;
}

export const Pokedex = () => {
  const [textSearch, setTextSearch] = useState("");
  const [pokemonData, setPokemonData] = useState<IPokemon[]>([]);
  const [pokeTypes, setPokeTypes] = useState<string[]>([]);
  const [filters, setFilters] = useState<string[]>([]);
  const [showLikeButton, setShowLikeButton] = useState(-1);
  const [onlyLiked, setOnlyLiked] = useState(false);

  useEffect(() => {
    if (textSearch.trim() === "") {
      getPokemonList().then((data) => {
        setPokemonData(data);
        handleApplyFilters(data);
      });
    } else {
      setPokemonData(
        pokemonData.filter((item) => {
          return (
            item.name.toLowerCase().includes(textSearch.toLowerCase()) ||
            item.national_number.toString().includes(textSearch)
          );
        })
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textSearch]);

  const handleApplyFilters = (data: IPokemon[]) => {
    if (filters.length > 0) {
      setPokemonData([]);
      for (const key in filters) {
        const element = filters[key];
        setPokemonData([
          ...data.filter((item) => item.type.toString().includes(element)),
        ]);
      }
    } else {
      getPokemonList().then((data) => {
        setPokemonData(data);
      });
    }
  };

  useEffect(() => {
    handleApplyFilters(pokemonData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const handleOrdering = (order: IOrdering) => {
    switch (order.value) {
      case ordering[0].value:
        setPokemonData([
          ...pokemonData.sort((a, b) =>
            a.name > b.name ? 1 : b.name > a.name ? -1 : 0
          ),
        ]);
        break;
      case ordering[1].value:
        setPokemonData([
          ...pokemonData.sort((a, b) =>
            a.name < b.name ? 1 : b.name < a.name ? -1 : 0
          ),
        ]);
        break;
      case ordering[2].value:
        setPokemonData([
          ...pokemonData.sort((a, b) =>
            a.national_number > b.national_number
              ? 1
              : b.national_number > a.national_number
              ? -1
              : 0
          ),
        ]);
        break;
      case ordering[3].value:
        setPokemonData([
          ...pokemonData.sort((a, b) =>
            a.national_number < b.national_number
              ? 1
              : b.national_number < a.national_number
              ? -1
              : 0
          ),
        ]);
        break;

      default:
        break;
    }
  };
  const ordering = [
    { caption: "Nome Ascendente", value: "NomeAscendente", selected: true },
    { caption: "Nome Descendente", value: "NomeDescendente", selected: false },
    {
      caption: "Número Ascendente",
      value: "NumeroAscendente",
      selected: false,
    },
    {
      caption: "Número Ascendente",
      value: "NumeroDescendente",
      selected: false,
    },
  ];
  const makeTypes = (data: IPokemon[]) => {
    let listAllTypes = data.map((item) => {
      return item.type.toString();
    });
    listAllTypes = listAllTypes.join().split(",");
    let listResumed = listAllTypes.filter((x, i, a) => a.indexOf(x) === i);
    setPokeTypes(listResumed);
  };

  useEffect(() => {
    getPokemonList().then((data) => {
      setPokemonData(data);
      makeTypes(data as IPokemon[]);
    });
  }, []);

  const handleFilterRefresh = (value: string) => {
    if (!!filters.find((element) => element === value)) {
      getPokemonList().then((data) => {
        setPokemonData(data);
        setFilters(filters.filter((element) => element !== value));
      });
    } else {
      setFilters([...filters, value]);
    }
  };

  const handleLike = (idx: number) => {
    const newPokemonData = [...pokemonData];
    const pokemonLiked = {
      ...pokemonData[idx],
      like: pokemonData[idx].like ? !pokemonData[idx].like : true,
    };
    newPokemonData[idx] = pokemonLiked;
    setPokemonData(newPokemonData);
  };

  useEffect(() => {
    if (onlyLiked) {
      setPokemonData(pokemonData.filter(item => item.like))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onlyLiked])


  return (
    <>
      <MainContainer>
        <SearchBar>
          <SearchContainer>
            <Input
              name="pesquisa"
              label="Pesquisa"
              data-testid="inputSearch"
              value={textSearch}
              width="830px"
              onChange={(e) => setTextSearch(e.target.value)}
              placeholder="Pesquisa por nome ou número"
            />
          </SearchContainer>
          <OrderingContainer>
            <label>Ordenar por</label>
            <MyCustonSelect
              name="orderingMyCustonSelect"
              data-testid="orderingSelect"
              onChange={(e) => {
                handleOrdering(JSON.parse(e.target.value));
              }}
            >
              {ordering.map((item, idx) => (
                <option  key={idx} value={JSON.stringify(item)} selected={item.selected}>
                  {item.caption}
                </option>
              ))}
            </MyCustonSelect>
          </OrderingContainer>
        </SearchBar>
        <MainContent>
          <FilterContainer>
            {pokeTypes.map((item, idx) => (
              <Button
                key={idx}
                selected={!!filters.find((element) => element === item)}
                onClick={() => handleFilterRefresh(item)}
              >
                <label>{item}</label>
              </Button>
            ))}
            <div style={{marginTop: '16px'}}>
              <div style={{paddingBottom: '6px'}}>Filtrar Favoritos</div>
              <Switch
                onChange={() => setOnlyLiked(!onlyLiked)}
                checked={onlyLiked}
                checkedIcon={false}
                uncheckedIcon={false}
                height={20}
              />
            </div>
          </FilterContainer>
          <ListContainer>
            <ul>
              {pokemonData.map((item, idx) => (
                <ListContainerItem
                  key={idx}
                  onClick={() => handleLike(idx)}
                  onMouseEnter={(e) => {
                    setShowLikeButton(idx);
                  }}
                  onMouseLeave={(e) => {
                    setShowLikeButton(-1);
                  }}
                >
                  <div>
                    {item.like ? (
                      <FaHeart />
                    ) : (
                      idx === showLikeButton &&
                      (item.like ? <FaHeart /> : <FaRegHeart />)
                    )}
                    <img src={item.sprites.normal} alt={item.name} />
                  </div>
                  <label className="number">Nº {item.national_number}</label>
                  <label className="name">{item.name}</label>
                  <div className="types">
                    {item.type.map((typeItem, idx) => (
                      <div
                        key={idx}
                        style={{
                          borderRadius: "0.3em",
                          color: `var(--color-white)`,
                          padding: "6px",
                          background: `var(--color-${typeItem.toLowerCase()})`,
                        }}
                      >
                        {typeItem}
                      </div>
                    ))}
                  </div>
                </ListContainerItem>
              ))}
            </ul>
          </ListContainer>
        </MainContent>
      </MainContainer>
    </>
  );
};
