import styled from "styled-components"

const DisplayUser = ({userDisplay}) => {
    return (
        <CardCont>
            {userDisplay.map((item, i) => (
                <h3 key={i}>{item}</h3>
                ))}
        </CardCont>
    )
}

export default DisplayUser

const CardCont = styled.div`
margin-top: 2rem;
`