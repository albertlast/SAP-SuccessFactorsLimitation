# Missing Features

- Reservation
- SAP BW connection

## Reservation

At the point of time it's not possible to got appointments with no time,
so when you only want to provide learnings when enough user wanted to visited it,
you got no chance to know this.

## SAP BW connection

LMS provide no ODQ/ODP API, so a transfer of high amount of data to a SAP BW ABAP solution like SAP BW or BW/4Hana is not possible by modern standards.

### SAP BW connection workaround

To overcome this issue, you can use the internal reporting solution of lms, to generate csv files.
But csv files are a huge step backward from the old premise lso solution.

# Own System

LMS is an own System which got an own database system and got a subset of employee data,
so not the full amount of information about the employee.
