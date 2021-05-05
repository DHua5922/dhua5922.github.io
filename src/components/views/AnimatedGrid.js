import { SizeMe } from 'react-sizeme';
import StackGrid from "react-stack-grid";
import React from "react";

export default function AnimatedGrid({ children }) {
    return (
        <SizeMe>
            {({ size }) => {    
                const { width } = size;

                // initially 3 columns
                let columnWidth = "33.33%";
                // 1 column
                if(width < 576) columnWidth = "100%";
                // 2 column
                else if(width < 992) columnWidth = "50%";

                return (
                    <StackGrid
                        columnWidth={columnWidth}
                        gutterWidth={40}
                        gutterHeight={40}
                    >
                        { children }
                    </StackGrid>
                );
            }}
        </SizeMe>
    );
}