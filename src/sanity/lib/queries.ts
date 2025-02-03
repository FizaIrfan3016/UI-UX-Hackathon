import { groq } from "next-sanity";

// groq query for foods 
export const foods = groq`*[_type =="food"]`;
export const three = groq`*[_type == "food"][0..5]`;
export const two = groq`*[_type == "food"][0..3]`;

// groq query for chefs

export const chefs = groq`*[_type == "chef"] `;
export const four = groq`*[_type == "chef"][0..11]`;