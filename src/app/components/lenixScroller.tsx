"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

const LenisScroller = ({ children }: { children: React.ReactNode }) => {
    return (
        <ReactLenis root options={{ smoothWheel: true,lerp: 0.1, duration: 1 }} >
            {children}
        </ReactLenis>
    );
};

export default LenisScroller;