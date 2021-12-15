var x=29;
var y = x<13 ? "Child" : x<20 ? "Teenage" : x<30 ? "Twenties" : "Old people";
console.log(y);



{data.length === 0 ? (
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
        </div>
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
)}