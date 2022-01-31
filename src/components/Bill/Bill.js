import text from "./text";
import datas from "../datas.json";
import {
  MainContainer,
  Span,
  TicketLabel,
  TotalTag,
  Collapsed,
  Titles,
  Li,
  BillFooter,
  LabelandIcon,
  AmountandDescription,
  X,
  spanArrow, Cantidad
} from "./style";
import store from "./store.svg";
import expand from "./expand.svg";
import card from "./card.svg";
import cantidad from "./cantidad.svg";
import collapse from "./collapse.svg";
import pay from "./pay.svg";

function Bill(props) {
  const valuecolor = datas.map((data) => {
    return (
      <Li>
        <X>

          <Cantidad>
            {data.cantidad}
          </Cantidad>
        
          <span>{data.producto}</span>
        </X>
        <span>{data.value}</span>
      </Li>
    );
  });
  return (
    <div className="bill-container-card-g">
      <TicketLabel>{text.ticketID}{props.numeroRecibo}</TicketLabel>
      <MainContainer>
        <div >
          <Collapsed>
            <div>
              <img src={store} alt="store" className="icon-billl-op" />
            </div>
            <div>
              <Span className="billl-ttitle">{text.dummyMerchant}</Span>
              <Span className="billl-tsubtitle" color="#5E5F73" >{text.dummyDate}</Span>
            </div>
            <TotalTag>
              {text.total}
              {text.dummyTotal}
            </TotalTag>
          </Collapsed>
          <div>
            <div className="row">
              <input id="togList1" type="checkbox" />
              <label htmlFor="togList1">
                <span>
                  <img id="expand" className="pointer" src={expand} alt="expand" />
                </span>
                <span>
                  <img id="collapse" src={collapse} alt="collapse" />
                </span>
              </label>
              <div className="list " style={{
                marginBottom:'10px'
              }}>
                <Titles>
                  <AmountandDescription>
                  <span>{text.amount}</span>
                  <span>{text.description}</span>
                  </AmountandDescription>
                  <span>{text.price}</span>
                </Titles>
                <ul>
                  <li>{valuecolor}</li>
                </ul>

                <BillFooter>
                <img src={card} alt="card" />
                  <LabelandIcon>
                    <span>{text.label}</span>
                    <p>{text.bottomLabel}</p>
                  </LabelandIcon>
                  <span>{text.totalFooter}</span>
                </BillFooter>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default Bill;
