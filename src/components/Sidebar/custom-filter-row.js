function CustomFilter() {
    return (
      <MaterialTable
        icons={TABLE_ICONS}
        data={[
          {
            name: "Mehmet",
            surname: "Baran",
            birthYear: 1987,
            birthCity: 63,
          },
          {
            name: "Zerya Betül",
            surname: "Baran",
            birthYear: 2017,
            birthCity: 34,
          },
        ]}
        columns={[
          {
            title: "Name",
            field: "name",
          },
          {
            title: "Surname",
            field: "surname",
          },
          {
            title: "Birth Year",
            field: "birthYear",
            type: "numeric",
          },
          {
            title: "Birth Place",
            field: "birthCity",
            lookup: {
              34: "İstanbul",
              63: "Şanlıurfa",
            },
          },
        ]}
        options={{
          filtering: true,
        }}
        components={{
          FilterRow: (rowProps) => {
            const { columns } = rowProps;
  
            return (
              <>
                <tr>
                  {columns.map((col) => {
                    if (col.field) {
                      return (
                        <td>
                          <input
                            placeholder="custom filter"
                            id={col.field}
                            onChange={(e) =>
                              console.log(e.target.id, e.target.value)
                            }
                          />
                        </td>
                      );
                    }
                  })}
                </tr>
              </>
            );
          },
        }}
      />
    );
  }
  export default CustomFilter;