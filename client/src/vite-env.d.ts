/// <reference types="vite/client" />

import 'styled-components';

declare module 'styled-components' {
        export interface DefaultTheme {
                id: string;
                name: string;
                colors: {
                        background: string;
                        cursor: string;
                        scrollTrack: string;
                        scrollHandle: string;
                        scrollHandleHover: string;
                        text: {
                                plain: string;
                                light: string;
                                dark: string;
                                bold: string;
                                primary: string;
                                secondary: string;
                                tertiary: string;
                                commands: tring;
                                links: string;
                        };
                };
        }
}
