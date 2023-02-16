import React from "react";

export function LoginPage() {
    return(
        <>
            <label>
                nome:
                <input />
            </label>

            <label>
                email:
                <input />
            </label>

            <label>
                nova senha:
                <input />
            </label>

            <button>enviar</button>
        </>
    )
}