import styled from "styled-components";

export const BannerDiv = styled.div<{ bg: string }>`
    min-height: 100vh;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 60px;
    background-size: cover;
    background-position: center;
    color: white;
    background-color: black;
    background-image:  linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0.0) 70%),
    url(${(props) => props.bg});
`;

export const BannerTextWrap = styled.div`
    width: fit-content;
    padding: 40px 40px 40px 0;
    border-radius: 5px;
    margin-bottom: 150px;
`
export const BannerTitle = styled.span`   
    display: block;
    font-size: 80px;
    margin-bottom: 25px;
`
export const BannerText = styled.p`
    font-size: 20px;
    max-width: 700px;
    word-break: break-word;
    line-height: 1.2;
`