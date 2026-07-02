import React from "react";
import {render,screen} from "@testing-library/react"
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero.js"
    describe("hero Componenet",()=>{
        test("render hero image",()=>{
            render(<Hero/>)
            const heroimage=screen.getByAltText("Hero image");
            expect(heroimage).toBeInTheDocument();
            expect(heroimage).toHaveAttribute("src","media/images/Homehero.png")
        });
    });

