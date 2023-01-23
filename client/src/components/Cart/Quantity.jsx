import { useState } from "react";
import styled from 'styled-components';

const Container = styled.div`

`;

export default function Quantity() {
    const [quantity, setQuantity] = useState(1);

     const changeQuantity = (ch) => {
        if (quantity === 1 && ch === -1)
            return;
        if (quantity === 7 && ch === 1)
            return;
        setQuantity((prev) => prev + ch);
    }
    
    return (
        <Container>
            <button onClick={() => changeQuantity(-1)}>-</button>
            <p>{quantity}</p>
            <button onClick={() => changeQuantity(1)}>+</button>
        </Container>
    );
}