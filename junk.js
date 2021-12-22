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





<Form onSubmit={submitHandler}>
<FormGroup>
  <Label for="exampleEmail">Email</Label>
  <Input
    type="email"
    name="email"
    id="exampleEmail"
    placeholder="with a placeholder"
    value={emailState}
    onChange={inputChangeHandler}
  />
</FormGroup>
<FormGroup>
  <Label for="examplePassword">Password</Label>
  {/* <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" > 
  <Chip label={emailState} variant='outlined'></Chip>
  </Input> */}
  {/* <ReactChipInput
classes="class1 class2"
chips={chipState}
onSubmit={value => addChip(value)} */}
  {/* <input
    className={classes.input}
    value={chipState.value}
    onKeyDown={handleKeyDown}
    placeholder="Type or paste email addresses and press `Enter`..."
  /> */}
  <Chips  onSendState={props.onSendState}></Chips>
</FormGroup>
<Button variant="primary" type="submit">
  Submit
</Button>
</Form>