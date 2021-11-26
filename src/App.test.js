import React from "react";
import {
  render,
  screen,
  act,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import { Pokedex } from "./pages/Pokedex";
import { pokeData } from "./test/moked.data";

const ordering = [
  { caption: "Nome Ascendente", value: "NomeAscendente", selected: false },
  { caption: "Nome Descendente", value: "NomeDescendente", selected: false },
  {
    caption: "Número Ascendente",
    value: "NumeroAscendente",
    selected: false,
  },
  {
    caption: "Número Descendente",
    value: "NumeroDescendente",
    selected: false,
  },
  { caption: "Nenhum", value: "undefined", selected: true },
];

describe("Hender pokedex page", () => {
  it("renders page and read ordering", () => {
    render(<Pokedex />);
    const linkElement = screen.getByText(/Ordenar por/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("should be like pokemon", async () => {
    await act(async () => {
      render(<Pokedex dataDefault={pokeData} />);
    });
    const element = await waitFor(
      () => screen.getAllByTestId("pokemonItem")[0]
    );
    fireEvent.click(element, { target: { value: 1 } });
    expect(screen.getByTestId("likesvg")).toBeInTheDocument();
    fireEvent.click(element, { target: { value: 1 } });
  });

  it("should be search", async () => {
    await act(async () => {
      render(<Pokedex dataDefault={pokeData} />);
    });
    const inputSearch = await waitFor(() => screen.getByTestId("inputSearch"));
    fireEvent.click(inputSearch);
    inputSearch.setAttribute("value", "Bulbasau");
    fireEvent.change(inputSearch, { target: { value: "Bulbasaur" } });
    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
  });

  it("should be change order", async () => {
    await act(async () => {
      render(<Pokedex dataDefault={pokeData} />);
    });
    const selectOrderingSelect = await waitFor(() =>
      screen.getByTestId("orderingSelect")
    );

    await fireEvent.change(selectOrderingSelect, {
      target: { value: JSON.stringify(ordering[2]) },
    });
    await fireEvent.change(selectOrderingSelect, {
      target: { value: JSON.stringify(ordering[1]) },
    });
    await fireEvent.change(selectOrderingSelect, {
      target: { value: JSON.stringify(ordering[0]) },
    });
    await fireEvent.change(selectOrderingSelect, {
      target: { value: JSON.stringify(ordering[3]) },
    });

    expect(screen.getByText(/nº 001/i)).toBeInTheDocument();
    //  screen.logTestingPlaygroundURL();
  });

  it("should be filter likes", async () => {
    // jest.spyOn(React, "useEffect").mockImplementationOnce(jest.fn());
    await act(async () => {
      render(<Pokedex dataDefault={pokeData} />);
    });
    const pokemonElement = await waitFor(
      () => screen.getAllByTestId("pokemonItem")[0]
    );
    fireEvent.click(pokemonElement, { target: { value: 1 } });

    const check = await waitFor(() => screen.getByTestId("showOnlyLiked"));
    fireEvent.click(check);
    fireEvent.change(check, { target: { value: "checked" } });

    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
  });
});
