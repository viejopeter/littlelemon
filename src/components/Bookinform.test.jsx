import React from "react";
import { render, screen } from "@testing-library/react";
import Bookingform from './BookingForm';
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

describe('Renders the BookingForm heading', () => {
    it('renders the BookingForm heading', () => {

        const availabletimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        const dispatch = vi.fn();

        render(<Bookingform availabletimes={availabletimes} dispatch={dispatch} />);
        const headingElement = screen.getByText("Make Your reservation");
        expect(headingElement).toBeInTheDocument();
    });
});
