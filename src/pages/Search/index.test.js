import { render, screen } from "@testing-library/react";
import Home from ".";
import { Provider } from "react-redux";
import Store from "../../store";

test('should show searchbar', () => {
    render(
        <Provider store={Store}>
            <Home />
        </Provider>);
    //toBeInTheDoc masukkan ke dalam docs dan dia adalah fungsi use ()
    expect(screen.getByTestId("searchBarForm")).toBeInTheDocument()
})
