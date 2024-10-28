import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envCompatible from "vite-plugin-env-compatible";
import replace from 'vite-plugin-replace';
// https://vitejs.dev/config/
export default defineConfig({
	envPrefix: "REACT_APP_",
	plugins: [react(), envCompatible(),
		replace({
			values: {
				'"use client";': '', // Replaces "use client"; with an empty string
			},
			include: ["node_modules/flowbite-react/**/*.js"], // Only applies to flowbite-react module files
		})
		
	]
	
});
