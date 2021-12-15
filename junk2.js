return (
    <React.Fragment>
      {isLoading && <h1 color='black'>Is Loading</h1>}
     {/* {shiny.length === 0 && data.length=== 0 &&   <MaterialTable
            title=""
            icons={tableIcons}
            columns={columns}
            data={[]}
            components={{
              Body: (props) => (
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                <h3>No records found</h3>
                
                </div>
              ),
              emptyDataSourceMessage: <h1>No data found</h1>,
            }}
          ></MaterialTable>}  */}
      {showModal && (
        // <Modal onhideModal={hideModalHandler}>
        //   <h1>Hello</h1>
        // </Modal>
        // <SendMail onhideModal={hideModalHandler}></SendMail>

        // <SendMail onhideModal={hideModalHandler}></SendMail>
        <SendMail onhideModal={hideModalHandler}></SendMail>
      )}
      <div
        id="mtdiTableBackground"
        className="App"
        style={{ background: "#E5E5E5" }}
      >
        <h5
          className="titleTable"
          style={{
            color: "#C4C4C4",
            width: "450px",
            fontSize: "14px",
            fontWeight: "800",
            marginLeft: "1em",
            marginBottom: "0px",
          }}
        >
          Transacciones digitales: Vista Administrador
        </h5>
        <p
          classname="textNameTable"
          style={{
            color: "black",
            width: "450px",
            fontSize: "30px",
            fontWeight: "800",
            marginLeft: "1em",
          }}
        >
          Camilo Vega
        </p>
        <label htmlFor="select-country">
          <h5
            style={{
              color: "black",
              width: "30px",
              fontSize: "14px",
              fontWeight: "800",
              marginLeft: "1em",
              marginBottom: "0px",
            }}
          >
            Pais
          </h5>
          <Select
            labelId="select-country"
            id="select-country"
            style={{ width: 100, marginLeft: "1em", borderRadius: "17px" }}
            value={country}
            label="Country"
            onChange={handleCountryChange}
          >
            {Array.from(new Set(data.map((obj) => obj.pais))).map((period) => {
              return <MenuItem value={period}>{period}</MenuItem>;
            })}
          </Select>
        </label>

        <label>
          <h5
            style={{
              color: "black",
              fontSize: "14px",
              fontWeight: "800",
              marginLeft: "1em",
              marginBottom: "18px",
            }}
          >
            Fecha
          </h5>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          {/* <img src={CalendarIcon} /> */}
        </label>

        <label htmlFor="select-canal">
          <h5
            style={{
              color: "black",
              fontSize: "14px",
              fontWeight: "800",
              marginLeft: "1em",
              marginBottom: "0px",
            }}
          >
            Canal De Venta
          </h5>

          <Select
            labelId="select-canal"
            id="select-canal"
            style={{ width: 100, marginLeft: "1em" }}
            value={salesChannel}
            label="select-canal"
            onChange={handleSalesChannelChange}
          >
            {Array.from(new Set(data.map((obj) => obj.canal_de_venta))).map(
              (period) => {
                return <MenuItem value={period}>{period}</MenuItem>;
              }
            )}
          </Select>
        </label>

        <label htmlFor="select-tienda">
          <h5
            style={{
              color: "black",
              fontSize: "14px",
              fontWeight: "800",
              marginLeft: "1em",
              marginBottom: "0px",
            }}
          >
            Tienda
          </h5>
          <Select
            labelId="select-tienda"
            id="select-tienda"
            style={{ width: 100 }}
            value={store}
            label="select-canal"
            onChange={handleStoreChange}
          >
            {/* {data.map((e, key) => {
          return (
            <MenuItem key={key} value={e.tienda}>
              {e.tienda}
              </MenuItem>
          );
        })} */}
            {Array.from(new Set(data.map((obj) => obj.tienda))).map(
              (period) => {
                return <MenuItem value={period}>{period}</MenuItem>;
              }
            )}
          </Select>
        </label>

        <label htmlFor="select-tienda-official">
          <h5
            style={{
              color: "black",
              fontSize: "14px",
              fontWeight: "800",
              marginLeft: "0em",
              marginRight: "1em",
              marginBottom: "0px",
            }}
          >
            Tienda Oficial
          </h5>
          <Select
            labelId="select-tienda-official"
            id="select-tienda-official"
            style={{ width: 100 }}
            value={officialStore}
            label="select-tienda-official"
            onChange={handleOfficialStoreChange}
          >
            {Array.from(new Set(data.map((obj) => obj.official_store))).map(
              (period) => {
                return <MenuItem value={period}>{period}</MenuItem>;
              }
            )}
          </Select>
        </label>

        <label htmlFor="select-client">
          <h5
            style={{
              color: "black",
              fontSize: "14px",
              fontWeight: "800",
              marginLeft: "1em",
              marginBottom: "0px",
            }}
          >
            Cliente
          </h5>
          <Select
            labelId="select-client"
            id="select-client"
            style={{ width: 100 }}
            value={client}
            label="select-tienda-official"
            onChange={handleClientChange}
          >
            {Array.from(new Set(data.map((obj) => obj.cliente))).map(
              (period) => {
                return <MenuItem value={period}>{period}</MenuItem>;
              }
            )}
          </Select>
        </label>

        <button className="refreshButton" onClick={reloadTableHandler}>
          <img src={RefreshIcon} />
        </button>
        {/* {data.length === 0 ? (
          <MaterialTable
            title=""
            icons={tableIcons}
            columns={columns}
            data={[]}
            components={{
              Body: (props) => (
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                  <Spinner
                    animation="border"
                    style={{ color: "#1D308E", alignItems: "center" }}
                  ></Spinner>
                  {/* <span><Spinner
                    animation="border"
                    style={{ color: "#1D308E" }}
                  ></Spinner></span>
                  <span><h3>Loading Data</h3></span> */}
                {/* </div>
              ),
              emptyDataSourceMessage: <h1>No data found</h1>,
            }}
          ></MaterialTable>
        ) : (
          <MaterialTable
            localization={{
              body: {
                emptyDataSourceMessage: (
                  <div>
                    <span>No records match the value</span>
                    <Spinner
                      animation="border"
                      style={{ color: "#1D308E", marginLeft: "1em" }}
                    />
                  </div>
                ),
              },
            }}
            key={data.id_mtdi}
            title="Instance Table"
            icons={tableIcons}
            title=""
            data={data}
            columns={columns}
            options={{ columnsButton: true, sorting: true }}
            style={{ marginLeft: "1em", marginTop: "2em" }}
          />
        )} */} */}


        {data.length === 0 &&  <MaterialTable
    title=""
    icons={tableIcons}
    columns={columns}
    data={[]}
    components={{
      // Body: (props) => (
        
      //   <React.Fragment>
      //     {shiny.length === 0 &&
      //   <div 
      //     style={{
      //       alignItems: "center",
      //       display: "flex",
      //       justifyContent: "center",
      //       width: "100%",
      //     }}
      //   >
      //     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
      //     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
      //     <Spinner
      //       animation="border"
      //       style={{ color: "#1D308E", alignItems: "center" }}
      //     ></Spinner>
      //     {/* <span><Spinner
      //       animation="border"
      //       style={{ color: "#1D308E" }}
      //     ></Spinner></span>
      //     <span><h3>Loading Data</h3></span> */}
      //   </div>}
      //   {shiny.length !== 0 && 
      //   <div>
      //   <h1>No data</h1>
      //   </div>}
      //   </React.Fragment>
      // ),
      // emptyDataSourceMessage: <h1>No data found</h1>,
      Row: props => <CustomLoader {...props}/>
    }}
  ></MaterialTable>}

  {data.length !== 0 &&  <MaterialTable
    localization={{
      body: {
        emptyDataSourceMessage: (
          <div>
            <span>No records match the value</span>
            <Spinner
              animation="border"
              style={{ color: "#1D308E", marginLeft: "1em" }}
            />
          </div>
        ),
      },
    }}
    key={data.id_mtdi}
    title="Instance Table"
    icons={tableIcons}
    title=""
    data={data}
    columns={columns}
    options={{ columnsButton: true, sorting: true}}
    style={{ marginLeft: "1em", marginTop: "2em" }}
  />}

  {/* {shiny.length === 0 && data.length===0 &&<h1 style={{color:'black'}}>Hello</h1>} */}

        {/* <Spinner animation="border" style={{color: "#1D308E"}} /> */}
      </div>
    </React.Fragment>
  );