import styled from 'styled-components';

const Layout = styled.div`
  margin:72px 0px;
  height: 450px;
  width: 1280px;
  background-color: black;
`;
const Quotation = styled.img`
  margin-top: 4%;
`;
const MainContent = styled.p`
  font: normal normal 900 40px/50px Neue Haas Grotesk Display Pro;
  align-items: center;
  letter-spacing:0.8px;
  margin-top: 31px;
  margin-bottom: 0px;
  padding: 0px 15%;
  height:141px;
  color: #FFFFFF;
`;

const ColoredText = styled.span`
color:#FF88AD ;
`;

const BottomText = styled.p`
  margin: 10px 463px 93px 539px;
  height:42px;
  text-align: center;
  font: normal normal bold 16px/22px Neue Haas Grotesk Text Pro;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  width:196px;
`;

const Card = ({ data}) => {
  console.log("data", data);
  return (
    <Layout>
      <Quotation src="/assets/Group 73373.svg" width="56px" height="38.3px" alt="quotation" ></Quotation>
      <MainContent>{data.description1} <ColoredText>{data.colored}</ColoredText></MainContent>
      <img src="/assets/Group 73379.svg" width="60px" height="60px"alt="cake" ></img>
      <BottomText>{data.description2}</BottomText>
    </Layout>
  );
}
 
export default Card;