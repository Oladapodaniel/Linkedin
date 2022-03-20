import styled from "styled-components";
import LeftSide from "./leftSide";
import Main from "./main";
import RightSide from "./rightSide";

const Home = () => {
    return (
        <Container>
            <Section>
                <h5>
                    <a>Hiring in a hurray? - </a>
                </h5>
                <p>Find talented pros in record time with Upwork and keep business moving.</p>
            </Section>
            <Layout>
                <LeftSide />
                <Main />
                <RightSide />
            </Layout>
        </Container>
    )
}

const Container = styled.div`
    padding-top: 52px;
    max-width: 100%
`
const Content  = styled.div`
    max-width: 1128px;
    margin-left: auto;
    margin-right: auto;
`
const Section = styled.div`
    min-height: 50px;
    padding: 16px;
    box-sizing: content-box;
    text-align: center;
    text-decoration: underline;
    display: flex;
    justify-content: center;

    h5 {
        color: #0a66c0;
        font-size: 14px;

        a {
            font-weight: 700;
        }
    }
    p {
        font-size: 14px;
        color: #434649;
        font-weight: 600;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 5px
    }
`

const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    grid-gap: 25px;
    margin: 25px 0;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }
    
`

export default Home