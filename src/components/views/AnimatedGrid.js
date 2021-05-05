import { SizeMe } from 'react-sizeme';
import StackGrid from "react-stack-grid";
import React from "react";

export default function AnimatedGrid({ children }) {
    return (
        <SizeMe>
            {({ size }) => {    
                const { width } = size;

                // initially 2 columns
                let columnWidth = "50%";
                // 1 column
                if(width < 576) columnWidth = "100%";

                return (
                    <StackGrid
                        columnWidth={columnWidth}
                        gutterWidth={80}
                        gutterHeight={80}
                    >
                        { children }
                    </StackGrid>
                );
            }}
        </SizeMe>
    );
}