import React from "react";
import SiIcon from "../../assets/img/si.png";
import noIcon from "../../assets/img/no.png";
import showPdf from "../../assets/img/showPdf.png";
import greyIcon from "../../assets/img/greyIcon.png";
import classes from "../Sidebar/mtdi-table.module.css";
import SendMail from "components/modalComponents/sendMail";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

function OrderMobileCard(props) {
  console.log(props.data);
  const { data } = props;
  const [horizontalTabs, setHorizontalTabs] = React.useState("home");
  const [verticalTabs, setVerticalTabs] = React.useState("info");
  const [pageTabs, setPageTabs] = React.useState("homePages");
  const [showModal, setshowModal] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [cardData, setcardData] = React.useState(data);
  const [openedCollapses, setOpenedCollapses] = React.useState([
    "collapseOne",
    "collapse1",
  ]);
  // //  React. useEffect(() => {
  // //   //  console.log(props.data);
  // //     setQuery(props.data);
  // //    console.log(cardData);
  // //   }, [props,cardData]);
  // with this function we create an array with the opened collapses
  // it is like a toggle function for all collapses from this page
  const collapsesToggle = (collapse) => {
    if (openedCollapses.includes(collapse)) {
      setOpenedCollapses(openedCollapses.filter((item) => item !== collapse));
    } else {
      openedCollapses.push(collapse);
      setOpenedCollapses([...openedCollapses, collapse]);
    }
  };
  console.log(cardData);
  const showModalHandler = (props) => {
    setshowModal(true);
  };
  const hideModalHandler = () => {
    setshowModal(false);
  };
  const showPdfHandler = () => {
    window.open(buyer.dte);
  };
  const X = props.data.filter((rt) => {
    return rt.tienda === "Unilever";
  });
  console.log(X);

  const searchFilter = (event) => {
    setQuery(event.target.value);

    console.log(query);
    if (query === "") return data;

    // const ui = props.data.filter(post => {
    //     if (query === '') {
    //       return post;
    //     }  else if (post.tienda === 'Unilever') {
    //       return post
    //     }
    //   });
    //   console.log(ui);
  };
  // console.log(cardData);
  let ht = <h1>hello</h1>
  return (
    <>
      <div>
        <input placeholder="search" onChange={searchFilter} />
      </div>
      <div className="content">
        <Row>
          <Col className="text-center" lg="6" md="12">
            <Card className="card-tasks">
              <CardHeader>
                {/* <CardTitle tag="h4">Tabla Órdenes</CardTitle>
                <h5 className="card-category">Pedidos</h5> */}
              </CardHeader>
              <CardBody>
                {/* <div className="table-full-width table-responsive"> */}

                {data
                  .filter((post) => {
                    if (query === "") {
                      return post;
                    }
                  })
                  .map((post, index) => (
                    
                    <div className="box" key={index}>
                      <p>{post.pais}</p>
                      <p>{post.tienda}</p>
                      <p>{post.order_id}</p>
                    </div>
                  ))}
                {data
                  .filter((post) => {
                    if (query !== "") {
                    console.log(query);
                      console.log(post);
                      // let x = post.tienda.includes(query);
                      return (
                        post.tienda === query ||
                        post.pais === query ||
                        post.order_id === query ||
                        post.fecha_creacion === query ||
                        post.canal_de_venta === query
                      );
                      return x;
                      //  return post.indexOf('Unile') !== -1
                      // return post.tienda.includes('Unile');
                    }
                  })
                  .map((post, index) => (
                    <div className="box" key={index}>
                      <p>{post.pais}</p>
                      <p>{post.tienda}</p>
                      <p>{post.order_id}</p>
                    </div>
                  ))}

                {/* </div> */}
              </CardBody>
              {/* <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fa fa-refresh spin" />
                  Updated 3 minutes ago
                </div>
              </CardFooter> */}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default OrderMobileCard;
