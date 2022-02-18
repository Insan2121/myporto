import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding-bottom: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  // border-radius: 16px;
  // box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  // text-align: start;
  padding-bottom: 20%;
  padding: 1.5rem;
  width: 500px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  &:hover{
  //box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  background: #0F1624;
  }

`;
export const TitleContent = styled.div`
  text-align: left;
  z-index: 20;
  width: 100%;
  margin-top: 1rem;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #FFFFF;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '2.5rem' : '1.5rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  // padding: 0 50px;
  padding-right: 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#FFFF;
font-size: 1.6rem;
// padding:1rem 1.5rem;
// background: #6b3030;

border-radius: 30px;
transition: 0.5s;
&:hover{
  // color: #2F80ED;
  // background: #FFFF;
  font-style: underline;
}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`

export const TextButton = styled.span`
margin-top:1rem;
font-size: 1.5rem;
font-style: italic;

`;