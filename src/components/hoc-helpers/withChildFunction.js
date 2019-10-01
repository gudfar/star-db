import React from "react";

const withChildFunction = (Wrapped, renderFn) =>{
    return (props) => {
        return (
            <Wrapped{...props}>
                {renderFn}
            </Wrapped>
        );
    }
};

export default withChildFunction;