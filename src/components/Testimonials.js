import React from "react";
import { TerminalIcon, UserIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";


export default function Testimonials() {
    return (
        <section id="testimonials">
            <div className="container px-5 py-10 mx-auto text-center">
                <UserIcon className="w-10 inline block mb-4"/>
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Client Testimonials
                </h1>
                <div className="flex flex-wrap m-4">
                    {testimonials.map}
                </div>
            </div>
        </section>
    )
}